import { useLayoutEffect } from 'react';
import styles from './styles.module.css';
import { gsap } from 'gsap';

const A = () => (
    <svg className="w-10 h-10" viewBox="0 0 195 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_103_6626)">
            <path d="M194.255 52.3612C194.255 49.8332 193.251 47.4088 191.464 45.6212C189.677 43.8337 187.253 42.8295 184.725 42.8295C182.198 42.8295 179.774 43.8337 177.986 45.6212C176.199 47.4088 175.195 49.8332 175.195 52.3612C175.195 100.793 135.804 140.191 87.3858 140.191C69.2674 140.167 51.8981 132.957 39.0874 120.142C26.2767 107.328 19.0706 89.9541 19.0496 71.8325C19.065 57.8392 24.6297 44.4235 34.5227 34.5288C44.4157 24.634 57.8291 19.0684 71.8199 19.053C82.5076 19.0656 92.7539 23.3176 100.311 30.8762C107.868 38.4348 112.12 48.6829 112.132 59.3724C112.122 67.4209 108.92 75.1368 103.229 80.8265C97.537 86.5162 89.8208 89.7149 81.7736 89.7205C75.8426 89.7149 70.1562 87.3559 65.9623 83.1613C61.7685 78.9668 59.4099 73.2793 59.4043 67.3473C59.4099 63.1076 61.0963 59.0432 64.0937 56.0453C67.0911 53.0474 71.1548 51.3607 75.3937 51.3551C78.2804 51.3579 81.0481 52.5057 83.0897 54.5467C85.1314 56.5877 86.2803 59.3554 86.2845 62.2425C86.2845 64.7705 87.2886 67.1949 89.0758 68.9825C90.8631 70.77 93.2871 71.7743 95.8146 71.7743C98.3422 71.7743 100.766 70.77 102.553 68.9825C104.341 67.1949 105.345 64.7705 105.345 62.2425C105.335 54.3067 102.179 46.6985 96.5699 41.086C90.9604 35.4736 83.3547 32.3147 75.4202 32.3021C66.1289 32.3105 57.2204 36.0051 50.6494 42.5753C44.0785 49.1454 40.3818 58.0544 40.3706 67.3473C40.3818 78.328 44.747 88.856 52.5087 96.622C60.2704 104.388 70.7948 108.758 81.7736 108.773C94.8686 108.758 107.423 103.548 116.682 94.2872C125.942 85.026 131.151 72.4696 131.166 59.3724C131.148 43.6342 124.89 28.5456 113.765 17.4155C102.64 6.28542 87.5554 0.0224225 71.8199 0C32.2171 0 0 32.2227 0 71.8325C0 120.021 39.2058 159.244 87.3964 159.244C146.319 159.244 194.255 111.294 194.255 52.3612Z" fill="currentColor"></path>
            <path d="M194.255 52.3612C194.255 49.8332 193.251 47.4088 191.464 45.6212C189.677 43.8337 187.253 42.8295 184.725 42.8295C182.198 42.8295 179.774 43.8337 177.986 45.6212C176.199 47.4088 175.195 49.8332 175.195 52.3612C175.195 100.793 135.804 140.191 87.3858 140.191C69.2674 140.167 51.8981 132.957 39.0874 120.142C26.2767 107.328 19.0706 89.9541 19.0496 71.8325C19.065 57.8392 24.6297 44.4235 34.5227 34.5288C44.4157 24.634 57.8291 19.0684 71.8199 19.053C82.5076 19.0656 92.7539 23.3176 100.311 30.8762C107.868 38.4348 112.12 48.6829 112.132 59.3724C112.122 67.4209 108.92 75.1368 103.229 80.8265C97.537 86.5162 89.8208 89.7149 81.7736 89.7205C75.8426 89.7149 70.1562 87.3559 65.9623 83.1613C61.7685 78.9668 59.4099 73.2793 59.4043 67.3473C59.4099 63.1076 61.0963 59.0432 64.0937 56.0453C67.0911 53.0474 71.1548 51.3607 75.3937 51.3551C78.2804 51.3579 81.0481 52.5057 83.0897 54.5467C85.1314 56.5877 86.2803 59.3554 86.2845 62.2425C86.2845 64.7705 87.2886 67.1949 89.0758 68.9825C90.8631 70.77 93.2871 71.7743 95.8146 71.7743C98.3422 71.7743 100.766 70.77 102.553 68.9825C104.341 67.1949 105.345 64.7705 105.345 62.2425C105.335 54.3067 102.179 46.6985 96.5699 41.086C90.9604 35.4736 83.3547 32.3147 75.4202 32.3021C66.1289 32.3105 57.2204 36.0051 50.6494 42.5753C44.0785 49.1454 40.3818 58.0544 40.3706 67.3473C40.3818 78.328 44.747 88.856 52.5087 96.622C60.2704 104.388 70.7948 108.758 81.7736 108.773C94.8686 108.758 107.423 103.548 116.682 94.2872C125.942 85.026 131.151 72.4696 131.166 59.3724C131.148 43.6342 124.89 28.5456 113.765 17.4155C102.64 6.28542 87.5554 0.0224225 71.8199 0C32.2171 0 0 32.2227 0 71.8325C0 120.021 39.2058 159.244 87.3964 159.244C146.319 159.244 194.255 111.294 194.255 52.3612Z" fill="currentColor" fillOpacity="0.2"></path>
        </g>
        <defs>
            <clipPath id="clip0_103_6626">
                <rect width="194.255" height="159.244" fill="white"></rect>
            </clipPath>
        </defs>
    </svg>
);

