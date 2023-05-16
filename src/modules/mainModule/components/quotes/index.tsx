import { useWindowSize } from "usehooks-ts";
import { DeviceWidths } from "shared/constants/deviceWidths";
import QuotesTabs from "./quotesTabs";

import styles from "./Quotes.module.scss";
import QuotesSelect from "./quotesSelect";

const Quotes = () => {
    const { width } = useWindowSize();
    const isMobile = width <= DeviceWidths.IPHONE;

    return <div className={styles.container}>{isMobile ? <QuotesSelect /> : <QuotesTabs />}</div>;
};
export default Quotes;
