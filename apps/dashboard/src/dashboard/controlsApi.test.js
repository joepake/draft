import { beforeEach, describe, expect, it, vi } from 'vitest';
import { DuplicateChildNameError } from '@kidgate/core/repositories/child';
import { ControlError, createActions } from './controlsApi.js';

const { repos, track } = vi.hoisted(() => ({
  repos: {
    childRepository: {
      rename: vi.fn(),
      create: vi.fn(),
      remove: vi.fn(),
      assignDevice: vi.fn(),
    },
    childRulesRepository: { updateRules: vi.fn(), setDailyBudget: vi.fn() },
    controlRepository: { updateControls: vi.fn() },
    deviceRepository: {
      chooseMonitoredDevice: vi.fn(),
      updateChildDeviceName: vi.fn(),
      deleteChildDevice: vi.fn(),
      resetParentPinLockout: vi.fn(),
      toggleLock: vi.fn(),
    },
    familyPlacesRepository: { updatePlaces: vi.fn() },
    familyRepository: {
      removeMember: vi.fn(),
      setFamilyName: vi.fn(),
      setLeaderboardEnabled: vi.fn(),
    },
    parentInviteRepository: { createCode: vi.fn(), resolve: vi.fn() },
    rewardTaskRepository: {
      resolveClaim: vi.fn(),
      createTask: vi.fn(),
      updateTask: vi.fn(),
      deleteTask: vi.fn(),
    },
    safetyCheckInRepository: { createRequest: vi.fn() },
    siteRequestRepository: { resolveRequest: vi.fn() },
    timeRequestRepository: { resolveRequest: vi.fn() },
    webSessionRepository: { list: vi.fn(), revoke: vi.fn() },
  },
  track: {
    trackCheckInRequest: vi.fn(),
    trackDeviceLock: vi.fn(),
    trackParentAction: vi.fn(),
    trackRewardClaim: vi.fn(),
    trackSiteRequest: vi.fn(),
    trackTimeRequest: vi.fn(),
  },
}));

vi.mock('../lib/analytics.js', () => track);
vi.mock('../adapters/repositories.js', () => repos);

const FAMILY = 'owner-uid';
const owner = (extra = {}) =>
  createActions({ familyId: FAMILY, canWrite: true, isOwner: true, ...extra });
const coParent = () =>
  createActions({ familyId: FAMILY, canWrite: true, isOwner: false });

beforeEach(() => {
  vi.clearAllMocks();
});

describe('what a failed control tells the parent', () => {
  it('says a Premium refusal as one, not as a broken session', async () => {
    repos.controlRepository.updateControls.mockRejectedValueOnce({
      code: 'forbidden',
      serverCode: 'billing/premium-required',
      detail: 'Premium required',
    });
    const error = await owner()
      .updateControls('d1', { appBlockingEnabled: true })
      .catch(e => e);
    expect(error).toBeInstanceOf(ControlError);
    expect(error).toMatchObject({
      code: 'forbidden',
      messageKey: 'controlError.premiumRequired',
      serverCode: 'billing/premium-required',
    });
  });

  it('keeps an ordinary 403 on the forbidden sentence', async () => {
    repos.deviceRepository.toggleLock.mockRejectedValueOnce({ code: 'forbidden' });
    await expect(owner().setLock('d1', true)).rejects.toMatchObject({
      code: 'forbidden',
      messageKey: 'controlError.forbidden',
    });
  });

  // A direct write's rules refusal is a `FirestoreError`, string `code` and all.
  it('says a rules refusal as forbidden, not as "try again"', async () => {
    repos.familyRepository.setFamilyName.mockRejectedValueOnce(
      Object.assign(new Error('Missing or insufficient permissions.'), {
        code: 'permissionDenied',
      }),
    );
    await expect(owner().setFamilyName('Nguyen')).rejects.toMatchObject({
      code: 'permissionDenied',
      messageKey: 'controlError.forbidden',
    });
  });

  it.each(['unauthenticated', 'staleCredential'])(
    'asks the parent to sign in again on %s',
    async code => {
      repos.deviceRepository.toggleLock.mockRejectedValueOnce({ code });
      await expect(owner().setLock('d1', true)).rejects.toMatchObject({
        code,
        messageKey: 'controlError.sessionExpired',
      });
    },
  );

  it('falls back to the generic sentence for a code it has no sentence for', async () => {
    repos.deviceRepository.toggleLock.mockRejectedValueOnce({ code: 'somethingNew' });
    await expect(owner().setLock('d1', true)).rejects.toMatchObject({
      code: 'somethingNew',
      messageKey: 'controlError.generic',
    });
  });

  it('carries the server code through so the page can name the monitored-device cooldown', async () => {
    repos.deviceRepository.chooseMonitoredDevice.mockRejectedValueOnce({
      code: 'rateLimited',
      serverCode: 'monitored/cooldown',
    });
    const error = await coParent()
      .chooseMonitoredDevice('d2')
      .catch(e => e);
    expect(error).toMatchObject({
      code: 'rateLimited',
      messageKey: 'controlError.rateLimited',
      serverCode: 'monitored/cooldown',
    });
    expect(error.appMessageKey).toBeUndefined();
  });

  /*
   * A 400, so the mapped verdict is `unknown` and its sentence is "Try again" —
   * for a cap no retry can lift. The app pack's sentence is the one to say.
   */
  it("says the reward-task cap in the phone's own sentence", async () => {
    repos.rewardTaskRepository.createTask.mockRejectedValueOnce({
      code: 'unknown',
      serverCode: 'rewardTask/too-many',
    });
    await expect(owner().createRewardTask({ title: 'Read' })).rejects.toMatchObject({
      appMessageKey: 'errors.rewardTaskLimitReached',
    });
  });

  it('answers a taken child name with the leaderboard sentence', async () => {
    repos.childRepository.create.mockRejectedValueOnce(new DuplicateChildNameError());
    await expect(owner().createChild('Bin', 2)).rejects.toMatchObject({
      code: 'conflict',
      messageKey: 'controlError.conflict',
      appMessageKey: 'leaderboard.childNameTaken',
    });
  });

  it('turns a thrown error with no code into the generic sentence', async () => {
    repos.familyRepository.setFamilyName.mockRejectedValueOnce(new TypeError('boom'));
    await expect(owner().setFamilyName('Nguyen')).rejects.toMatchObject({
      code: 'unknown',
      messageKey: 'controlError.generic',
      message: 'boom',
    });
  });
});