const U = () => (
    <svg className="w-10 h-10" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_103_6476)">
            <path d="M35.5727 94.6709C36.1748 95.3712 36.8111 96.0503 37.473 96.7164C38.1349 97.3826 38.8225 97.9976 39.5228 98.621L3.94588 134.194C3.2683 133.562 2.59784 132.915 1.9345 132.255C1.27116 131.594 0.626329 130.925 0 130.248L35.5727 94.6709Z" fill="currentColor"></path>
            <path d="M35.5727 94.6709C36.1748 95.3712 36.8111 96.0503 37.473 96.7164C38.1349 97.3826 38.8225 97.9976 39.5228 98.621L3.94588 134.194C3.2683 133.562 2.59784 132.915 1.9345 132.255C1.27116 131.594 0.626329 130.925 0 130.248L35.5727 94.6709Z" fill="currentColor" fillOpacity="0.2"></path>
            <path d="M132.255 1.9345C132.915 2.59784 133.562 3.2683 134.194 3.94587L98.621 39.5228C98.0146 38.8224 97.3783 38.1392 96.7122 37.473C96.046 36.8068 95.3656 36.1734 94.6709 35.5727L130.248 0C130.928 0.637717 131.597 1.28255 132.255 1.9345Z" fill="currentColor"></path>
            <path d="M132.255 1.9345C132.915 2.59784 133.562 3.2683 134.194 3.94587L98.621 39.5228C98.0146 38.8224 97.3783 38.1392 96.7122 37.473C96.046 36.8068 95.3656 36.1734 94.6709 35.5727L130.248 0C130.928 0.637717 131.597 1.28255 132.255 1.9345Z" fill="currentColor" fillOpacity="0.2"></path>
            <path d="M43.9896 102.046C45.6003 103.115 47.2842 104.07 49.0287 104.903L12.5508 141.381C11.0419 140.276 9.56857 139.119 8.13086 137.909L43.9896 102.046Z" fill="currentColor"></path>
            <path d="M43.9896 102.046C45.6003 103.115 47.2842 104.07 49.0287 104.903L12.5508 141.381C11.0419 140.276 9.56857 139.119 8.13086 137.909L43.9896 102.046Z" fill="currentColor" fillOpacity="0.2"></path>
            <path d="M137.909 8.13086C139.119 9.57426 140.276 11.049 141.381 12.555L104.903 49.033C104.069 47.2888 103.114 45.605 102.046 43.9939L137.909 8.13086Z" fill="currentColor"></path>
            <path d="M137.909 8.13086C139.119 9.57426 140.276 11.049 141.381 12.555L104.903 49.033C104.069 47.2888 103.114 45.605 102.046 43.9939L137.909 8.13086Z" fill="currentColor" fillOpacity="0.2"></path>
            <path d="M54.7081 107.12C56.8172 107.774 58.9748 108.259 61.1607 108.572L22.1546 147.573C20.4835 146.637 18.8408 145.64 17.2266 144.584L54.7081 107.12Z" fill="currentColor"></path>
            <path d="M54.7081 107.12C56.8172 107.774 58.9748 108.259 61.1607 108.572L22.1546 147.573C20.4835 146.637 18.8408 145.64 17.2266 144.584L54.7081 107.12Z" fill="currentColor" fillOpacity="0.2"></path>
            <path d="M144.601 17.2271C145.651 18.8413 146.641 20.484 147.569 22.1551L108.563 61.1697C108.251 58.983 107.769 56.824 107.119 54.7129L144.601 17.2271Z" fill="currentColor"></path>
            <path d="M144.601 17.2271C145.651 18.8413 146.641 20.484 147.569 22.1551L108.563 61.1697C108.251 58.983 107.769 56.824 107.119 54.7129L144.601 17.2271Z" fill="currentColor" fillOpacity="0.2"></path>
            <path d="M68.6894 108.947C71.8293 108.83 74.9462 108.361 77.9819 107.551L32.8605 152.668C31.0029 151.938 29.1794 151.13 27.373 150.264L68.6894 108.947Z" fill="currentColor"></path>
            <path d="M68.6894 108.947C71.8293 108.83 74.9462 108.361 77.9819 107.551L32.8605 152.668C31.0029 151.938 29.1794 151.13 27.373 150.264L68.6894 108.947Z" fill="currentColor" fillOpacity="0.2"></path>
            <path d="M150.264 27.3735C151.118 29.1799 151.933 31.0034 152.668 32.8653L107.551 77.9824C108.362 74.9467 108.83 71.8298 108.947 68.6899L150.264 27.3735Z" fill="currentColor"></path>
            <path d="M150.264 27.3735C151.118 29.1799 151.933 31.0034 152.668 32.8653L107.551 77.9824C108.362 74.9467 108.83 71.8298 108.947 68.6899L150.264 27.3735Z" fill="currentColor" fillOpacity="0.2"></path>
            <path d="M154.769 38.6602C155.426 40.6886 156.011 42.7427 156.524 44.801L44.801 156.524C42.7427 156.011 40.6886 155.426 38.6602 154.769L154.769 38.6602Z" fill="currentColor"></path>
            <path d="M154.769 38.6602C155.426 40.6886 156.011 42.7427 156.524 44.801L44.801 156.524C42.7427 156.011 40.6886 155.426 38.6602 154.769L154.769 38.6602Z" fill="currentColor" fillOpacity="0.2"></path>
            <path d="M157.895 51.3477C158.296 53.6594 158.608 55.9796 158.83 58.3085L58.3085 158.83C55.9825 158.614 53.6622 158.302 51.3477 157.895L157.895 51.3477Z" fill="currentColor"></path>
            <path d="M157.895 51.3477C158.296 53.6594 158.608 55.9796 158.83 58.3085L58.3085 158.83C55.9825 158.614 53.6622 158.302 51.3477 157.895L157.895 51.3477Z" fill="currentColor" fillOpacity="0.2"></path>
            <path d="M159.232 65.79C159.274 68.4975 159.198 71.2135 158.997 73.9038L73.9214 159.001C71.214 159.197 68.498 159.274 65.8076 159.236L159.232 65.79Z" fill="currentColor"></path>
            <path d="M159.232 65.79C159.274 68.4975 159.198 71.2135 158.997 73.9038L73.9214 159.001C71.214 159.197 68.498 159.274 65.8076 159.236L159.232 65.79Z" fill="currentColor" fillOpacity="0.2"></path>
            <path d="M157.882 82.9487C157.281 86.4206 156.483 89.8554 155.49 93.2362L93.2191 155.499C89.8379 156.489 86.4032 157.286 82.9316 157.886L157.882 82.9487Z" fill="currentColor"></path>
            <path d="M157.882 82.9487C157.281 86.4206 156.483 89.8554 155.49 93.2362L93.2191 155.499C89.8379 156.489 86.4032 157.286 82.9316 157.886L157.882 82.9487Z" fill="currentColor" fillOpacity="0.2"></path>
            <path d="M150.708 105.902C141.509 125.645 125.644 141.511 105.902 150.712L150.708 105.902Z" fill="currentColor"></path>
            <path d="M150.708 105.902C141.509 125.645 125.644 141.511 105.902 150.712L150.708 105.902Z" fill="currentColor" fillOpacity="0.2"></path>
        </g>
        <defs>
            <clipPath id="clip0_103_6476">
                <rect width="159.244" height="159.244" fill="white"></rect>
            </clipPath>
        </defs>
    </svg>
)

