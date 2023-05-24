import styles from "./Header.module.scss";
import logo from "assets/svg/logo.svg";
import logoSm from "assets/svg/logoSm.svg";
import burgerLines from "assets/svg/burgerLines.svg";
import { DeviceWidths } from "shared/constants/deviceWidths";
import useLocaleStore from "shared/lib/store/localeStore";
import cx from "classnames";
import { localesEnum } from "shared/constants/intl/locales";
import { useWindowSize } from "usehooks-ts";
import { useEffect, useRef, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import usePopupsStore from "shared/lib/store/popupsStore";

const Header = () => {
    const { currentLocale, setLocale } = useLocaleStore((state) => state);
    const { setBurgerOpened: setStoreBurgerOpened } = usePopupsStore((state) => state);

    const headerRef = useRef<HTMLDivElement>(null);
    const { width } = useWindowSize();
    const isMobile = width <= DeviceWidths.IPHONE;

    const [burgerOpened, setBurgerOpened] = useState(false);

    const handleSetLocale = (locale: localesEnum) => () => {
        setLocale(locale);
    };

    const handleOpenBurger = () => {
        setBurgerOpened(true);
    };

    useEffect(() => {
        setStoreBurgerOpened(burgerOpened);
    }, [burgerOpened]);

    const langSwitcher = (
        <div style={{ textAlign: burgerOpened ? "center" : "initial" }}>
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
    );

    return (
        <div ref={headerRef} className={styles.header}>
            <img src={isMobile ? logoSm : logo} alt={"logo"} />
            {isMobile ? (
                <>
                    <img
                        className={styles.burgerIcon}
                        src={burgerLines}
                        alt={"burger"}
                        onClick={handleOpenBurger}
                    />
                    <BurgerMenu
                        opened={burgerOpened}
                        setOpened={setBurgerOpened}
                        langSwitcher={langSwitcher}
                    />
                </>
            ) : (
                langSwitcher
            )}
        </div>
    );
};
export default Header;
