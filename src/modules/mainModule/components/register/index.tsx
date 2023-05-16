import { FC } from "react";

import styles from "./Register.module.scss";
import { FormattedMessage, useIntl } from "react-intl";
import { Input } from "antd";
import Button from "shared/ui/button";
const Register: FC = () => {
    const intl = useIntl();

    return (
        <div className={styles.container}>
            <p className={styles.text}>
                <FormattedMessage id={"lookingToSafe"} />
            </p>
            <div className={styles.inputSection}>
                <Input
                    className={styles.input}
                    placeholder={intl.formatMessage({ id: "zipCode" })}
                />
                <Button className={styles.btn} withShieldAndArrow={false}>
                    <FormattedMessage id={"viewMyQuotes"} />
                </Button>
            </div>
        </div>
    );
};
export default Register;
