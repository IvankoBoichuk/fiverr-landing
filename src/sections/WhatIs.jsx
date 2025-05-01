
const data = [
    {
        "name": "{не ти шукаєш замовників,} а вони тебе знаходять",
        "notice": "профіль - твоє джерело замовлень",
    },
    {
        "name": "{не розсилки,} де не зрозуміло людині актуально чи ні",
        "notice": "я ніколи не робила розсилки",
    },
    {
        "name": "{не тікток та рілс,} де наплив замовників нестабільний",
        "notice": "як і самі перегляди на відео",
    },
    {
        "name": "{не таргет,} де потрібно вкладати гроші в рекламу",
        "notice": "потрібен бюджет, якого може не бути",
    },
];
const wrapInSpan = (text) => {
    const match = text.match(/\{(.*?)\}/);
    if (!match) return text;

    const before = text.slice(0, match.index);
    const inside = match[1];
    const after = text.slice((match.index ?? 0) + match[0].length);

    return (
        <>
            {before}
            <span className="text-brand-green">{inside}</span>
            {after}
        </>
    );
};
const WhatIs = () => {
    // TODO: Codec Pro Medium Add
    return <section className="pl-[10vw] pt-[8.75vw] pr-[6.25vw] pb-[6.25vw]">
        <h2 className="font-unbounded uppercase font-semibold text-[5vw] leading-[5.5vw] mb-[4.5vw]">
            Що таке Fiverr?
        </h2>
        <ul className="flex flex-col gap-[2vw]">
            {data.map((el, index) => (
                <li key={index} className="flex items-center gap-[3.75vw]">
                    <div className="flex-none w-[55.25vw] h-[15.5vw] flex items-center bg-[#21252D] px-[3.5vw] rounded-[10px]">
                        <div className="font-unbounded font-bold text-white text-[3.25vw] uppercase">{wrapInSpan(el.name)}</div>
                    </div>
                    <div className="font-codec font-medium text-[3.25vw] text-[#545454]/85">* {el.notice}</div>
                </li>
            ))}
        </ul>
    </section>
}

export default WhatIs;