import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { localesEnum } from "shared/constants/intl/locales";

export interface IUseLocaleStore {
    currentLocale: localesEnum;
    setLocale: (l: localesEnum) => void;
}

const useLocaleStore = create<IUseLocaleStore>()(
    devtools(
        immer((set, get) => ({
            currentLocale: localesEnum.ENGLISH,
            setLocale: (locale: localesEnum) => {
                set({ currentLocale: locale });
            }
        }))
    )
);

export default useLocaleStore;
