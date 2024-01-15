import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
export default function LocaleChange() {

    const t = useTranslations('LocaleChange');
    const locale = useLocale();
    const otherLocale= locale === 'tr' ? 'en' : 'tr';
    return (
        <div>
          <Link href={'/' + otherLocale} prefetch={false} className="border-bottom pb-1" > 
          {t('desc')}
          </Link>
        </div>
    );
}

