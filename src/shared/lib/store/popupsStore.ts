import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
export interface IPopupsStore {
    burgerOpened: boolean;
    successModalOpened: boolean;
    setBurgerOpened: (v: boolean) => void;
    setSuccessModalOpened: (v: boolean) => void;
    defineIsSomeModalOpened: () => boolean;
}

const usePopupsStore = create<IPopupsStore>()(
    devtools(
        immer((set, get) => ({
            burgerOpened: false,
            successModalOpened: false,
            setBurgerOpened: (v: boolean) => {
                set({ burgerOpened: v });
            },
            setSuccessModalOpened: (v: boolean) => {
                set({ successModalOpened: v });
            },
            defineIsSomeModalOpened: () => {
                return get().burgerOpened || get().successModalOpened;
            }
        }))
    )
);

export default usePopupsStore;
