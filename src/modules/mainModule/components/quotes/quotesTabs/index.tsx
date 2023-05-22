import { Tabs } from "antd";
import Car from "assets/svg/components/Car";
import Home from "assets/svg/components/Home";
import Life from "assets/svg/components/Life";
import Pets from "assets/svg/components/Pets";
import styles from "./QuotesTabs.module.scss";
import { FormattedMessage } from "react-intl";
import Content from "../content";
import bestQuotesCar from "assets/icons/main/bestQuotesCar.png";
import bestQuotesHome from "assets/icons/main/bestQuotesHome.png";
import bestQuotesLife from "assets/icons/main/bestQuotesLife.png";
import bestQuotesPets from "assets/icons/main/bestQuotesPets.png";
import { cloneElement, useState } from "react";
import { CAR, HOME, LIFE, PETS } from "../contants";

const QuotesTabs = () => {
    const [activeKey, setActiveKey] = useState("1");

    const handleChangeKey = (k: string) => {
        setActiveKey(k);
    };
    const getTabLabel = (svg: JSX.Element, msgId: string, key: string) => (
        <div className={styles.tabLabel}>
            {cloneElement(svg, { color: key === activeKey ? "#000" : undefined })}
            <span className={styles.tabLabelText}>
                <FormattedMessage id={msgId} />
            </span>
        </div>
    );

    return (
        <Tabs
            activeKey={activeKey}
            onChange={handleChangeKey}
            className={styles.tabs}
            defaultActiveKey="1"
            items={[
                {
                    label: getTabLabel(<Car />, CAR, "1"),
                    key: "1",
                    children: <Content imageSrc={bestQuotesCar} contentName={CAR} />
                },
                {
                    label: getTabLabel(<Home />, HOME, "2"),
                    key: "2",
                    children: <Content imageSrc={bestQuotesHome} contentName={HOME} />
                },
                {
                    label: getTabLabel(<Life />, LIFE, "3"),
                    key: "3",
                    children: <Content imageSrc={bestQuotesLife} contentName={LIFE} />
                },
                {
                    label: getTabLabel(<Pets />, PETS, "4"),
                    key: "4",
                    children: <Content imageSrc={bestQuotesPets} contentName={PETS} />
                }
            ]}
        />
    );
};
export default QuotesTabs;
