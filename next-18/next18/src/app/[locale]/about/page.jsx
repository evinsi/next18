import { useTranslations } from "next-intl";



export default function About() {
    const t = useTranslations('About');
    return (
        <div className="container text-white">
            <p className="my-3">
            {t('desc')}
            </p>
        </div>
    );
}

