import { useTranslations } from "next-intl";

export default function Contact() {

    const t = useTranslations('Contact')
    return (
        <div className="container text-white">
            <p className="my-3">
            {t('desc')}
            </p>
        </div>
    );
}


