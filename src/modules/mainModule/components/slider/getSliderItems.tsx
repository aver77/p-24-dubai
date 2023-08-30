import {SlideKeyEnum} from "shared/constants/slideKeys";
import OffersSlide from "./offersSlide";
import React from "react";
import {IntlShape} from "react-intl";
import CustomersSlide from "./customersSlide";
import NewsSlide from "./newsSlide";
import CompaniesSlide from "./companiesSlide";

import methadGray from "assets/icons/main/companies/methadGray.png";
import adamjeeGray from "assets/icons/main/companies/adamjeeGray.png";
import takafulGray from "assets/icons/main/companies/takafulGray.png";
import sukoonGray from "assets/icons/main/companies/sukoonGray.png";
import orientGray from "assets/icons/main/companies/orientGray.png";
import tokioMarineGray from "assets/icons/main/companies/tokioMarineGray.png";
import fidelityGray from "assets/icons/main/companies/fidelityGray.png";
import rakInsuranceGray from "assets/icons/main/companies/rakInsuranceGray.png";

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
        case SlideKeyEnum.COMPANIES: {
            return [
                <CompaniesSlide src={methadGray} alt={"methad"}/>,
                <CompaniesSlide src={adamjeeGray} alt={"adamjee"}/>,
                <CompaniesSlide src={takafulGray} alt={"takaful"}/>,
                <CompaniesSlide src={sukoonGray} alt={"sukoon"}/>,
                <CompaniesSlide src={orientGray} alt={"orient"}/>,
                <CompaniesSlide src={tokioMarineGray} alt={"tokioMarine"}/>,
                <CompaniesSlide src={fidelityGray} alt={"fidelity"}/>,
                <CompaniesSlide src={rakInsuranceGray} alt={"rakInsuranceGray"}/>,
            ];
        }

        default: {
            return [];
        }
    }
};
