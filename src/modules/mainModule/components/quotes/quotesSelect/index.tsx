import { Select } from "antd";
import { FormattedMessage } from "react-intl";
import styles from "./QuotesSelect.module.scss";
import { CAR, HOME, LIFE, PETS } from "../contants";
import { useState } from "react";
import bestQuotesCar from "assets/icons/main/bestQuotesCar.png";
import bestQuotesHome from "assets/icons/main/bestQuotesHome.png";
import bestQuotesLife from "assets/icons/main/bestQuotesLife.png";
import bestQuotesPets from "assets/icons/main/bestQuotesPets.png";
import Content from "../content";

const { Option } = Select;

const QuotesSelect = () => {
    const [value, setValue] = useState(CAR);

    const onChange = (v: string) => setValue(v);

    const getSelectionContent = () => {
        switch (value) {
            case CAR: {
                return <Content imageSrc={bestQuotesCar} contentName={CAR} />;
            }
            case HOME: {
                return <Content imageSrc={bestQuotesHome} contentName={HOME} />;
            }
            case LIFE: {
                return <Content imageSrc={bestQuotesLife} contentName={LIFE} />;
            }
            case PETS: {
                return <Content imageSrc={bestQuotesPets} contentName={PETS} />;
            }
        }
    };

    return (
        <>
            <Select value={value} onChange={onChange} defaultValue={CAR} className={styles.select}>
                <Option value={CAR}>
                    <FormattedMessage id={CAR} />
                </Option>
                <Option value={HOME}>
                    <FormattedMessage id={HOME} />
                </Option>
                <Option value={LIFE}>
                    <FormattedMessage id={LIFE} />
                </Option>
                <Option value={PETS}>
                    <FormattedMessage id={PETS} />
                </Option>
            </Select>
            {getSelectionContent()}
        </>
    );
};
export default QuotesSelect;
