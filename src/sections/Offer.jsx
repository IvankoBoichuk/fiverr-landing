import { useState, useEffect } from "react";
import Btn from "../components/Btn/Btn"
import Image from "../components/Image/Image"
import BorderGradient from "../components/BorderGradient/BorderGradient"

const generateRandomPlaces = (min, max) => {
    const adjustedMax = max - 2;
    return Math.floor(Math.random() * (adjustedMax - min + 1)) + min;
};

const getInitialData = () => {
    const max = 50;
    const min = 40;
    const storedStartDate = localStorage.getItem("startDate");
    const storedPlaces = localStorage.getItem("startPlaces");

    if (storedStartDate && storedPlaces) {
        return {
            startDate: new Date(storedStartDate),
            startPlaces: parseInt(storedPlaces, 10),
        };
    }

    const newStartDate = new Date();
    const newStartPlaces = generateRandomPlaces(min, max); // від 20 до 30

    localStorage.setItem("startDate", newStartDate.toISOString());
    localStorage.setItem("startPlaces", newStartPlaces.toString());

    return {
        startDate: newStartDate,
        startPlaces: newStartPlaces,
    };
};

const useCurrentPlaces = () => {
    const [places, setPlaces] = useState(0);

    useEffect(() => {
        const { startDate, startPlaces } = getInitialData();

        const updatePlaces = () => {
            const now = new Date();
            const hoursPassed = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60));
            const current = Math.max(0, startPlaces - hoursPassed);
            setPlaces(current);
        };

        updatePlaces();
        const interval = setInterval(updatePlaces, 1000 * 60); // оновлюй щохвилини

        return () => clearInterval(interval);
    }, []);

    return places;
};

const DateRange = () => {
    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        return `${day}.${month}`;
    };

    const today = new Date();
    const inSixDays = new Date();
    inSixDays.setDate(today.getDate() + 7);

    return <>{formatDate(today)} - {formatDate(inSixDays)}</>;
};

