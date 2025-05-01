import Btn from "../components/Btn/Btn"
import Image from "../components/Image/Image"
import BorderGradient from "../components/BorderGradient/BorderGradient"
const Offer = () => {
    return <section className="relative pt-[31vw] text-white rounded-b-[7.5vw] overflow-hidden">
        <Image fileName="offer-bg.jpg" className="absolute size-full inset-0 object-cover" />
        <Image fileName="kate-offer.png" className="absolute right-0 bottom-[11vw]" />
        <div className="pl-[10vw] relative">
            <div className="flex items-center gap-[2vw] mb-[7vw]">
                <BorderGradient
                    className=""
                    gradient="132deg, #00D270 -15.78%, rgba(18, 18, 18) 80.68%)">
                    <div className="w-[30.5vw] h-[8.75vw] bg-black/45 backdrop-blur-xs flex items-center justify-center gap-[1.5vw]">
                        <Image fileName="calendar.png" />
                        <span className="font-codec font-light">8-денний</span>
                    </div>
                </BorderGradient>
                <div className="flex flex-col">
                    <span className="font-unbounded text-[3.5vw] uppercase leading-none ">онлайн-інтенсив</span>
                    <span className="font-unbounded text-[3.5vw] uppercase leading-none text-brand-green relative
          after:content-[attr(data-text)] after:absolute after:left-0 after:blur-[5.6px]
          " data-text="по Fiverr">по Fiverr</span>
                </div>
            </div>
            <h1 className="w-[61.25vw] font-unbounded uppercase font-semibold text-[5vw] leading-[6vw]">
                Як вийти на міжнародний ринок та почати <span className="text-transparent bg-clip-text bg-[linear-gradient(121deg,#00D16F_32.06%,#156640_83.82%)]" >заробляти 2000$/місяць</span>
            </h1>
            <div className="mt-[2vw] -mb-[2vw]">
                <span className="font-bad text-[4.25vw] leading-none w-[43vw] -rotate-[4deg] block -mb-[8vw]">підходить для спеціалістів у будь-яких нішах</span>
                <Image fileName="offer-line.png" className="ml-2" />
            </div>
            <BorderGradient
                className="mb-[3vw]"
                gradient="132deg, #00D270 -15.78%, rgba(18, 18, 18) 80.68%)">
                <div className="w-[36.75vw] h-[8.75vw] bg-black/45 backdrop-blur-xs flex items-center justify-center gap-[1.5vw]">
                    <span className="font-codec font-light text-[3.5vw]">Дата: 01.06-08.06</span>
                </div>
            </BorderGradient>
            <BorderGradient
                className="mb-[17.5vw]"
                gradient="132deg, #00D270 -15.78%, rgba(18, 18, 18) 80.68%)">
                <div className="w-[36.75vw] h-[8.75vw] bg-black/45 backdrop-blur-xs flex items-center justify-center gap-[1.5vw]">
                    <span className="font-codec font-light text-[3.5vw]"><span className="text-brand-green">Вільні місця:</span> 22/30</span>
                </div>
            </BorderGradient>
            <Btn>Отримати доступ</Btn>
            <div className="-mt-[14.25vw] relative z-[5]">
                <BorderGradient className="w-[76.5vw] h-[14.25vw] pl-[53vw] font-unbounded pt-[2.5vw] flex flex-col uppercase leading-none text-nowrap"
                    gradient={"264deg, #00D672 -4.39%, rgba(0, 0, 0, 0.40) 56.66%)"}>
                    <span className="font-light text-[3vw] scale-[0.6667] origin-top-left">зі знижкою:</span>
                    <span className="text-[4vw] font-semibold text-transparent bg-clip-text bg-[linear-gradient(121deg,#00D16F_32.06%,#156640_83.82%)]">390 грн</span>
                    <span className="text-[2vw] text-[#D3D3D3]/45">1590 грн
                        <svg className="-mt-[2vw]" xmlns="http://www.w3.org/2000/svg" width="66" height="2" viewBox="0 0 66 2" fill="none">
                            <path d="M1 1.5L65 0.5" stroke="white" strokeLinecap="round" />
                        </svg>
                    </span>
                </BorderGradient>
            </div>
        </div>
        <svg className="mx-auto mt-[2.75vw] relative z-10" xmlns="http://www.w3.org/2000/svg" width="104" height="71" viewBox="0 0 104 71" fill="none">
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