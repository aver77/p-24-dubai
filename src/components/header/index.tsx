import styles from "./Header.module.scss";
import logo from "assets/svg/logo.svg";
import useLocaleStore from "shared/lib/store/localeStore";
import cx from "classnames";
import { localesEnum } from "shared/constants/intl/locales";
const Header = () => {
    const { currentLocale, setLocale } = useLocaleStore((state) => state);

    const handleSetLocale = (locale: localesEnum) => () => {
        setLocale(locale);
    };

    return (
        <div className={styles.header}>
            <img src={logo} alt={"logo"} />
            <div>
                <span
                    className={cx(
                        currentLocale === localesEnum.ENGLISH && styles.highlightedLocale,
                        styles.locale
                    )}
                    onClick={handleSetLocale(localesEnum.ENGLISH)}
                >
                    EN
                </span>
                <span> / </span>
                <span
                    className={cx(
                        currentLocale === localesEnum.ARABIC && styles.highlightedLocale,
                        styles.locale
                    )}
                    onClick={handleSetLocale(localesEnum.ARABIC)}
                >
                    عربي
                </span>
            </div>
        </div>
    );
};
export default Header;