const O = () => (
    <svg className="w-10 h-10" viewBox="0 0 82 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.93652 1.94287C22.4767 1.94287 42.1755 10.1271 56.6996 24.6953C71.2237 39.2634 79.3832 59.0219 79.3832 79.6244C79.3832 100.227 71.2237 119.985 56.6996 134.553C42.1755 149.122 22.4767 157.306 1.93652 157.306V1.94287Z" fill="white"></path>
        <path d="M1.93652 1.94287C22.4767 1.94287 42.1755 10.1271 56.6996 24.6953C71.2237 39.2634 79.3832 59.0219 79.3832 79.6244C79.3832 100.227 71.2237 119.985 56.6996 134.553C42.1755 149.122 22.4767 157.306 1.93652 157.306V1.94287Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
        <path d="M1.93652 1.94287C22.4767 1.94287 42.1755 10.1271 56.6996 24.6953C71.2237 39.2634 79.3832 59.0219 79.3832 79.6244C79.3832 100.227 71.2237 119.985 56.6996 134.553C42.1755 149.122 22.4767 157.306 1.93652 157.306V1.94287Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" strokeMiterlimit="10"></path>
        <path d="M1.93652 21.3623C17.3419 21.3623 32.1164 27.5006 43.0096 38.4269C53.9029 49.3532 60.0226 64.1724 60.0226 79.6245C60.0226 95.0766 53.9029 109.896 43.0096 120.822C32.1164 131.748 17.3419 137.887 1.93652 137.887V21.3623Z" fill="white"></path>
        <path d="M1.93652 21.3623C17.3419 21.3623 32.1164 27.5006 43.0096 38.4269C53.9029 49.3532 60.0226 64.1724 60.0226 79.6245C60.0226 95.0766 53.9029 109.896 43.0096 120.822C32.1164 131.748 17.3419 137.887 1.93652 137.887V21.3623Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
        <path d="M1.93652 21.3623C17.3419 21.3623 32.1164 27.5006 43.0096 38.4269C53.9029 49.3532 60.0226 64.1724 60.0226 79.6245C60.0226 95.0766 53.9029 109.896 43.0096 120.822C32.1164 131.748 17.3419 137.887 1.93652 137.887V21.3623Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" strokeMiterlimit="10"></path>
        <path d="M1.93652 40.7856C12.206 40.7856 22.0549 44.8776 29.3165 52.1612C36.5781 59.4448 40.6577 69.3236 40.6577 79.6242C40.6577 89.9248 36.5781 99.8035 29.3165 107.087C22.0549 114.371 12.206 118.463 1.93652 118.463V40.7856Z" fill="white"></path>
        <path d="M1.93652 40.7856C12.206 40.7856 22.0549 44.8776 29.3165 52.1612C36.5781 59.4448 40.6577 69.3236 40.6577 79.6242C40.6577 89.9248 36.5781 99.8035 29.3165 107.087C22.0549 114.371 12.206 118.463 1.93652 118.463V40.7856Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
        <path d="M1.93652 40.7856C12.206 40.7856 22.0549 44.8776 29.3165 52.1612C36.5781 59.4448 40.6577 69.3236 40.6577 79.6242C40.6577 89.9248 36.5781 99.8035 29.3165 107.087C22.0549 114.371 12.206 118.463 1.93652 118.463V40.7856Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" strokeMiterlimit="10"></path>
        <path d="M1.93652 60.2051C7.07127 60.2051 11.9957 62.251 15.6265 65.8929C19.2573 69.5347 21.2971 74.474 21.2971 79.6243C21.2971 84.7747 19.2573 89.714 15.6265 93.3558C11.9957 96.9977 7.07127 99.0436 1.93652 99.0436V60.2051Z" fill="white"></path>
        <path d="M1.93652 60.2051C7.07127 60.2051 11.9957 62.251 15.6265 65.8929C19.2573 69.5347 21.2971 74.474 21.2971 79.6243C21.2971 84.7747 19.2573 89.714 15.6265 93.3558C11.9957 96.9977 7.07127 99.0436 1.93652 99.0436V60.2051Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
        <path d="M1.93652 60.2051C7.07127 60.2051 11.9957 62.251 15.6265 65.8929C19.2573 69.5347 21.2971 74.474 21.2971 79.6243C21.2971 84.7747 19.2573 89.714 15.6265 93.3558C11.9957 96.9977 7.07127 99.0436 1.93652 99.0436V60.2051Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" strokeMiterlimit="10"></path>
    </svg>
)

