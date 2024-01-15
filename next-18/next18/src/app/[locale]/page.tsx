import { useLocale, useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import LocaleChange from '@/components/localeChange';


export default function Home({params:{locale}}) {
  const t = useTranslations('Index');
  unstable_setRequestLocale(locale);
  const local = useLocale();


  return (<>
  <div className="bg-home height-100 text-white">
    <div className="container">
    <h1 className='text-center text-capitalize py-5'>{t('title')}</h1>
   <LocaleChange/>
    </div>
   </div>
  </>
  )
}
