import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { SlideKeyEnum } from "shared/constants/slideKeys";

import styles from "./Slider.module.scss";
import { getSliderItems } from "./getSliderItems";
import { useIntl } from "react-intl";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useWindowSize } from "usehooks-ts";
import { DeviceWidths } from "shared/constants/deviceWidths";
import cx from "classnames";

interface ISlider {
    initialPercentage: number;
    slideKey: SlideKeyEnum;
    extraDesc?: ReactNode;
}
const Slider: FC<ISlider> = ({ initialPercentage, slideKey, extraDesc }) => {
    const intl = useIntl();

    const section = useRef<HTMLDivElement>(null);
    const [percent, setPercent] = useState(0);
    const [padding, setPadding] = useState(0);

    const { width } = useWindowSize();

    const syncSize = () => {
        const { current } = section;
        if (current) {
            setPadding(current.offsetWidth * percent);
        }
    };

    useEffect(() => {
        if (width < DeviceWidths.IPHONE) {
            setPercent(0);
            return;
        }
        if (width < DeviceWidths.IPAD) {
            setPercent(0.3);
            return;
        }

        setPercent(initialPercentage);
    }, [width]);

    useEffect(syncSize, [percent]);

    return (
        <div ref={section} className={cx(styles.sliderWrap, extraDesc && styles.sliderPaddedBtns)}>
            <AliceCarousel
                infinite
                mouseTracking
                disableDotsControls
                items={getSliderItems(intl, slideKey)}
                paddingRight={padding}
                onResized={syncSize}
            />
            {extraDesc && <div className={styles.extraDesc}>{extraDesc}</div>}
        </div>
    );
};

export default Slider;
