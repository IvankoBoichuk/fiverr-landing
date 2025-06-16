import Btn from "../components/Btn/Btn"
import Image from "../components/Image/Image"
import BorderGradient from "../components/BorderGradient/BorderGradient"
const data = [
    {
        "name": "ЧІТКЕ РОЗУМІННЯ",
        "text": "як вийти на Fiverr \n і почати отримувати стабільних клієнтів",
    },
    {
        "name": "ПОКРОКОВИЙ ПЛАН",
        "text": "по якому можна реалізуватись з будь-якою нішею",
    },
    {
        "name": "ГОТОВУ СИСТЕМУ",
        "text": "яка дозволяє постійно зростати в доході за \n рахунок Fiverr",
    },
    {
        "name": "Просту стратегію",
        "text": "яка самостійно генеруватиме тобі клєнтів",
    },
]
const IfYou = () => {
    return <section className="relative pt-[7.25vw] px-[13vw] pb-[12.25vw] text-white rounded-[7.5vw] overflow-hidden">
        <Image fileName="benefits-bg.jpg" className="absolute size-full inset-0 object-cover" />
        <div className="relative">
            <h2 className="font-unbounded uppercase font-semibold text-[5.5vw] leading-[6vw] mb-[8.25vw] text-center">
                Що ти матимеш через <span className="text-transparent bg-clip-text bg-[linear-gradient(121deg,#00D16F_32.06%,#156640_83.82%)]">8 днів?</span>
            </h2>
            <ul className="flex flex-col space-y-[6vw] mb-[10vw]">
                {data.map((el, index) => (
                    <li key={index} className="flex justify-center text-center">
                        <BorderGradient
                            radius="8px"
                            gradient="130deg, #1DBF73 21%, rgba(45, 45, 45, 0.68) 90%"
                            className="w-[62.5vw] bg-[#191919]/61 backdrop-blur-[5px]">
                            <div className="pt-[3vw] flex flex-col items-center">
                                <span className="rounded-lg bg-[linear-gradient(90deg,#1DBF73_0%,#00743D_100%)] h-[6.25vw] leading-[6.25vw] w-[45.75vw] uppercase text-white font-unbounded font-bold text-[3vw] mb-[3vw]">{el.name}</span>
                                <p className="font-codec font-light text-[3.13vw] text-balance pl-[3.13vw] pr-[3.38vw] pb-[2.5vw]">{el.text}</p>
                            </div>
                        </BorderGradient>
                    </li>
                ))}
            </ul>
            <Btn className="text-[4.5vw] h-[19vw] leading-[5.5vw] w-[68.5vw] mx-auto">отримати ДОСТУП ЗА 390 ГРН</Btn>
        </div>
        <Image fileName="verified.png" className="absolute h-[10vw] blur-[1px] top-[24vw] left-[14vw]" />
        <Image fileName="benefits-check.png" className="absolute h-[25.75vw] bottom-[57vw] left-0" />
        <Image fileName="benefits-check-bottom.png" className="absolute w-[19.5vw] bottom-0 right-0" />
    </section>
}

export default IfYou;