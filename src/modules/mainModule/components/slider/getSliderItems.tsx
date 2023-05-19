import { SlideKeyEnum } from "shared/constants/slideKeys";
import OffersSlide from "./offersSlide";
import React from "react";
import { IntlShape } from "react-intl";
import CustomersSlide from "./customersSlide";
import NewsSlide from "./newsSlide";

export const getSliderItems = (intl: IntlShape, key: SlideKeyEnum) => {
    switch (key) {
        case SlideKeyEnum.OFFERS: {
            return [
                <OffersSlide
                    key={"1"}
                    title={intl.formatMessage({ id: "trustExpertise" })}
                    text={intl.formatMessage({ id: "trustExpertiseDesc" })}
                />,
                <OffersSlide
                    key={"2"}
                    title={intl.formatMessage({ id: "customerApproach" })}
                    text={intl.formatMessage({ id: "customerApproachDesc" })}
                />,
                <OffersSlide
                    key={"3"}
                    title={intl.formatMessage({ id: "empoweringKnowledge" })}
                    text={intl.formatMessage({ id: "empoweringKnowledgeDesc" })}
                />
            ];
        }
        case SlideKeyEnum.CUSTOMERS: {
            return [
                <CustomersSlide
                    key={"1"}
                    title={intl.formatMessage({ id: "firstCustomerName" })}
                    text={intl.formatMessage({ id: "customerMockText" })}
                />,
                <CustomersSlide
                    key={"2"}
                    title={intl.formatMessage({ id: "secondCustomerName" })}
                    text={intl.formatMessage({ id: "customerMockText" })}
                />,
                <CustomersSlide
                    key={"3"}
                    title={intl.formatMessage({ id: "thirdCustomerName" })}
                    text={intl.formatMessage({ id: "customerMockText" })}
                />,
                <CustomersSlide
                    key={"4"}
                    title={intl.formatMessage({ id: "fourthCustomerName" })}
                    text={intl.formatMessage({ id: "customerMockText" })}
                />
            ];
        }
        case SlideKeyEnum.NEWS: {
            return new Array(4)
                .fill(undefined)
                .map((el, index) => (
                    <NewsSlide
                        key={index}
                        title={intl.formatMessage({ id: "newsMockTitle" })}
                        secondTitle={intl.formatMessage({ id: "newsMockTitle" })}
                        text={intl.formatMessage({ id: "newsMockText" })}
                        secondText={intl.formatMessage({ id: "newsMockText" })}
                    />
                ));
        }
        default: {
            return [];
        }
    }
};
