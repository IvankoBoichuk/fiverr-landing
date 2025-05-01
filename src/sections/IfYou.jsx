import Btn from "../components/Btn/Btn"
import Image from "../components/Image/Image"
import BorderGradient from "../components/BorderGradient/BorderGradient"
const data = [
    {
        "name": "На початку",
        "text": "Хочеш найти стабільний потік клієнтів на закордонному ринку, почати заробляти в $$$",
    },
    {
        "name": "в наймі",
        "text": "Хочеш спробувати працювати сам на себе, отримувати додатковий дохід та з часом піти з агенції/компанії",
    },
    {
        "name": "Вже в темі",
        "text": "Мав спроби розвитку на Fiverr, але не отримав бажані результати і хочеш їх покращити",
    },
    {
        "name": "Хочеш рости",
        "text": "Маєш постійних замовників, але хочеш розширяти лідген, формувати команду і вийти з операційки",
    },
]
const IfYou = () => {
    return <section className="relative pt-[7.75vw] px-[13vw] pb-[8.25vw] text-white rounded-[7.5vw] overflow-hidden">
        <Image fileName="if-you-bg.jpg" className="absolute size-full inset-0 object-cover" />
        <div className="relative">
            <h2 className="font-unbounded uppercase font-semibold text-[5.5vw] leading-[6vw] mb-[8.25vw] text-center">
                Онлайн-інтенсив <span className="text-transparent bg-clip-text bg-[linear-gradient(121deg,#00D16F_32.06%,#156640_83.82%)]">для тебе, якщо ти:</span>
            </h2>
            <ul className="flex flex-col space-y-[6vw] mb-[10vw]">
                {data.map((el, index) => (
                    <li key={index} className="flex justify-center text-center">
                        <BorderGradient
                            gradient="130deg, #1DBF73 21%, rgba(45, 45, 45, 0.68) 90%"
                            radius="8px"
                            className="w-[62.5vw] bg-[#191919]/61 backdrop-blur-[5px]">
                            <div className="flex flex-col items-center pt-[3vw]">
                                <span className="rounded-lg bg-[linear-gradient(90deg,#1DBF73_0%,#00743D_100%)] h-[6.25vw] w-[37.75vw] text-white font-unbounded text-[3.5vw] leading-[6vw] mb-[3vw] uppercase">{el.name}</span>
                                <p className="font-codec font-light text-[3.13vw] text-balance pl-[3.13vw] pr-[3.38vw] pb-[2.5vw]">{el.text}</p>
                            </div>
                        </BorderGradient>
                    </li>
                ))}
            </ul>
            <Btn className="text-[4.5vw] h-[19vw] leading-[5.5vw] w-[68.5vw] mx-auto">отримати ДОСТУП ЗА 390 ГРН</Btn>
        </div>
        <Image fileName="verified.png" className="absolute top-[24vw] left-[14vw] w-[10.25vw]" />
    </section>
}

export default IfYou;