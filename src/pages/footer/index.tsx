const Heart = () => (
    <svg className="w-52 h-52" viewBox="0 0 99 91" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.5897 90C32.2617 82.5795 21.668 75.8216 13.4112 62.0208C9.00167 54.6506 4.91717 47.0127 2.69169 38.6607C-0.54097 26.5288 0.793624 10.3852 12.9895 3.52983C28.1392 -4.9859 49.2008 9.31642 45.2853 26.7698C45.1636 27.3123 43.6421 30.6293 44.4297 28.79C48.6716 18.8834 61.263 9.74938 71.1476 6.48662C86.7877 1.32402 97.7846 9.63273 97.1912 26.0637C96.7624 37.9369 88.4709 51.895 80.1949 60.0373C70.4344 69.6401 57.315 75.4033 50.4294 87.5728" stroke="currentColor" stroke-width="1.83638" stroke-linecap="round"></path>
    </svg>
)

export default function Footer() {
    return (
        <div className="footer min-w-screen min-h-screen font-futara bg-footer relative flex items-center justify-center">
            {/* absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 */}
            <h3 className="text-z48 absolute top-1/4 left-1/4 -translate-x-1/3">Hey there!</h3>
            {/* <div className="absolute bottom-1/2 left-1/4 ">
                <IC />
            </div> */}

            <div
                className="
                    w-1/2 min-h-1/2 p-4 text-z24
                    relative flex items-center justify-center
                    flex-col bg-contact
                "
                style={{
                    borderRadius: '101px 200px 122px 200px',
                }}
            >
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 rotate-12 z-10">
                    <Heart />
                </div>
                <h3>
                    I'm always up for a chat
                </h3>

                <p>
                    <a className="hoverable" href="mailto:quanggtangg@gmail.com">Pop me an email</a>
                    &nbsp;
                    at quanggtangg@gmail.com
                    <br />
                    or give me a shout on social media.
                </p>

                <div className="mt-8">
                    <a className="link_2 hoverable -translate-y-4 bg-black" href="https://www.linkedin.com/in/phuoc-quang/" rel="noreferrer" target="_blank">
                        <img alt="link icon" src={`${process.env.PUBLIC_URL}/assets/svgs/linkedin.svg`} />
                    </a>
                </div>
            </div>

            <p className="text-z14 text-center outtro absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Made with love!
                <br />
                v1.1 - working on new update, coming soon!
            </p>
        </div>
    )
}