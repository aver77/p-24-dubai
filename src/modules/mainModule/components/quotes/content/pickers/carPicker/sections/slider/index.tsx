import { ChangeEvent, useEffect, useState } from "react";
import { Slider } from "antd";

import styles from "./Slider.module.scss";
import Input from "shared/ui/input";
import { formatNumberWithComas } from "shared/utils/formatNumberWithComas";

const SliderComponent = ({
    property,
    data,
    setData
}: {
    property: string;
    data: any;
    setData: any;
}) => {
    const [sliderValue, setSliderValue] = useState(175_000);

    const handleSliderChange = (newValue: number) => {
        setSliderValue(newValue);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSliderValue(+e.target.value.replaceAll(",", ""));
    };

    useEffect(() => {
        setData({
            ...data,
            [property]: sliderValue
        });
    }, [sliderValue]);

    return (
        <div className={styles.container}>
            <Input
                prefix={"AED"}
                value={formatNumberWithComas(sliderValue)}
                onChange={handleInputChange}
            />
            <Slider
                tooltip={{ formatter: null }}
                className={styles.slider}
                min={0}
                max={1_000_000}
                onChange={handleSliderChange}
                value={sliderValue}
            />
        </div>
    );
};
export default SliderComponent;
