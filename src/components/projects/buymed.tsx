import { gsap } from "gsap";
import { useLayoutEffect } from "react"

export default function BuymedProject() {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const title = document.querySelector('.buymed_tittle');
            const name = document.querySelector('.text-underwhite');

            // gsap.to(name, {
            //     scrollTrigger: '.text-underwhite',
            //     x: 320
            // });

            gsap.to('.buymed_title', {
                scrollTrigger: {
                    trigger: '.buymed_title',
                    start: "top 50%",
                    end: "+=500",
                },
                y: -500,
                duration: 300
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="panel bg-project buymed font-futara">
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4"
            >
                <div className="grid grid-cols-2 space-x-12">
                    <div className="mt-12">
                        <h3 className="text-z48">Circa</h3>
                        <p>In development</p>
                        <p className="mt-8 whitespace-normal">
                            Taking advantage of available resource of
                            &nbsp;
                            <a className="hoverable" href="https://thuocsi.vn/" target="_blank" rel="noreferrer">
                                thuocsi.vn
                            </a>
                            &nbsp;
                            like warehouses, logistics, we built an e-commerce web application of medicine, provide to end-user a solution for buying medicine easily without "sold-out" problem, quickly deliver product to user, currently applying in Circa HCMC.
                        </p>

                        <ul
                            className="list-disc columns-2 mt-4 ml-8"
                        >
                            <li>nextjs</li>
                            <li>typescript</li>
                            <li>tailwindcss</li>
                            <li>material-ui</li>
                            <li>redux-toolkit</li>
                            <li>...</li>
                        </ul>
                    </div>


                    <div className="img justify-self-end">
                        <img src="/assets/imgs/circa_mobile.webp" className="w-3/4" alt="showcase_" />
                    </div>
                </div>
            </div>

            {/* <img src="/assets/imgs/jopus-laptop.webp" width={'500px'} /> */}
        </div>
    )
}