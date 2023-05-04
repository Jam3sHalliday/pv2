import { gsap } from "gsap";
import { useEffect } from "react";

// const Arrow = (props: any) => (
//     <svg width={80} height={80} viewBox="0 0 77 85" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//         <path d="M1.33755 84.3973C0.297616 62.7119 2.93494 39.8181 19.4192 23.8736C28.2211 15.3599 42.4944 12.5723 47.6281 26.2359C51.1245 35.5419 51.542 51.9945 41.0605 57.0865C29.486 62.7095 40.2945 35.2221 41.9942 32.4952C49.9497 19.7313 59.7772 11.6122 72.2699 3.78281C76.9496 0.849879 73.7108 0.477284 70.0947 1.13476C66.9572 1.7052 63.4035 2.43717 60.5291 3.81975C59.6524 4.24143 65.7349 2.73236 66.6827 2.44768C70.7471 1.22705 75.4874 -0.0219285 75.9527 5.60812C76.0274 6.5127 75.9956 14.9844 74.7481 15.2963C74.099 15.4586 71.0438 10.27 70.4642 9.65288C66.6996 5.64506 63.5835 4.42393 58.2726 5.11792" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
//     </svg>
// )

const PlatformLink = () => {
    useEffect(() => {
        gsap.to(".line", { height: '12rem', duration: 1, delay: 2 });
        gsap.to('.link_1', { opacity: 1, translateY: 0, delay: 2.4 });
        gsap.to('.link_2', { opacity: 1, translateY: 0, delay: 2.8 });
        gsap.to('.link_3', { opacity: 1, translateY: 0, delay: 3.2 });
        gsap.to('.link_4', { opacity: 1, translateY: 0, delay: 3.4 });

        // gsap.from('.arrow', { strokeDashArray: '0px', strokeDashoffset: 1000 });
        // gsap.to('.arrow', { strokeDashArray: '400px', strokeDashoffset: 100  });
    }, []);

    return (
        <div className="fixed top-0 left-12 flex flex-col items-center gap-4">
            <div className="line h-0 bg-gray-400 w-[1px]"></div>
            {/* <Arrow className="arrow rotate-90 " /> */}
            <div className="gap-8  flex flex-col">
                <a className="link_1 hoverable opacity-0 -translate-y-4" href="https://github.com/Jam3sHalliday" rel="noreferrer" target="_blank">
                    <img alt="link icon" src={`${process.env.PUBLIC_URL}/assets/svgs/github.svg`} />
                </a>
                <a className="link_2 hoverable opacity-0 -translate-y-4" href="https://www.linkedin.com/in/phuoc-quang/" rel="noreferrer" target="_blank">
                    <img alt="link icon" src={`${process.env.PUBLIC_URL}/assets/svgs/linkedin.svg`} />
                </a>
                <a className="link_3 hoverable opacity-0 -translate-y-4" href="https://leetcode.com/Jam3sHalliday/" rel="noreferrer" target="_blank">
                    <img alt="link icon" src={`${process.env.PUBLIC_URL}/assets/svgs/leetcode.svg`} />
                </a>
                <a className="link_4 hoverable opacity-0 -translate-y-4" href="https://codepen.io/Jam3sHalliday" rel="noreferrer" target="_blank">
                    <img alt="link icon" src={`${process.env.PUBLIC_URL}/assets/svgs/codepen.svg`} />
                </a>
            </div>
        </div>
    )
}

export default PlatformLink;
