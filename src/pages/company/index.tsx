import { useLayoutEffect } from "react";
import { gsap } from "gsap";

import './styles.css';
import CompanyTemplate from "../../components/companies/template";

type HTMLLiElementCustom = HTMLLIElement & { index?: number };

const ArrowCurve = () => (
    <svg className="w-32 h-32" viewBox="0 0 107 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.447937 18.1614C9.81014 31.5352 18.4347 42.3598 31.519 52.0087C40.0175 58.2759 54.5547 65.2946 64.1291 57.0482C74.8617 47.8042 84.2643 34.1413 91.7659 22.1683C95.8416 15.6632 100.326 9.79988 103.994 3.06629C104.777 1.62775 106.117 0.590713 103.454 1.84721C99.6476 3.64332 95.7206 5.00081 91.7126 6.32044C84.0852 8.83174 82.4146 9.9082 92.4987 7.40962C94.8989 6.81489 101.851 3.59526 104.567 4.38527C107.097 5.12145 106.361 12.9525 106.422 14.9305C106.9 30.442 95.1386 15.7417 88.7647 11.1467" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
    </svg>
)

const techs = {
    buymed: ['nextjs', 'typescript', 'tailwindcss', 'material-ui', 'redux-toolkit'],
    goalist: ['reactjs', 'typescript', 'google app script', 'go hugo'],
    savemoney: ['javascript', 'typescript', 'reactjs', 'redux', 'express', 'sequelize', 'graphql', 'microservice', 'REST API', 'postgresql'
    ]
};
const companies = ['Buymed', 'Goalist', 'Savemoney'];

const exp = [
    {
        name: 'Buymed',
        time: 'Jun 2022 - Apr 2023',
        url: 'https://thuocsi.vn/',
        descriptions: [
            'As a first front-end engineer of the team, I was responsible for set-up from scratch an easy-to-work, scalable and maintainable source-base.',
            'Consistent coding-style and conventions for teammate by using Typescript and a bunch of lint tools.',
            'Collaborated with team members, designer and other product teams to implement new feature developments and to ensure thoughtful and consistent user experiences.',
            'Researching and implementing new libraries',
            'Fix bugs and create new one!',
            '...'
        ],
        techs: techs.buymed,
        role: 'Front-end developer'
    },
    {
        name: 'Goalist',
        time: 'Jun 2022 - Apr 2023',
        url: 'https://goalist.co.jp/en/',
        descriptions: [
            'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript',
            'Assisted the senior developers by supporting design and coding and contributed to fixing bugs in the existing websites.',
            'Integrating AWS S3 API from Google App Script for storing and processing data.',
            'Receive requirements from client, manage contents on cms.',
        ],
        techs: techs.goalist,
        role: 'Front-end developer'
    },
    {
        name: 'Savemoney',
        time: 'May 2020 - June 2021',
        url: 'https://savemoney.vn/',
        descriptions: [
            'Participating in daily scrum meetings, sprint planning, and bug fixes.',
            'Worked alongside teammate and team leader to ',
            'Performed code review, work close to team members to ensure consistency to code standards.',
            'Hands-on experienced as full-stack developer',
            'Developing the CRUD for Rest API calls, to fetch, and store data.',
            'Creating tables, indexes, migrating, export and import of data.',
            '...'
        ],
        techs: techs.savemoney,
        role: 'Full stack developer'
    },
]

const Company = () => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            let targets: NodeListOf<HTMLLiElementCustom> = document.querySelectorAll(".article-head");
            let articles: NodeListOf<HTMLElement> = document.querySelectorAll(".article");
            let activeTab = 0;
            let old = 0;
            let heights: number[] = [];
            let animation: any;

            const doCoolStuff = (e: any, index: number) => {
                // check if clicked target is new and if the timeline is currently active
                if (index !== activeTab) {
                    //if there's an animation in-progress, jump to the end immediately so there aren't weird overlaps. 
                    if (animation && animation.isActive()) {
                        animation.progress(1);
                    }
                    animation = gsap.timeline({ defaults: { duration: 0.4 } });
                    old = activeTab;
                    activeTab = index;
                    // animate bubble slider to clicked target
                    animation.to(".slider", { x: targets[activeTab].offsetLeft, width: targets[activeTab].offsetWidth });
                    // change text color on old and new tab targets
                    animation.to(targets[old], { color: "#1bb1a5", ease: "none" }, 0);
                    animation.to(targets[activeTab], { color: "#fff", ease: "none" }, 0);
                    // slide current article down out of view and then set it to starting position at top
                    animation.to(articles[old], { y: heights[old], ease: "back.in" }, 0);
                    animation.set(articles[old], { y: -heights[old] });
                    // resize article block to accommodate new content
                    animation.to(".article-block", { height: heights[activeTab] });
                    // slide in new article
                    animation.to(articles[activeTab], { duration: 1, y: 0 }, "-=0.25");
                }
            }


            for (let i = 0; i < targets.length; i++) {
                targets[i].index = i;
                heights.push(articles[i]?.offsetHeight + 50); // get height of each article
                gsap.set(articles[i], { top: 0, y: -1000 }); // push all articles up out of view
                targets[i].addEventListener("click", (e) => doCoolStuff(e, i));
            }

            // set initial article and position bubble slider on first tab 
            gsap.set(articles[0], { y: 0 });
            gsap.set(".slider", { x: targets[0].offsetLeft, width: targets[0].offsetWidth });
            gsap.set(targets[0], { color: "#fff" });
            gsap.set(".article-block", { height: heights[0] });
        });

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <div className="bg-company min-w-screen min-h-screen relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex space-x-8">
                    <h2 className="font-snowman 2xl:text-z48 font-semibold inline-block lg:text-z24 -ml-8">Where I've worked</h2>

                    <div className="scale-x-[-1] rotate-180 absolute -top-4 right-0">
                        <ArrowCurve />
                    </div>
                </div>

                <div className="mt-8">
                    <div className="">
                        <ul
                            className="
                                relative
                                flex flex-row
                                rounded-full
                                bg-z
                                font-futara text-z24
                            "
                        >
                            <div className="slider absolute top-0 left-0 bg-[#1bb1a5] rounded-[100px] h-full"></div>
                            {
                                companies.map((name) => (
                                    <li key={name} className="z-50 article-head text-center hoverable py-4 text-[#1bb1a5] p-3 flex-auto">
                                        <button
                                            className="cursor-none border-none outline-none"
                                        >
                                            {name}
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div
                        className="font-futara article-block"
                        style={{
                            boxShadow: '0 10px 12px -12px rgba(8, 72, 73, .4) inset',
                        }}
                    >
                        {exp.map((xp) => (
                            <div className='article'>
                                <CompanyTemplate {...xp} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Company;
