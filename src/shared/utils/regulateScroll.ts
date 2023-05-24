export const regulateScroll = (isOpened: boolean) => {
    document.body.style.overflow = isOpened ? "hidden" : "auto";
};