const G = () => (
    <svg className="w-10 h-10" viewBox="0 0 86 94" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M51.7507 89.3764C46.8423 66.4714 31.0526 25.5123 50.1502 3.05555C58.8532 -7.17824 59.7483 23.877 59.8718 28.7465C60.2341 43.0332 57.3781 58.0896 54.0402 71.9591C53.619 73.7096 50.1637 89.4389 53.567 83.552" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M55.6964 89.94C47.8635 70.753 38.2096 40.9109 18.6681 29.7903C15.5318 28.0055 11.0088 25.8114 7.30074 27.0869C2.22045 28.8344 -1.14609 36.2692 2.59999 40.6874C9.04447 48.288 19.2442 53.6699 26.8448 60.0878C33.9423 66.0808 40.8449 72.4465 46.3646 79.9614C47.3542 81.3088 50.8939 89.7118 50.3729 88.0611" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M58.4522 86.9339C53.3152 65.1436 55.5759 46.5023 64.0367 25.563C65.1417 22.8282 79.5285 -0.850586 81.8932 6.4026C92.3835 38.5792 61.9165 65.1202 51.8134 92.2571" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
    </svg>
);

const S = () => (
    <svg className="w-10 h-10" viewBox="0 0 110 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.734436 32.0433C28.1185 20.8631 58.321 14.4162 87.6991 11.2271C93.6909 10.5767 99.7856 10.1329 105.681 8.82643C106.565 8.6305 107.666 8.45126 108.257 7.71167" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M105.295 7.55369C103.251 6.41332 98.0697 4.73081 97.3989 2.01718C97.3762 1.92544 97.3095 1.31771 97.3374 1.37859C98.1737 3.20315 97.6004 7.32036 97.4208 9.32238C97.3735 9.84973 96.396 15.3811 96.8612 15.1485C101.235 12.9619 105.361 8.83254 109.442 6.05271" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
    </svg>
)

