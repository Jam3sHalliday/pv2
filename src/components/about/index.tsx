import "./styles.css";

const ArrowCurve = () => (
    <svg className="w-32 h-32" viewBox="0 0 107 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.447937 18.1614C9.81014 31.5352 18.4347 42.3598 31.519 52.0087C40.0175 58.2759 54.5547 65.2946 64.1291 57.0482C74.8617 47.8042 84.2643 34.1413 91.7659 22.1683C95.8416 15.6632 100.326 9.79988 103.994 3.06629C104.777 1.62775 106.117 0.590713 103.454 1.84721C99.6476 3.64332 95.7206 5.00081 91.7126 6.32044C84.0852 8.83174 82.4146 9.9082 92.4987 7.40962C94.8989 6.81489 101.851 3.59526 104.567 4.38527C107.097 5.12145 106.361 12.9525 106.422 14.9305C106.9 30.442 95.1386 15.7417 88.7647 11.1467" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
    </svg>
)

const About = () => {
    return (
        <div className="min-w-screen page min-h-screen bg-about relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-1/2 lg:w-3/4">
                <div className="relative">
                    <h2 className="font-snowman 2xl:text-z48 font-semibold inline-block lg:text-z24">About Me</h2>
                    {/* <div className="absolute right-0 top-0 ">
                        <ArrowCurve />
                    </div> */}
                </div>

                <div className="mt-4 flex items-start gap-8">
                    <div className="2xl:text-z20 lg:text-z16 font-futara space-y-4 mt-4 w-3/4">
                        <p >Hi! my name Quang, 2000, a front-end developer, enjoy creating stunning UI and animations</p>
                        <p>My journey started back in December 2019, when I was a Networking management's freshman at Cao Thang College. First tried to download and install some cracked games, turn out it's kinda fun and interesting, then "accidentally" watched some Youtube videos about web development, html, css and stuff ...</p>
                        <p>
                            And fast-forward to today, as a Front-end developer, I’ve had the privilege of working at an
                            &nbsp;
                            <a className="hoverable" href="https://savemoney.vn/" target="_blank" rel="noreferrer">insurtech start-up</a>,
                            &nbsp;
                            <a className="hoverable" href="https://goalist.co.jp/en/" target="_blank" rel="noreferrer">human resource</a>,
                            &nbsp;
                            <a className="hoverable" href="https://www.nexon.com/main/en" target="_blank" rel="noreferrer">a huge game corporation</a>,
                            &nbsp;
                            and the most recent is a
                            &nbsp;
                            <a className="hoverable" href="https://thuocsi.vn/" target="_blank" rel="noreferrer">health-tech startup</a>.
                        </p>
                        <p>
                            After leaving the last job, I've started my learning journey, spent most of the time to research new knowledge in front and back-end, enroll some courses, and read some books stay
                        </p>

                        <p>
                            Here are a few technologies I’ve been working with recently:
                        </p>

                        <ul className="columns-2 list-disc pl-12">
                            <li>Reactjs - Nextjs</li>
                            <li>Tailwind</li>
                            <li>GSAP</li>
                            <li>Nodejs - Express</li>
                            <li>MongoDB</li>
                            <li>...</li>
                        </ul>
                    </div>

                    <div
                        className="flex justify-center items-center overflow-hidden h-80 w-80 about__image--container"
                    >
                        <img
                            src="/assets/imgs/me_and_the_dawg_custom.png"
                            alt="me and the dawg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
