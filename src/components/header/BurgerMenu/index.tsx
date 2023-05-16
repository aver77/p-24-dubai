import { FC } from "react";
import styles from "./BurgerMenu.module.scss";
import logoSm from "assets/svg/logoSm.svg";
import close from "assets/svg/close.svg";

interface IBurgerMenu {
    opened: boolean;
    setOpened: (v: boolean) => void;

    langSwitcher: JSX.Element;
}
const BurgerMenu: FC<IBurgerMenu> = ({ opened, setOpened, langSwitcher }) => {
    const onClose = () => {
        setOpened(false);
    };

    if (!opened) {
        return null;
    }

    return (
        <div className={styles.menu}>
            <div className={styles.titleWrap}>
                <img src={logoSm} alt={"logo"} />
                <img className={styles.closeIcon} src={close} alt={"close"} onClick={onClose} />
            </div>
            <div className={styles.content}>{langSwitcher}</div>
        </div>
    );
};
export default BurgerMenu;