describe('how a write is counted', () => {
  it('reports success and hands back what the repository returned', async () => {
    repos.parentInviteRepository.createCode.mockResolvedValueOnce({ code: 'ABC123' });
    await expect(owner().createParentInvite()).resolves.toEqual({ code: 'ABC123' });
    expect(track.trackParentAction).toHaveBeenCalledWith(
      'parent_invite_create',
      'success',
    );
  });

  /*
   * An expired web session is not a control the server refused; folding the two
   * made the refusal rate unreadable.
   */
  it.each(['unauthenticated', 'staleCredential'])(
    'counts %s as an expired session, not a failure',
    async code => {
      repos.deviceRepository.toggleLock.mockRejectedValueOnce({ code });
      await owner()
        .setLock('d1', true)
        .catch(() => {});
      expect(track.trackDeviceLock).toHaveBeenCalledWith(true, 'expired');
    },
  );

  it('counts a refusal as failed and still rejects with it', async () => {
    repos.deviceRepository.toggleLock.mockRejectedValueOnce({ code: 'forbidden' });
    await expect(owner().setLock('d1', false)).rejects.toBeInstanceOf(ControlError);
    expect(track.trackDeviceLock).toHaveBeenCalledWith(false, 'failed');
  });

  it('reports which controls changed, sorted, and never their values', async () => {
    await owner().updateControls('d1', {
      scheduleEnabled: true,
      dailyLimitMinutes: 95,
    });
    expect(track.trackParentAction).toHaveBeenCalledTimes(1);
    expect(track.trackParentAction).toHaveBeenCalledWith(
      'dailyLimitMinutes,scheduleEnabled',
      'success',
    );
    expect(JSON.stringify(track.trackParentAction.mock.calls)).not.toContain('95');
  });

  it("names a reward task edit by the fields it touched, not the task's content", async () => {
    await owner().updateRewardTask('t1', { title: 'Tidy room', stars: 3 });
    expect(track.trackParentAction).toHaveBeenCalledWith(
      'reward_task_update:stars,title',
      'success',
    );
    expect(track.trackRewardClaim).not.toHaveBeenCalled();
  });

  it.each([
    [true, 'parent_join_approve'],
    [false, 'parent_join_reject'],
  ])('reports a join answer of %s as %s', async (approved, event) => {
    await owner().resolveParentJoin('req1', approved);
    expect(repos.parentInviteRepository.resolve).toHaveBeenCalledWith('req1', approved);
    expect(track.trackParentAction).toHaveBeenCalledWith(event, 'success');
  });

  it('unassigns a device by sending null, and counts it as an unassign', async () => {
    await owner().assignDevice('d1', null);
    expect(repos.childRepository.assignDevice).toHaveBeenCalledWith(FAMILY, 'd1', null);
    expect(track.trackParentAction).toHaveBeenCalledWith('device_unassign', 'success');
  });
});

