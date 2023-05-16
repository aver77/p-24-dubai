const Pets = ({ color = "rgb(47, 43, 67, 0.6)" }: { color?: string }) => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13.8332 0.666993C14.5972 0.66705 15.3431 0.900496 15.9708 1.33608C16.5985 1.77167 17.0782 2.38861 17.3457 3.10433C17.6131 3.82004 17.6556 4.60038 17.4673 5.34088C17.2791 6.08138 16.8691 6.74672 16.2924 7.24783C16.5882 8.05366 16.7499 8.92533 16.7499 9.83366C16.7492 10.9294 16.5085 12.0117 16.0447 13.0044C15.5808 13.9971 14.9051 14.8762 14.065 15.5796C13.2249 16.2831 12.2409 16.794 11.1821 17.0763C10.1234 17.3586 9.01561 17.4055 7.93679 17.2136C6.85797 17.0218 5.83429 16.5959 4.93777 15.9659C4.04124 15.3359 3.29364 14.5171 2.74757 13.5672C2.2015 12.6172 1.87022 11.5591 1.77703 10.4673C1.68384 9.37554 1.83102 8.27661 2.20819 7.24783C1.79993 6.89304 1.47325 6.45414 1.25056 5.96124C1.02787 5.46833 0.914439 4.93309 0.918052 4.39222C0.921666 3.85136 1.04224 3.31768 1.27149 2.82779C1.50075 2.33791 1.83327 1.90341 2.24623 1.55412C2.6592 1.20482 3.14283 0.948991 3.66397 0.80418C4.1851 0.659369 4.73138 0.629004 5.26535 0.715167C5.79932 0.80133 6.30833 1.00198 6.75747 1.30336C7.2066 1.60473 7.58522 1.9997 7.86736 2.46116C8.78169 2.29055 9.71969 2.29055 10.634 2.46116C10.9686 1.91284 11.4387 1.45981 11.9989 1.1456C12.5592 0.831398 13.1908 0.66658 13.8332 0.666993ZM13.8332 2.33366C13.1474 2.33366 12.5207 2.66699 12.1349 3.21033L12.0557 3.33033L11.4574 4.31033L10.3282 4.09949C9.70493 3.98321 9.06696 3.96857 8.43903 4.05616L8.17569 4.09949L7.04569 4.31199L6.44569 3.33199C6.29238 3.08087 6.0876 2.86507 5.84486 2.6988C5.60212 2.53253 5.32691 2.41956 5.03736 2.36733C4.7478 2.31511 4.45047 2.32481 4.16493 2.39579C3.8794 2.46678 3.61213 2.59744 3.38074 2.77917C3.14935 2.96091 2.95908 3.1896 2.82245 3.45018C2.68583 3.71076 2.60595 3.99733 2.58807 4.29101C2.57019 4.58469 2.61473 4.87883 2.71874 5.15406C2.82275 5.42929 2.98388 5.67937 3.19153 5.88783L3.30069 5.99033L4.16819 6.74366L3.77236 7.82283C3.47931 8.62295 3.3651 9.47757 3.43779 10.3266C3.51047 11.1756 3.76827 11.9983 4.19306 12.737C4.61784 13.4757 5.1993 14.1123 5.89654 14.6022C6.59378 15.092 7.38987 15.4231 8.22882 15.5723C9.06777 15.7214 9.92921 15.685 10.7526 15.4655C11.5759 15.246 12.3412 14.8487 12.9945 14.3017C13.6479 13.7547 14.1735 13.0712 14.5343 12.2993C14.8952 11.5274 15.0825 10.6858 15.0832 9.83366C15.0832 9.23699 14.994 8.65366 14.8215 8.09783L14.7282 7.82283L14.3324 6.74366L15.199 5.99033C15.5197 5.71201 15.7476 5.34236 15.8524 4.93089C15.9571 4.51942 15.9336 4.08577 15.785 3.68802C15.6365 3.29027 15.3699 2.94741 15.0211 2.70536C14.6723 2.4633 14.2578 2.33361 13.8332 2.33366ZM7.58319 9.83366C7.58319 10.2757 7.75879 10.6996 8.07135 11.0122C8.38391 11.3247 8.80783 11.5003 9.24986 11.5003C9.69189 11.5003 10.1158 11.3247 10.4284 11.0122C10.7409 10.6996 10.9165 10.2757 10.9165 9.83366H12.5832C12.5832 10.7177 12.232 11.5656 11.6069 12.1907C10.9818 12.8158 10.1339 13.167 9.24986 13.167C8.3658 13.167 7.51796 12.8158 6.89284 12.1907C6.26771 11.5656 5.91653 10.7177 5.91653 9.83366H7.58319Z"
                fill={color}
            />
        </svg>
    );
};

export default Pets;
