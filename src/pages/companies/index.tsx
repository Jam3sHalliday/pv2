import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

export default function Companies() {
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
                    snap: 1 / (panels.length - 1),
                    end: () => "+=" + (slider.current as HTMLElement)?.offsetWidth
                }
            });
        }, component);
        return () => ctx.revert();
    });

    return (
        <div className="page" ref={component}>
            <div ref={slider} className="r_container">
                <div className="panel">ONE</div>
                <div className="panel">TWO</div>
                <div className="panel">THREE</div>
            </div>
        </div>
    );
}
