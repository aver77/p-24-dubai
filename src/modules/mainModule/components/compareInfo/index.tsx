import styles from "./CompareInfo.module.scss";
import { FormattedMessage, useIntl } from "react-intl";
import Button from "shared/ui/button";
import { FC } from "react";
import InfoItem from "./InfoItem";
const CompareInfo: FC = () => {
    const intl = useIntl();

    return (
        <div className={styles.container}>
            <div className={styles.compareSection}>
                <span className={styles.compareText}>
                    <FormattedMessage id={"whyCompareWith"} />
                </span>
                <Button className={styles.btn} withShieldAndArrow>
                    Compare & save
                </Button>
            </div>
            <div className={styles.infoSection}>
                <div className={styles.infoSectionItem}>
                    <InfoItem
                        title={intl.formatMessage({ id: "signSavings" })}
                        description={intl.formatMessage({ id: "signSavingsDesc" })}
                    />
                    <InfoItem
                        title={intl.formatMessage({ id: "accessDiscounts" })}
                        description={intl.formatMessage({ id: "accessDiscountsDesc" })}
                    />
                </div>
                <div className={styles.infoSectionItem}>
                    <InfoItem
                        title={intl.formatMessage({ id: "noHiddenCost" })}
                        description={intl.formatMessage({ id: "noHiddenCostDesc" })}
                    />
                    <InfoItem
                        title={intl.formatMessage({ id: "getItBy" })}
                        description={intl.formatMessage({ id: "getItByDesc" })}
                    />
                </div>
            </div>
        </div>
    );
};

export default CompareInfo;
