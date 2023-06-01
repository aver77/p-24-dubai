import step1 from "assets/icons/main/steps/step1.png";
import step2 from "assets/icons/main/steps/step2.png";
import step3 from "assets/icons/main/steps/step3.png";
import checkMark from "assets/icons/main/steps/checkMark.png";

import styles from "./SuccessModal.module.scss";
import Card from "./card";
import Button from "shared/ui/button";
import { useState } from "react";
import Pickers from "../pickers";
import { TContent } from "../../contants";
import { FormattedMessage, useIntl } from "react-intl";
const SuccessModal = ({ contentName }: { contentName: TContent }) => {
    const intl = useIntl();
    const [pickerOpened, setPickerOpened] = useState(false);

    const onOpenPicker = () => setPickerOpened(true);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.title}>
                    <FormattedMessage id={"thanks"} />
                </p>
                <p className={styles.subTitle}>
                    <FormattedMessage id={"shippersInTouch"} />
                </p>
                <p className={styles.stepsInfo}>
                    <FormattedMessage id={"youAreDone"} />
                </p>
                <div className={styles.cards}>
                    <Card
                        view={
                            <>
                                <img src={step1} alt={"step1"} />
                                <img
                                    className={styles.checkMark}
                                    src={checkMark}
                                    alt={"checkMark"}
                                />
                            </>
                        }
                        title={intl.formatMessage({ id: "formSubmitted" })}
                    />
                    <Card
                        view={<img src={step2} alt={"step2"} />}
                        title={intl.formatMessage({ id: "weWillSendOffers" })}
                    />
                    <Card
                        view={<img src={step3} alt={"step3"} />}
                        title={intl.formatMessage({ id: "weSendInsurance" })}
                    />
                </div>
                <Button className={styles.btn} onClick={onOpenPicker} withShieldAndArrow={false}>
                    <FormattedMessage id={"manuallyEnter"} />
                </Button>
            </div>
            {pickerOpened && <Pickers contentName={contentName} setOpened={setPickerOpened} />}
        </div>
    );
};
export default SuccessModal;