const Offer = () => {
    const places = useCurrentPlaces();

    return <section className="relative pt-[31vw] text-white rounded-b-[7.5vw] overflow-hidden bg-gray-800">
        <Image fileName="offer-bg.jpg" className="absolute size-full inset-0 object-cover" loading="eager" />
        <div className="pl-[10vw] relative">
            <div className="mb-[17.5vw]">
                <div className="flex items-center gap-[2vw] mb-[7vw]">
                    <BorderGradient
                        className="bg-black/45 backdrop-blur-xs"
                        radius="4px"
                        gradient="132deg, #00D270 -15%, rgba(18, 18, 18) 80%">
                        <div className="w-[30.5vw] h-[8.75vw] flex items-center justify-center gap-[1.5vw]">
                            <Image fileName="calendar.png" className="w-[4.75vw]" />
                            <span className="font-codec font-light text-[3.5vw] uppercase pt-[1vw]">8-денний</span>
                        </div>
                    </BorderGradient>
                    <div className="flex flex-col">
                        <span className="font-unbounded text-[3.5vw] uppercase ">онлайн-інтенсив</span>
                        <span className="font-unbounded text-[3.5vw] uppercase text-brand-green relative after:content-[attr(data-text)] after:absolute after:left-0 after:blur-[5.6px]" data-text="по Fiverr">по Fiverr</span>
                    </div>
                </div>
                <h1 className="w-[61.25vw] font-unbounded uppercase font-semibold text-[5vw] leading-[6vw]">
                    Як вийти на міжнародний ринок та почати <span className="text-transparent bg-clip-text bg-[linear-gradient(121deg,#00D16F_32.06%,#156640_83.82%)]" >заробляти 2000$/місяць</span>
                </h1>
                <div className="mt-[2vw] -mb-[2vw]">
                    <span className="font-bad text-[4.25vw] w-[43vw] -rotate-[4deg] block -mb-[8vw]">підходить для спеціалістів у будь-яких нішах</span>
                    <Image fileName="offer-line.png" className="ml-2 w-[33.75vw]" width="135" height="74" />
                </div>
                <BorderGradient
                    className="mb-[3vw] bg-black/45 backdrop-blur-xs w-max"
                    radius="4px"
                    gradient="132deg, #00D270 -15%, rgba(18, 18, 18) 80%">
                    <div className="w-[36.75vw] h-[8.75vw] flex items-center justify-center gap-[1.5vw]">
                        <span className="font-codec font-light text-[3.5vw]">Дата: <DateRange /></span>
                    </div>
                </BorderGradient>
                <BorderGradient
                    className="bg-black/45 backdrop-blur-xs w-max"
                    radius="4px"
                    gradient="132deg, #00D270 -15%, rgba(18, 18, 18) 80%">
                    <div className="w-[36.75vw] h-[8.75vw] flex items-center justify-center gap-[1.5vw]">
                        <span className="font-codec font-light text-[3.5vw]"><span className="text-brand-green">Вільні місця:</span> {places}/50</span>
                    </div>
                </BorderGradient>
            </div>
            <Btn>Отримати доступ</Btn>
            <div className="-mt-[14.25vw] relative z-[5]">
                <BorderGradient className="font-unbounded uppercase text-nowrap w-max backdrop-blur-[2px] bg-[#292929]/28"
                    radius="11px"
                    gradient={"264deg, #00D672 -4%, rgba(0, 0, 0, 0.40) 56%"}>
                    <div className="flex flex-col pt-[2.5vw] pl-[53vw] w-[76.5vw] h-[14.25vw]">
                        <span className="font-light text-[3vw] scale-[0.6667] origin-top-left">зі знижкою:</span>
                        <span className="font-semibold text-[4vw] text-transparent bg-clip-text bg-[linear-gradient(121deg,#00D16F_32.06%,#156640_83.82%)]">390 грн</span>
                        <span className="font-light text-[3vw] text-[#D3D3D3]/45 relative ml-[4.25vw] w-max">1590 грн
                            <div className="w-full absolute left-0 top-1/2 -translate-y-1/2 h-px bg-[#FFFFFF] rotate-1"></div>
                        </span>
                    </div>
                </BorderGradient>
            </div>
        </div>
        <Image width="255" height="477" fileName="kate-offer.png" className="absolute right-0 bottom-[11vw] w-[63.75vw]" loading="eager" />
        <svg className="mx-auto mt-[2.75vw] w-[26vw] relative z-10" xmlns="http://www.w3.org/2000/svg" width="104" height="71" viewBox="0 0 104 71" fill="none">
            <g filter="url(#filter0_f_0_150)">
                <path d="M82 24L55.3448 47.9897C53.4433 49.701 50.5567 49.701 48.6552 47.9897L22 24" stroke="#00F180" strokeWidth="4" strokeLinecap="round" />
                <path opacity="0.67" d="M71.1667 22L55.3178 36.0573C53.4246 37.7364 50.5754 37.7364 48.6822 36.0573L32.8333 22" stroke="#00F180" strokeWidth="4" strokeLinecap="round" />
            </g>
            <path d="M82 24L55.3448 47.9897C53.4433 49.701 50.5567 49.701 48.6552 47.9897L22 24" stroke="#00F180" strokeWidth="4" strokeLinecap="round" />
            <path opacity="0.67" d="M71.1667 22L55.3178 36.0573C53.4246 37.7364 50.5754 37.7364 48.6822 36.0573L32.8333 22" stroke="#00F180" strokeWidth="4" strokeLinecap="round" />
            <defs>
                <filter id="filter0_f_0_150" x="0.899984" y="0.9" width="102.2" height="69.4732" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="9.55" result="effect1_foregroundBlur_0_150" />
                </filter>
            </defs>
        </svg>
        <div className="w-[165vw] h-[55.25vw] bg-[#0F0F0F] blur-2xl absolute -bottom-[20vw] left-0"></div>
    </section>
}

export default Offer;