const G2 = () => (
    <svg className="w-10 h-10" viewBox="0 0 115 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.96056 72.4776C2.11526 72.1427 2.61932 71.3858 3.47274 70.2068C4.32617 69.0278 5.12206 67.971 5.86041 67.0365C6.59877 66.102 7.54001 64.8843 8.68414 63.3832C9.82849 61.8822 10.7074 60.7311 11.3207 59.9299C11.9341 59.1285 12.5843 58.2841 13.2713 57.3967C13.9584 56.509 15.1275 54.993 16.7787 52.8487C18.4299 50.7043 20.1083 48.5845 21.8138 46.4892C23.5193 44.3939 24.8029 42.8334 25.6647 41.8077C26.5262 40.7821 27.2318 39.9321 27.7814 39.258C28.3309 38.5838 29.2978 37.4637 30.6822 35.8979C32.0668 34.332 33.1765 33.0913 34.0112 32.176C34.8462 31.2609 35.6647 30.3806 36.4668 29.535C37.2686 28.6897 38.0465 27.8696 38.8004 27.0747C39.5543 26.2796 40.7613 25.0652 42.4216 23.4316C44.0818 21.7979 45.4922 20.4434 46.6528 19.3679C47.8133 18.2927 48.6809 17.4937 49.2556 16.9708C49.8305 16.4479 50.4121 15.9271 51.0005 15.4083C51.5889 14.8892 52.4073 14.182 53.4557 13.2864C54.5041 12.3909 55.6724 11.4026 56.9604 10.3215" stroke="currentColor" strokeWidth="2.40238" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M22.4046 76.4629C22.4757 76.2636 22.8882 75.2594 23.6421 73.4504C24.3963 71.6413 25.5284 69.4455 27.0387 66.8629C28.5492 64.2803 29.7211 62.335 30.5545 61.027C31.3881 59.7189 31.9949 58.7378 32.3747 58.0837C32.7546 57.4295 33.7812 55.8811 35.4545 53.4384C37.1276 50.9957 38.4956 49.06 39.5587 47.6315C40.6217 46.203 41.4966 45.0339 42.1831 44.1242C42.8697 43.2147 43.7552 42.0704 44.8397 40.6914C45.9243 39.3122 47.0484 37.9385 48.2119 36.5703C49.3754 35.2022 50.2633 34.1643 50.8755 33.4568C51.4878 32.7495 52.2802 31.8579 53.2527 30.782C54.2253 29.7064 55.2707 28.5952 56.3889 27.4486C57.5069 26.3018 58.5024 25.2882 59.3754 24.4077C60.2482 23.5273 61.5074 22.3131 63.153 20.7653C64.7988 19.2174 66.3734 17.7947 67.8767 16.4972C69.3802 15.1998 70.8823 13.932 72.3831 12.694C73.8839 11.4558 75.3001 10.3252 76.6316 9.30249C77.9633 8.27974 79.4285 7.16454 81.0272 5.95691" stroke="currentColor" strokeWidth="2.40238" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M40.0535 96.3708C40.1289 96.0743 40.5204 94.6886 41.2279 92.2139C41.9354 89.7392 42.8657 87.1333 44.0189 84.396C45.1718 81.6585 46.1029 79.5524 46.8122 78.0777C47.5217 76.6033 48.0229 75.5319 48.3156 74.8636C48.6081 74.1952 49.4992 72.4651 50.989 69.6731C52.4788 66.8811 53.7505 64.6236 54.8041 62.9006C55.8577 61.1773 56.6296 59.9047 57.1198 59.0828C57.6098 58.2607 58.4645 56.9465 59.6838 55.1404C60.9031 53.3342 61.8391 51.9585 62.4916 51.0132C63.1444 50.0679 63.9512 48.9479 64.9121 47.6531C65.8729 46.3586 66.6215 45.3676 67.1579 44.6801C67.6943 43.9926 68.1759 43.3761 68.6029 42.8305C69.03 42.2849 69.6793 41.4738 70.5507 40.3972C71.4222 39.3207 72.5404 37.9981 73.9054 36.4295C75.2707 34.8611 76.4771 33.5194 77.5246 32.4043C78.5724 31.2895 79.6814 30.1035 80.8516 28.8463C82.0216 27.5891 83.856 25.7855 86.3548 23.4353C88.8536 21.0853 90.8133 19.2912 92.234 18.053C93.6546 16.8147 94.8794 15.757 95.9082 14.8797C96.937 14.0026 98.3193 12.8774 100.055 11.5041C101.79 10.1307 103.119 9.08812 104.041 8.37633C104.963 7.66455 105.694 7.10317 106.235 6.69222C106.777 6.28127 107.584 5.67645 108.659 4.87774C109.733 4.07904 111.207 2.98964 113.082 1.60953" stroke="currentColor" strokeWidth="2.40238" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
)


