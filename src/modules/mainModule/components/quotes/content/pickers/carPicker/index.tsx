import { FC, useState } from "react";
import styles from "./CarPicker.module.scss";
import { Progress } from "antd";
import {
    carKeys,
    checkIsDisabled,
    getContentByKey,
    getTitleIdByKey,
    PROGRESS_VALUE
} from "./defaultData";
import { FormattedMessage } from "react-intl";
import Button from "shared/ui/button";
import leftArrow from "assets/svg/leftBracket.svg";
import rightArrow from "assets/svg/arrowSm.svg";
import cx from "classnames";
import { IAggregatedData, ICarPicker } from "./interface";

const CarPicker: FC<ICarPicker> = ({ setOpened }) => {
    const [progressSize, setProgressSize] = useState(PROGRESS_VALUE);
    const [currentKey, setCurrentKey] = useState<carKeys>(carKeys.CAR_KEY);
    const [aggregatedData, setAggregatedData] = useState<IAggregatedData>({
        carName: undefined,
        carModel: undefined,
        manufacturerYear: undefined,

        city: undefined,
        value: undefined,
        insuranceClaims: undefined,
        uaeLicence: undefined,
        contactInfo: {
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            mobile: undefined,
            dateOfBirth: undefined,
            nationality: undefined
        }
    });

    const currentTitleId = getTitleIdByKey(currentKey);

    const isNextDisabled = checkIsDisabled(currentKey, aggregatedData);
    const nextKey = () => {
        if (currentKey === carKeys.FILL_INFO_KEY) {
            // setOpened(false);
            return;
        } else {
            setProgressSize((prev) => prev + PROGRESS_VALUE);
            setCurrentKey((prev) => prev + 1);
        }
    };

    const prevKey = () => {
        if (currentKey === carKeys.CAR_KEY) {
            setOpened(false);
        } else {
            setProgressSize((prev) => prev - PROGRESS_VALUE);
            setCurrentKey((prev) => prev - 1);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <Progress
                    className={styles.progress}
                    strokeColor={"#50C878"}
                    percent={progressSize}
                />
                <div className={styles.title}>
                    <FormattedMessage id={currentTitleId} />
                </div>
                {getContentByKey(currentKey, aggregatedData, setAggregatedData)}
                <div className={styles.btnsContainer}>
                    <Button
                        onClick={prevKey}
                        className={cx(styles.btn, styles.backBtn)}
                        withShieldAndArrow={false}
                    >
                        <div className={styles.btnContent}>
                            <img src={leftArrow} alt={"arrow"} />
                            <span>Back</span>
                        </div>
                    </Button>
                    <Button
                        disabled={isNextDisabled}
                        onClick={nextKey}
                        className={styles.btn}
                        withShieldAndArrow={false}
                    >
                        <div className={styles.btnContent}>
                            <span>Next</span>
                            <img src={rightArrow} alt={"arrow"} />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default CarPicker;
