import { FC } from "react";

import styles from "./Cards.module.scss";
import Card from "./card";
import { useIntl } from "react-intl";
import quotesCompanies from "assets/icons/main/companies/columnOfCompanies.png";
import greenCarDiscounts from "assets/icons/main/greenCarDiscounts.png";
import callOrBuy from "assets/icons/main/callOrBuyUmbrella.png";

const Cards: FC = () => {
    const intl = useIntl();

    return (
        <div className={styles.container}>
            <Card
                title={intl.formatMessage({ id: "compareQuotes" })}
                description={intl.formatMessage({ id: "compareQuotesDesc" })}
                content={
                    <img className={styles.img} src={quotesCompanies} alt={"quotes companies"} />
                }
            />
            <Card
                title={intl.formatMessage({ id: "onePlaceDiscounts" })}
                description={intl.formatMessage({ id: "onePlaceDiscountsDesc" })}
                content={<img className={styles.img} src={greenCarDiscounts} alt={"discounts"} />}
            />
            <Card
                title={intl.formatMessage({ id: "buyOnline" })}
                description={intl.formatMessage({ id: "buyOnlineDesc" })}
                content={<img className={styles.img} src={callOrBuy} alt={"call or buy"} />}
            />
        </div>
    );
};
export default Cards;