const Introduction = () => {

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set('.imwhat', { opacity: 0, y: -10 })
            gsap.timeline()
                .from('.intro', { background: '#fff' })
                .to('.intro', {
                    backgroundImage: 'linear-gradient(180deg, rgba(255, 243, 240, 1) 0%, rgba(224, 251, 252, 1) 100%)',
                    duration: 2
                })

                .from('.f', { delay: 1, opacity: 0, y: 10 })
                .to('.f', { opacity: 0, y: -10 })

                .from('.s', { opacity: 0, y: 10 })
                .to('.s', { opacity: 0, y: -10 })

                .from('.mynameis', { opacity: 0, y: 10 })
                .to('.mynameis', { opacity: 0, y: -10 })

                .from('.iam', { opacity: 0, y: 10 })
                .to('.iam', { opacity: 1, y: 0 })

                .from('.ima', { opacity: 0, y: 10 })
                .to('.ima', { opacity: 1, y: 0 })

                .from('.imwhat_1', { opacity: 0, y: 10 })
                .to('.imwhat_1', { opacity: 0, y: -10 })

                .from('.imwhat_2', { opacity: 0, y: 10 })
                .to('.imwhat_2', { opacity: 0, y: -10 })

                .from('.imwhat_3', { opacity: 0, y: 10 })
                .to('.imwhat_3', { opacity: 0, y: -10 })

                .from('.imwhat_4', { opacity: 0, y: 10 })
                .to('.imwhat_4', { opacity: 0, y: -10 })

                .to('.imwhat', { opacity: 1, y: 0 })
                .to('.imaplaceholder', { y: -10, opacity: 0, display: 'none' })

                .from('.line', { height: 0 })
                .to(".line", { height: '12rem' })

                .from('.link_1', { opacity: 0, y: -10 })
                .to('.link_1', { opacity: 1, translateY: 0 })

                .from('.link_2', { opacity: 0, y: -10 })
                .to('.link_2', { opacity: 1, translateY: 0 })

                .from('.link_3', { opacity: 0, y: -10 })
                .to('.link_3', { opacity: 1, translateY: 0 })

                .from('.link_4', { opacity: 0, y: -10 })
                .to('.link_4', { opacity: 1, translateY: 0 })

                .from('.resume', { opacity: 0, y: -10 })
                .to('.resume', { opacity: 1, y: 0, delay: 2 })
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className={`${styles.intro} intro min-w-screen min-h-screen flex justify-center items-center flex-col bg-intro`}>
                <div
                    className="
                        xl:text-z128 lg:text-z64 md:text-z48 spm:text-z32
                        font-snowman relative font-bold
                    "
                >
                    <p className='f absolute top-0 left-0'>
                        hi there!
                    </p>
                    <p className='s absolute top-0 left-0'>
                        welcome!
                    </p>

                    <p className='mynameis absolute top-0 left-0'>
                        my name is
                    </p>

                    <h1 className={`${styles.name} hoverable iam relative tracking-wider font-bold select-none`}>
                        T
                        <span className="relative">
                            <span className={`${styles.a} absolute top-1 left-1/2`}>
                                <A />
                            </span>
                            a
                        </span>
                        ng Ph
                        <span className="relative">
                            <span className={`${styles.u} absolute top-1 left-1/2`}>
                                <U />
                            </span>
                            u
                        </span>
                        <span className="relative">
                            <span className={`${styles.o} absolute top-1 left-1/2`}>
                                <O />
                            </span>
                            <span className={`${styles.s} absolute -top-12 left-1/2`}>
                                <S />
                            </span>
                            o
                        </span>
                        c
                        Quan
                        <span className="relative">
                            <span className={`${styles.g} absolute bottom-9 -right-8`}>
                                <G />
                            </span>
                            <span className={`${styles.g} absolute top-0 -right-8`}>
                                <G2 />
                            </span>
                            g
                        </span>
                    </h1>
                </div>

                <div className='flex items-center font-futara xl:text-z48 lg:text-z32 md:text-z24 spm:text-z18 tracking-wider font-semibold'>
                    <div className="flex items-start imaplaceholder">
                        <p className="ima">I'm a</p>
                        &nbsp;
                        <div className='relative'>
                            <p className="imwhat_1 absolute top-0 left-0">
                                programmer
                            </p>
                            <p className="imwhat_2 absolute top-0 left-0">
                                skater
                            </p>
                            <p className="imwhat_3 absolute top-0 left-0">
                                guitarist
                            </p>
                            <p className="imwhat_4 absolute top-0 left-0">
                                gamer
                            </p>
                        </div>
                    </div>
                    <h2 className="imwhat">
                        programmer
                        &#183;
                        skater
                        &#183;
                        guitarist
                        &#183;
                        gamer
                    </h2>
                </div>
            </div>

            <div className="fixed top-0 left-8 lg:left-6 md:left-4 flex flex-col items-center gap-4">
                <div className="line bg-gray-400 w-[1px]"></div>
                <div className="gap-8 md:gap-4 flex flex-col">
                    <a className="link_1 hoverable" href="https://github.com/Jam3sHalliday" rel="noreferrer" target="_blank">
                        <img className="xl:w-6 lg:w-5 md:w-4 spm:w-3" alt="link icon" src={`${process.env.PUBLIC_URL}/assets/svgs/github.svg`} />
                    </a>
                    <a className="link_2 hoverable" href="https://www.linkedin.com/in/phuoc-quang/" rel="noreferrer" target="_blank">
                        <img className="xl:w-6 lg:w-5 md:w-4 spm:w-3" alt="link icon" src={`${process.env.PUBLIC_URL}/assets/svgs/linkedin.svg`} />
                    </a>
                    <a className="link_3 hoverable" href="https://leetcode.com/Jam3sHalliday/" rel="noreferrer" target="_blank">
                        <img className="xl:w-6 lg:w-5 md:w-4 spm:w-3" alt="link icon" src={`${process.env.PUBLIC_URL}/assets/svgs/leetcode.svg`} />
                    </a>
                    <a className="link_4 hoverable" href="https://codepen.io/Jam3sHalliday" rel="noreferrer" target="_blank">
                        <img className="xl:w-6 lg:w-5 md:w-4 spm:w-3" alt="link icon" src={`${process.env.PUBLIC_URL}/assets/svgs/codepen.svg`} />
                    </a>
                </div>
            </div>


            <button
                className="fixed top-4 right-12 font-futara resume p-4 hoverable"
                style={{
                    border: '1px solid #000',
                    borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'
                }}
            >
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={`${process.env.PUBLIC_URL}/assets/SoftwareEngineer_TangPhuocQuang.pdf`}
                    className="!text-black"
                >
                    Download my resume.
                </a>
            </button>
        </>
    )
}

export default Introduction;
