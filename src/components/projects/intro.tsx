import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react"

const Arrow = ({ className }: { className: string }) => (
    <svg className={className} viewBox="0 0 77 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.33755 84.3973C0.297616 62.7119 2.93494 39.8181 19.4192 23.8736C28.2211 15.3599 42.4944 12.5723 47.6281 26.2359C51.1245 35.5419 51.542 51.9945 41.0605 57.0865C29.486 62.7095 40.2945 35.2221 41.9942 32.4952C49.9497 19.7313 59.7772 11.6122 72.2699 3.78281C76.9496 0.849879 73.7108 0.477284 70.0947 1.13476C66.9572 1.7052 63.4035 2.43717 60.5291 3.81975C59.6524 4.24143 65.7349 2.73236 66.6827 2.44768C70.7471 1.22705 75.4874 -0.0219285 75.9527 5.60812C76.0274 6.5127 75.9956 14.9844 74.7481 15.2963C74.099 15.4586 71.0438 10.27 70.4642 9.65288C66.6996 5.64506 63.5835 4.42393 58.2726 5.11792" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
    </svg>
)

export default function ProjectIntro() {
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.intro_text', {
                scrollTrigger: {
                    trigger: '.intro_text',
                    toggleActions: 'restart none none none',
                },
                opacity: 1,
                duration: 2,
            });
        });


        return () => ctx.revert();
    }, []);

    return <div className="panel bg-project flex justify-center items-center">
        <div className="text-z48 lg:text-z32 md:text-z24 font-futara flex space-x-4">
            <p className="intro_text opacity-0">
                Here some project I've worked on
            </p>

            <div className="scale-x-[-1] rotate-90 absolute top-1/2 right-12 -translate-y-1/2 arrow">
                <Arrow className="w-48 h-48 lg:w-24 lg:h-24 md:w-16 md:h-16" />
            </div>
        </div>
    </div>
}