import { FC } from "react";

import logo from "assets/svg/logo.svg";
import licenceEagle from "assets/icons/main/licenseEagle.png";
import styles from "./Footer.module.scss";
import { FormattedMessage } from "react-intl";

const Footer: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.upperSection}>
                <div className={styles.links}>
                    <div>
                        <ul>
                            <p className={styles.linksTitle}>
                                <FormattedMessage id={"company"} />
                            </p>
                            <li className={styles.linkItem}>
                                <FormattedMessage id={"legal"} />
                            </li>
                            <li className={styles.linkItem}>
                                <FormattedMessage id={"terms"} />
                            </li>
                            <li className={styles.linkItem}>
                                <FormattedMessage id={"privacy"} />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <p className={styles.linksTitle}>
                                <FormattedMessage id={"social"} />
                            </p>
                            <li className={styles.linkItem}>
                                <FormattedMessage id={"facebook"} />
                            </li>
                            <li className={styles.linkItem}>
                                <FormattedMessage id={"inst"} />
                            </li>
                            <li className={styles.linkItem}>
                                <FormattedMessage id={"whatsapp"} />
                            </li>
                            <li className={styles.linkItem}>
                                <FormattedMessage id={"twitter"} />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.contacts}>
                    <img className={styles.img} src={logo} alt={"logo"} />
                    <p className={styles.number}>
                        <FormattedMessage id={"mobile"} />
                    </p>
                    <p className={styles.schedule}>
                        <FormattedMessage id={"schedule"} />
                    </p>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <p className={styles.credentialsText}>
                    <FormattedMessage id={"credentials"} />
                </p>
                <div className={styles.licenses}>
                    <img src={licenceEagle} alt={"licence"} />
                    <p className={styles.licenceText}>
                        <FormattedMessage id={"licence"} />
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Footer;
