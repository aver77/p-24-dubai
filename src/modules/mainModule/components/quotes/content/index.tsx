import { FC, useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Input from "shared/ui/input";
import Button from "shared/ui/button";
import styles from "./TabContent.module.scss";
import { CAR, HOME, LIFE, PETS } from "../contants";
import Pickers from "./pickers";
import { regulateScroll } from "shared/utils/regulateScroll";
import usePopupsStore from "shared/lib/store/popupsStore";

interface ITabContent {
    imageSrc: string;
    contentName: typeof CAR | typeof LIFE | typeof HOME | typeof PETS;
}

const Content: FC<ITabContent> = ({ imageSrc, contentName }) => {
    const intl = useIntl();
    const { burgerOpened, setPickerOpened: setStorePickerOpened } = usePopupsStore(
        (state) => state
    );

    const [pickerOpened, setPickerOpened] = useState(false);
    regulateScroll(pickerOpened || burgerOpened);

    const onOpenPicker = () => setPickerOpened(true);

    useEffect(() => {
        setStorePickerOpened(pickerOpened);
    }, [pickerOpened]);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <p className={styles.titleText}>
                    <FormattedMessage id={"compareQuotesMain"} />
                </p>
                {contentName === CAR ? (
                    <Input placeholder={intl.formatMessage({ id: "phoneNumber" })} />
                ) : (
                    <Input placeholder={intl.formatMessage({ id: "zipCode" })} />
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