describe('owner-only writes', () => {
  /*
   * The database does not enforce this split: a joined co-parent passes the
   * rules for every one of these, so the check in `createActions` is the rule.
   */
  it.each([
    [
      'renameDevice',
      a => a.renameDevice('d1', 'iPad'),
      repos.deviceRepository.updateChildDeviceName,
    ],
    [
      'removeDevice',
      a => a.removeDevice('d1'),
      repos.deviceRepository.deleteChildDevice,
    ],
    [
      'createParentInvite',
      a => a.createParentInvite(),
      repos.parentInviteRepository.createCode,
    ],
    [
      'resolveParentJoin',
      a => a.resolveParentJoin('r1', true),
      repos.parentInviteRepository.resolve,
    ],
    ['removeParent', a => a.removeParent('m1'), repos.familyRepository.removeMember],
    ['createChild', a => a.createChild('Bin', 0), repos.childRepository.create],
    ['removeChild', a => a.removeChild('c1', []), repos.childRepository.remove],
    [
      'assignDevice',
      a => a.assignDevice('d1', 'c1'),
      repos.childRepository.assignDevice,
    ],
    [
      'setFamilyName',
      a => a.setFamilyName('Nguyen'),
      repos.familyRepository.setFamilyName,
    ],
    [
      'setLeaderboardEnabled',
      a => a.setLeaderboardEnabled(true),
      repos.familyRepository.setLeaderboardEnabled,
    ],
  ])('refuses %s from a co-parent without writing', async (_name, call, write) => {
    const actions = coParent();
    expect(actions.isOwner).toBe(false);
    await expect(call(actions)).rejects.toMatchObject({
      code: 'forbidden',
      messageKey: 'controlError.forbidden',
    });
    expect(write).not.toHaveBeenCalled();
  });

  it("lets a co-parent rename a child, which is any parent's", async () => {
    await coParent().renameChild('c1', 'Na');
    expect(repos.childRepository.rename).toHaveBeenCalledWith(FAMILY, 'c1', 'Na');
  });

  it('hands removeChild the whole device list so the repository picks the orphans', async () => {
    const devices = [
      { id: 'd1', childId: 'c1' },
      { id: 'd2', childId: 'c2' },
    ];
    await owner().removeChild('c1', devices);
    expect(repos.childRepository.remove).toHaveBeenCalledWith(FAMILY, 'c1', devices);
  });
});

/*
 * Browsers that can make changes. Both endpoints scope to the caller's uid, so
 * a co-parent lists and removes their own: the owner gate does not apply.
 */
describe('the browsers list', () => {
  it("lists a co-parent's own browsers without a gate or a count", async () => {
    const sessions = [{ id: 'w1', grantedVia: 'qr' }];
    repos.webSessionRepository.list.mockResolvedValueOnce(sessions);
    await expect(coParent().listWebSessions()).resolves.toBe(sessions);
    expect(track.trackParentAction).not.toHaveBeenCalled();
  });

  it('removes one and counts it under parent_control, never a new event', async () => {
    await coParent().revokeWebSession('w1');
    expect(repos.webSessionRepository.revoke).toHaveBeenCalledWith('w1');
    expect(track.trackParentAction).toHaveBeenCalledWith(
      'web_session_revoke',
      'success',
    );
  });

  it.each([
    ['forbidden', 'failed'],
    ['unauthenticated', 'expired'],
  ])('counts a %s removal as %s and still rejects', async (code, result) => {
    repos.webSessionRepository.revoke.mockRejectedValueOnce({ code });
    await expect(owner().revokeWebSession('w1')).rejects.toBeInstanceOf(ControlError);
    expect(track.trackParentAction).toHaveBeenCalledWith('web_session_revoke', result);
  });

  // The page reads `code` to drop to view-only, `messageKey` to say a failed list.
  it('says a refused list as a ControlError the card can read', async () => {
    repos.webSessionRepository.list.mockRejectedValueOnce({ code: 'unauthenticated' });
    await expect(owner().listWebSessions()).rejects.toMatchObject({
      code: 'unauthenticated',
      messageKey: 'controlError.sessionExpired',
    });
  });
});

