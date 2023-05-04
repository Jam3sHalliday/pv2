interface CompanyTemplateProps {
    techs: string[];
    time: string;
    role: string;
    name: string;
    url: string;
    descriptions: string[];
}

export default function CompanyTemplate({
    name,
    role,
    techs,
    time,
    url,
    descriptions,
}: CompanyTemplateProps) {
    return (
        <>
            <a href={url} target="_blank" rel="noreferrer" className="hoverable text-z24 font-medium">
                {name}
            </a>

            <p className="text-z16">
                {role}
                &#183;
                {time}
            </p>

            <div className="mt-4 text-z16">
                <p>
                    Description
                </p>
                <ul className="list-disc ml-6">
                    {
                        descriptions.map((c, i) => <li key={i}>{c}</li>)
                    }
                </ul>

                <p className="mt-4">Technologies:</p>
                <ul className={`${techs.length > 5 ? 'columns-4' : 'columns-2'} text-z14 list-disc ml-6`}>
                    {
                        techs.map(i => <li key={i}>{i}</li>)
                    }
                </ul>
            </div>
        </>
    )
}