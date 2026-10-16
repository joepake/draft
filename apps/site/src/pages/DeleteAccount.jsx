import { RichText } from '@kidgate/web-ui/RichText';
import { useT } from '@kidgate/web-ui/useT';

const OPTION_1 = [1, 2, 3];
const OPTION_2 = [1, 2, 3];
const DELETED = [1, 2, 3, 4, 5, 6];
const RETENTION = [1, 2, 3];

export default function DeleteAccount() {
  const { t } = useT();

  return (
    <article className="legal">
      <h1>{t('deleteAccount.title')}</h1>
      <p className="updated">{t('deleteAccount.updated')}</p>

      <p>{t('deleteAccount.intro')}</p>

      <h2>{t('deleteAccount.option1Title')}</h2>
      <ul>
        {OPTION_1.map(n => (
          <RichText as="li" key={n} text={t(`deleteAccount.option1Step${n}`)} />
        ))}
      </ul>

      <h2>{t('deleteAccount.option2Title')}</h2>
      <ul>
        {OPTION_2.map(n => (
          <RichText as="li" key={n} text={t(`deleteAccount.option2Step${n}`)} />
        ))}
      </ul>

      <h2>{t('deleteAccount.deletedTitle')}</h2>
      <p>{t('deleteAccount.deletedIntro')}</p>
      <ul>
        {DELETED.map(n => (
          <li key={n}>{t(`deleteAccount.deleted${n}`)}</li>
        ))}
      </ul>

      <h2>{t('deleteAccount.retentionTitle')}</h2>
      <ul>
        {RETENTION.map(n => (
          <RichText as="li" key={n} text={t(`deleteAccount.retention${n}`)} />
        ))}
      </ul>

      <h2>{t('deleteAccount.partialTitle')}</h2>
      <RichText as="p" text={t('deleteAccount.partial')} />

      <RichText as="p" text={t('deleteAccount.moreInfo')} />
    </article>
  );
}
