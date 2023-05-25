import step1 from "assets/icons/main/steps/step1.png";
import step2 from "assets/icons/main/steps/step2.png";
import step3 from "assets/icons/main/steps/step3.png";
import checkMark from "assets/icons/main/steps/checkMark.png";

import styles from "./SuccessModal.module.scss";
import Card from "./card";
import Button from "shared/ui/button";
import usePopupsStore from "shared/lib/store/popupsStore";
import { useEffect, useState } from "react";
import { regulateScroll } from "shared/utils/regulateScroll";
import Pickers from "../pickers";
import { TContent } from "../../contants";
const SuccessModal = ({ contentName }: { contentName: TContent }) => {
    const {
        burgerOpened,
        successModalOpened,
        setPickerOpened: setStorePickerOpened
    } = usePopupsStore((state) => state);

    const [pickerOpened, setPickerOpened] = useState(false);
    regulateScroll(pickerOpened || burgerOpened || successModalOpened);

    const onOpenPicker = () => setPickerOpened(true);

    useEffect(() => {
        setStorePickerOpened(pickerOpened);
    }, [pickerOpened]);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.title}>THANK YOU</p>
                <p className={styles.subTitle}>
                    One of our Personal Shoppers is working on your custom quote and will be in
                    touch shortly
                </p>
                <p className={styles.stepsInfo}>You are done with 1 of 3 Steps</p>
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
                        title={"Form Submitted Successfully"}
                    />
                    <Card
                        view={<img src={step2} alt={"step2"} />}
                        title={"We Will Send the Best Offers to WhatsApp"}
                    />
                    <Card
                        view={<img src={step3} alt={"step3"} />}
                        title={"We Send you Car Insurance Documents"}
                    />
                </div>
                <Button onClick={onOpenPicker} withShieldAndArrow={false}>
                    Manually enter
                </Button>
            </div>
            {pickerOpened && <Pickers contentName={contentName} setOpened={setPickerOpened} />}
        </div>
    );
};
export default SuccessModal;
