import { useTranslations, useLocale } from "next-intl";
import LocaleSwitcherSelect from "./localSwitcherSelect";
import { locales } from "@/config"; 


export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();

    
    return (<>
        <LocaleSwitcherSelect defaultValue={locale} >
        {locales.map((cur) => (
        <option key={cur} value={cur} >
          {t('locale', {locale: cur})}
        </option>
      ))}
        </LocaleSwitcherSelect>
        </>
    
    );
}

