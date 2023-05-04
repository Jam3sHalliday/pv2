import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./style.css";
import ProjectIntro from "../../components/projects/intro";
import BuymedProject from "../../components/projects/buymed";
import Jopus from "../../components/projects/jopus";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const component = useRef<any>(null);
    const slider = useRef<any>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");

            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    // snap: 1 / (panels.length - 1),
                    end: () => "+=" + (slider.current as HTMLElement)?.offsetWidth
                }
            });
        }, component);
        return () => ctx.revert();
    });

    return (
        <div className="page" ref={component}>
            <div ref={slider} className="r_container">
                <ProjectIntro />
                <BuymedProject />
                <Jopus />
            </div>
        </div>
    );
}
