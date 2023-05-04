import "./styles.css";

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
                        <p>My journey started back in December 2019, when I was a Networking management's freshman at Cao Thang College. My first "IT" experiment was tried to download and install some cracked games, turn out it's kinda fun and interesting copy-paste those .exe and .dll files even though I don't know what it is, then after "accidentally" watched some Youtube videos about web development, html, css and stuff, sound fun so I tried it, "and the rest, is history" xD</p>
                        <p>
                            Fast-forward to today, as a Front-end developer, I’ve had the privilege of working at an
                            &nbsp;
                            <a className="hoverable" href="https://savemoney.vn/" target="_blank" rel="noreferrer">insurtech start-up</a>,
                            &nbsp;
                            <a className="hoverable" href="https://goalist.co.jp/en/" target="_blank" rel="noreferrer">human resource company</a>,
                            &nbsp;
                            <a className="hoverable" href="https://www.nexon.com/main/en" target="_blank" rel="noreferrer">a huge game corporation</a>,
                            &nbsp;
                            and the most recent is a
                            &nbsp;
                            <a className="hoverable" href="https://thuocsi.vn/" target="_blank" rel="noreferrer">health-tech startup</a>.
                        </p>
                        <p>
                            After leaving the last job, I've started my learning journey, spent most of the time to research new knowledge in front and back-end, enroll some courses, read some books, calisthenic and few more things ... yay!
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
                            src={`${process.env.PUBLIC_URL}/assets/imgs/me_and_the_dawg_custom.png`}
                            alt="me and the dawg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
