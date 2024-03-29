import React, { FC, useEffect } from "react";
import { IntlProvider } from "react-intl";
import languages from "shared/constants/intl/languages";
import useLocaleStore from "shared/lib/store/localeStore";
import { localesEnum } from "shared/constants/intl/locales";

interface IWithIntl {
    children: any;
}
const WithIntl: FC<IWithIntl> = ({ children }) => {
    const { currentLocale } = useLocaleStore((state) => state);

    useEffect(() => {
        document.documentElement.setAttribute(
            "lang",
            currentLocale === localesEnum.ENGLISH ? "en" : "ar"
        );
    }, [currentLocale]);

    return (
        <IntlProvider
            messages={languages[currentLocale as localesEnum]}
            locale={currentLocale}
            defaultLocale={localesEnum.ENGLISH}
        >
            {children}
        </IntlProvider>
    );
};
export default WithIntl;
