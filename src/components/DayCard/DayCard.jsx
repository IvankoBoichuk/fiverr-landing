import Image from '../Image/Image';

const wrapInSpan = (text) => {
    const match = text.match(/\{(.*?)\}/);
    if (!match) return text;

    const before = text.slice(0, match.index);
    const inside = match[1];
    const after = text.slice((match.index ?? 0) + match[0].length);

    return (
        <>
            {before}
            <span className="text-brand-green font-semibold">{inside}</span>
            {after}
        </>
    );
};

const DayCard = ({ day, title, icon, points }) => {
    const renderIcon = (type) => {
        if (type === 'star') return <div className="flex-none"><Image fileName="star-green.png" /></div>;
        if (type === 'gift') return <div className="flex-none"><Image fileName="icon-gift.png" /></div>;
        return null;
    };

    const icons = icon.split('+');

    return (
        <div className="relative w-[84.75vw]">
            <img src="/images/days-bg.svg" width={339} height={139} className="w-[84.75vw] h-[34.75vw] absolute top-0 left-0" alt="#" />
            <div className="relative">
                <div className="flex flex-col items-center font-unbounded font-bold text-[3.32vw] pt-[2vw] pb-[1vw]">
                    <span className="text-transparent bg-clip-text bg-[linear-gradient(164deg,#1DBF73_19%,#156640_104%)]">{day}</span>
                    <span className="text-transparent bg-clip-text bg-[linear-gradient(164deg,#1DBF73_19%,#156640_104%)]">день</span>
                </div>
                <div className="pl-[6.5vw]">
                    {
                        day == 1 ? <div className="flex items-center justify-between pr-[5.25vw] h-[24.75vw]">
                            <div className="flex items-center gap-[2vw]">
                                <div className="flex-none w-[6vw]">
                                    <Image fileName="gift-big.png"></Image>
                                </div>
                                <h3 className="font-codec font-medium text-[3.75vw] w-[20vw]">{title}</h3>
                            </div>
                            <svg width="2" height="47" viewBox="0 0 2 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="1.09302" height="47" rx="0.546512" fill="white" />
                            </svg>
                            <ul className="w-[30.5vw]">
                                {points.map((point, idx) => (
                                    <li key={idx} className="font-bad">{point}</li>
                                ))}
                            </ul>
                        </div> : <div className="flex items-center justify-between pr-[5.25vw] h-[24.75vw]">
                            <h3 className="font-codec font-medium text-[3.75vw] w-[26vw] text-balance">{title}</h3>
                            <ul className="w-[39.5vw] text-[3vw] font-codec font-light space-y-[2.5vw]">
                                {points.map((point, idx) => (
                                    <li key={idx} className='flex gap-[1.75vw]'>
                                        {renderIcon(icons[idx > 0 && icons.length > 1 ? 1 : 0])}
                                        <span>{wrapInSpan(point)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default DayCard;
