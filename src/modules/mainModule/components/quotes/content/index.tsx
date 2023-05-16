import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { Input } from "antd";
import Button from "shared/ui/button";
import styles from "./TabContent.module.scss";
import { useIntl } from "react-intl";

interface ITabContent {
    imageSrc: string;
    quoteAction: () => void;
    isCarContent?: boolean;
}

const Content: FC<ITabContent> = ({ imageSrc, isCarContent = false, quoteAction }) => {
    const intl = useIntl();

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <p className={styles.titleText}>
                    <FormattedMessage id={"compareQuotesMain"} />
                </p>
                {isCarContent ? (
                    <Input
                        placeholder={intl.formatMessage({ id: "phoneNumber" })}
                        className={styles.input}
                    />
                ) : (
                    <Input
                        placeholder={intl.formatMessage({ id: "zipCode" })}
                        className={styles.input}
                    />
                )}
                <div className={styles.quotesActionsContainer}>
                    <Button withShieldAndArrow className={styles.btn} onClick={quoteAction}>
                        <FormattedMessage id={"getQuotes"} />
                    </Button>
                    <div className={styles.quotesActionsInfoText}>
                        <span>
                            <FormattedMessage id={"beenHereBefore"} />
                        </span>
                        <span className={styles.quotesExtraText}>
                            <FormattedMessage id={"getYourQuotesBack"} />
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.image} alt={"image"} src={imageSrc} />
            </div>
        </div>
    );
};
export default Content;
