import { FC, useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Input from "shared/ui/input";
import Button from "shared/ui/button";
import styles from "./TabContent.module.scss";
import { CAR, TContent } from "../contants";
import { regulateScroll } from "shared/utils/regulateScroll";
import usePopupsStore from "shared/lib/store/popupsStore";
import SuccessModal from "./successModal";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface ITabContent {
    imageSrc: string;
    contentName: TContent;
}

const Content: FC<ITabContent> = ({ imageSrc, contentName }) => {
    const intl = useIntl();
    const { burgerOpened, setSuccessModalOpened, pickerOpened } = usePopupsStore((state) => state);

    const [modalOpened, setModalOpened] = useState(false);
    regulateScroll(modalOpened || burgerOpened || pickerOpened);

    const onOpenModal = () => setModalOpened(true);

    useEffect(() => {
        setSuccessModalOpened(modalOpened);
    }, [modalOpened]);

    const [phoneInputValue, setPhoneInputValue] = useState("");
    const handleChangePhoneInput = (v: string) => {
        setPhoneInputValue(v);
    };

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <p className={styles.titleText}>
                    <FormattedMessage id={"compareQuotesMain"} />
                </p>
                {contentName === CAR ? (
                    <PhoneInput
                        country={"ae"}
                        value={phoneInputValue}
                        onChange={handleChangePhoneInput}
                        inputClass={styles.phoneInput}
                        onlyCountries={["ae"]}
                        placeholder={intl.formatMessage({ id: "phoneNumber" })}
                    />
                ) : (
                    <Input placeholder={intl.formatMessage({ id: "zipCode" })} />
                )}
                <div className={styles.quotesActionsContainer}>
                    <Button
                        disabled={phoneInputValue.length < 15}
                        withShieldAndArrow
                        className={styles.btn}
                        onClick={onOpenModal}
                    >
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
            {modalOpened && <SuccessModal contentName={contentName} />}
        </div>
    );
};
export default Content;
