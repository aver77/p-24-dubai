import Quotes from "./components/quotes";
import Header from "components/header";
import Footer from "components/footer";
import Title from "shared/ui/title";

import styles from "./MainModule.module.scss";
import { FormattedMessage } from "react-intl";
import Cards from "./components/cards";

import Slider from "./components/slider";

import CompareInfo from "./components/compareInfo";
import Companies from "./components/companies";
import Register from "./components/register";
import { SlideKeyEnum } from "shared/constants/slideKeys";
import blueTopArrow from "assets/svg/blueTopArrow.svg";

const MainModule = () => {
    return (
        <>
            <Header />
            <Quotes />
            <Title fontWeight={600} className={styles.titleWrap}>
                <div className={styles.titleText}>
                    <FormattedMessage id={"titleCustomizedFree"} />
                </div>
            </Title>
            <Cards />
            <Title fontWeight={700} className={styles.titleWrap}>
                <div className={styles.titleText}>
                    <FormattedMessage id={"limitedOffers"} />
                </div>
            </Title>
            <Slider initialPercentage={0.6} slideKey={SlideKeyEnum.OFFERS} />
            <Title fontWeight={700} className={styles.titleWrap}>
                <div className={styles.titleText}>
                    <FormattedMessage id={"hearItFromCustomers"} />
                </div>
            </Title>
            <Slider
                initialPercentage={0.7}
                slideKey={SlideKeyEnum.CUSTOMERS}
                extraDesc={
                    <>
                        <FormattedMessage id={"seeAllReviews"} />
                        <img src={blueTopArrow} alt={"arrow"} />
                    </>
                }
            />
            <CompareInfo />
            <Title fontWeight={700} className={styles.titleWrap}>
                <div className={styles.titleText}>
                    <FormattedMessage id={"compareWithTopRated"} />
                </div>
            </Title>
            <Slider initialPercentage={0.7} slideKey={SlideKeyEnum.COMPANIES} />
            <Title fontWeight={700} className={styles.titleWrap}>
                <div className={styles.titleText}>
                    <FormattedMessage id={"getYourDose"} />
                </div>
            </Title>
            <Slider initialPercentage={0.6} slideKey={SlideKeyEnum.NEWS} />
            <Register />
            <Footer />
        </>
    );
};
export default MainModule;
