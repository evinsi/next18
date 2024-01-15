import { Link } from '@/navigation';
import LocaleSwitcher from './LocaleSwitcher';
import { useTranslations } from 'next-intl';
export default function Navigation() {

const t = useTranslations('Navigation')
    return (
        <div className="bg-navbar">
        <div className="container d-flex justify-content-between align-items-center py-4 text-white">
            <div className='d-flex flex-row gap-4'>
               <Link href="/"> {t('home')} </Link>
               <Link href="/about"> {t('about')} </Link>
               <Link href="/contact"> {t('contact')} </Link>
            </div>
            <div>
            <LocaleSwitcher/>
            </div>
        </div>
        </div>
    );
}

