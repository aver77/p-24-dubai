import { FC, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Input } from "antd";
import Button from "shared/ui/button";
import styles from "./TabContent.module.scss";
import { CAR, HOME, LIFE, PETS } from "../contants";
import Pickers from "./pickers";

interface ITabContent {
    imageSrc: string;
    contentName: typeof CAR | typeof LIFE | typeof HOME | typeof PETS;
}

const Content: FC<ITabContent> = ({ imageSrc, contentName }) => {
    const intl = useIntl();
    const [pickerOpened, setPickerOpened] = useState(false);

    const onOpenPicker = () => setPickerOpened(true);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <p className={styles.titleText}>
                    <FormattedMessage id={"compareQuotesMain"} />
                </p>
                {contentName === CAR ? (
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
                    <Button withShieldAndArrow className={styles.btn} onClick={onOpenPicker}>
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
            {pickerOpened && <Pickers contentName={contentName} setOpened={setPickerOpened} />}
        </div>
    );
};
export default Content;