describe('what a write sends', () => {
  it('asks a check-in for a photo and a location unless told otherwise', async () => {
    const device = { id: 'd1', name: 'Pixel' };
    await coParent().sendCheckIn(device);
    await coParent().sendCheckIn(device, { requireLocation: false });
    expect(repos.safetyCheckInRepository.createRequest.mock.calls).toEqual([
      [
        FAMILY,
        {
          deviceId: 'd1',
          deviceName: 'Pixel',
          requirePhoto: true,
          requireLocation: true,
        },
      ],
      [
        FAMILY,
        {
          deviceId: 'd1',
          deviceName: 'Pixel',
          requirePhoto: true,
          requireLocation: false,
        },
      ],
    ]);
    expect(track.trackCheckInRequest).toHaveBeenCalledWith('success');
  });

  it('answers a time request with its id alone', async () => {
    await coParent().resolveTimeRequest('tr1', true);
    expect(repos.timeRequestRepository.resolveRequest).toHaveBeenCalledWith(
      FAMILY,
      { id: 'tr1' },
      true,
    );
    expect(track.trackTimeRequest).toHaveBeenCalledWith('approve', 'success');
  });

  it('answers a site request with its id alone', async () => {
    await coParent().resolveSiteRequest('sr1', false);
    expect(repos.siteRequestRepository.resolveRequest).toHaveBeenCalledWith(
      FAMILY,
      { id: 'sr1' },
      false,
    );
    expect(track.trackSiteRequest).toHaveBeenCalledWith('deny', 'success');
  });

  it("sends a child's budget with the devices to seed, not as a bare rule", async () => {
    await coParent().setChildBudget('c1', 120, ['d1', 'd2']);
    expect(repos.childRulesRepository.setDailyBudget).toHaveBeenCalledWith(
      FAMILY,
      'c1',
      120,
      ['d1', 'd2'],
    );
    expect(repos.childRulesRepository.updateRules).not.toHaveBeenCalled();
  });
});

describe('updateControls on a parked device', () => {
  const parked = {
    id: 'd1',
    monitoringState: 'parked',
    controls: {
      scheduleEnabled: false,
      appBlockingEnabled: false,
      webFilterEnabled: false,
    },
  };

  it('refuses a patch that only tightens without a round trip', async () => {
    const error = await owner({ devices: [parked] })
      .updateControls('d1', { scheduleEnabled: true })
      .catch(e => e);
    expect(error).toBeInstanceOf(ControlError);
    /*
     * Not `controlError.forbidden`: that sentence says "sign in again", which is
     * wrong about a plan. The app pack's parking sentence is what renders.
     */
    expect(error).toMatchObject({
      code: 'forbidden',
      messageKey: null,
      serverCode: 'parking/loosen-only',
      appMessageKey: 'family.rulesTightenRefused',
    });
    expect(repos.controlRepository.updateControls).not.toHaveBeenCalled();
    expect(track.trackParentAction).toHaveBeenCalledWith('scheduleEnabled', 'failed');
  });

  it('sends a loosening patch', async () => {
    const device = { ...parked, controls: { scheduleEnabled: true } };
    await owner({ devices: [device] }).updateControls('d1', { scheduleEnabled: false });
    expect(repos.controlRepository.updateControls).toHaveBeenCalledWith(FAMILY, 'd1', {
      scheduleEnabled: false,
    });
  });

  /*
   * The server takes the loosening half of a mixed patch and names the rest in
   * `refusedKeys`; refusing it here would lose the fields it may still change.
   */
  it('sends a patch that only partly tightens, whole, for the server to split', async () => {
    const device = { ...parked, controls: { scheduleEnabled: true } };
    const patch = { scheduleEnabled: false, appBlockingEnabled: true };
    await owner({ devices: [device] }).updateControls('d1', patch);
    expect(repos.controlRepository.updateControls).toHaveBeenCalledWith(
      FAMILY,
      'd1',
      patch,
    );
  });

  it('leaves child-rule fields of an assigned device to the server', async () => {
    const device = { ...parked, childId: 'c1' };
    await owner({ devices: [device] }).updateControls('d1', { webFilterEnabled: true });
    expect(repos.controlRepository.updateControls).toHaveBeenCalledTimes(1);
  });

  it('sends a tightening patch to a device that is not parked', async () => {
    const device = { ...parked, monitoringState: 'active' };
    await owner({ devices: [device] }).updateControls('d1', { scheduleEnabled: true });
    expect(repos.controlRepository.updateControls).toHaveBeenCalledTimes(1);
  });

  it('lets the server answer for a device missing from the list', async () => {
    await owner({ devices: [parked] }).updateControls('d9', { scheduleEnabled: true });
    expect(repos.controlRepository.updateControls).toHaveBeenCalledWith(FAMILY, 'd9', {
      scheduleEnabled: true,
    });
  });
});
