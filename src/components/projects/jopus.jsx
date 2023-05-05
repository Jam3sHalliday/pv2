export default function Jopus() {
    return (
        <div className="panel bg-project font-futara">
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 space-y-8"
            >
                <div className="grid grid-cols-2 space-x-12">
                    <div className="mt-12">
                        <a href="https://connecter.jopus.net/en/" target="_blank" rel="noreferrer" className="hoverable text-z48">Jopus Connector</a>
                        <p className="mt-4 whitespace-normal indent-4">
                            A recruitment service specialized for foreigners looking for work in Japan.
                        </p>

                        <ul
                            className="list-disc mt-4 ml-8"
                        >
                            <li>HTML</li>
                            <li>SASS</li>
                        </ul>
                    </div>


                    <div className="img justify-self-end relative">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/imgs/jopus-laptop.webp`}
                            style={{
                                transform: 'rotate(-90deg)',
                            }}
                            alt="showcase_"
                        />
                        {/* <img src="/assets/imgs/jopus-phone-border.webp" className="absolute top-0 left-0 w-40" alt="showcase_" /> */}
                    </div>
                </div>

                <div className="grid grid-cols-2 space-x-12">
                    <div className="img justify-self-start relative w-3/4 px-4 bg-black rounded-2xl flex items-center justify-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/imgs/savemoney-logo.png`}
                            alt="logo"
                        />
                    </div>

                    <div className="">
                        <a
                            href="https://insurwin.savemoney.vn/?apiKey=9fd08980-fd4b-11ea-b008-91e85a181009&agentId=76&lang=vi"
                            target="_blank"
                            rel="noreferrer"
                            className="hoverable text-z48"
                        >
                            Insurwin / Insurtech
                        </a>
                        <p>Disbanded</p>
                        <p className="mt-4 whitespace-normal">
                            A platform for selling insurance, in between, connect insurance companies and customer, provide a solution for selling and buying insurance easily.
                        </p>

                        <ul
                            className="list-disc columns-2 mt-4 ml-8"
                        >
                            <li>reactjs - redux</li>
                            <li>graphql - REST API</li>
                            <li>express</li>
                            <li>sequelize</li>
                            <li>postgresql</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <img src="/assets/imgs/jopus-laptop.webp" width={'500px'} /> */}
        </div>
    )
}
