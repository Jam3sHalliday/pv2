export default function BuymedProject() {
    return (
        <div className="panel bg-project buymed font-futara">
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 md:5/6"
            >
                <div className="grid grid-cols-2 space-x-12 md:space-x-0">
                    <div className="mt-12">
                        <h3 className="text-z48">Circa</h3>
                        <p>In development</p>
                        <p className="mt-8 md:mt-4 whitespace-normal">
                            Taking advantage of available resource of
                            &nbsp;
                            <a className="hoverable" href="https://thuocsi.vn/" target="_blank" rel="noreferrer">
                                thuocsi.vn
                            </a>
                            &nbsp;
                            like warehouses, logistics, we built an e-commerce web application of medicine, provide to end-user a solution for buying medicine easily without "sold-out" problem, quickly deliver product to user, currently applying in Circa HCMC.
                        </p>

                        <ul
                            className="list-disc columns-2 mt-4 ml-8 md:ml-4"
                        >
                            <li>nextjs</li>
                            <li>typescript</li>
                            <li>tailwindcss</li>
                            <li>material-ui</li>
                            <li>redux-toolkit</li>
                            <li>...</li>
                        </ul>
                    </div>


                    <div className="img flex justify-center">
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/circa_mobile.webp`} className="w-3/4 xl:w-1/2 md:w-full text-center" alt="showcase_" />
                    </div>
                </div>
            </div>
        </div>
    )
}