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
                    title={"Yazid Nassif"}
                    text={
                        "I have been using them for a year now. Everything is detailed and well organized and, of course, damn beautiful."
                    }
                />,
                <CustomersSlide
                    key={"2"}
                    title={"Mustapha Shams"}
                    text={
                        "I have been using them for a year now. Everything is detailed and well organized and, of course, damn beautiful."
                    }
                />,
                <CustomersSlide
                    key={"3"}
                    title={"Abal Ibrahim"}
                    text={
                        "I have been using them for a year now. Everything is detailed and well organized and, of course, damn beautiful."
                    }
                />,
                <CustomersSlide
                    key={"4"}
                    title={"Qantara Eid"}
                    text={
                        "I have been using them for a year now. Everything is detailed and well organized and, of course, damn beautiful."
                    }
                />
            ];
        }
        case SlideKeyEnum.NEWS: {
            return [
                <NewsSlide
                    key={"1"}
                    title={"Chubb names Benoit Chasseguet Country President for France"}
                    secondTitle={"Chubb names Benoit Chasseguet Country President for France"}
                    text={
                        "This pledge reinforces our shared promise to prioritize your needs, providing exceptional customer service and tailored plans to safeguard your assets and loved ones."
                    }
                    secondText={
                        "This pledge reinforces our shared promise to prioritize your needs, providing exceptional customer service and tailored plans to safeguard your assets and loved ones."
                    }
                />,
                <NewsSlide
                    key={"2"}
                    title={"Chubb names Benoit Chasseguet Country President for France"}
                    secondTitle={"Chubb names Benoit Chasseguet Country President for France"}
                    text={
                        "This pledge reinforces our shared promise to prioritize your needs, providing exceptional customer service and tailored plans to safeguard your assets and loved ones."
                    }
                    secondText={
                        "This pledge reinforces our shared promise to prioritize your needs, providing exceptional customer service and tailored plans to safeguard your assets and loved ones."
                    }
                />,
                <NewsSlide
                    key={"3"}
                    title={"Chubb names Benoit Chasseguet Country President for France"}
                    secondTitle={"Chubb names Benoit Chasseguet Country President for France"}
                    text={
                        "This pledge reinforces our shared promise to prioritize your needs, providing exceptional customer service and tailored plans to safeguard your assets and loved ones."
                    }
                    secondText={
                        "This pledge reinforces our shared promise to prioritize your needs, providing exceptional customer service and tailored plans to safeguard your assets and loved ones."
                    }
                />
            ];
        }
        default: {
            return [];
        }
    }
};
