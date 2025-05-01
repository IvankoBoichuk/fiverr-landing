import Btn from "../components/Btn/Btn";
import Image from "../components/Image/Image";

const Refund = () => {
    return <section className="pt-[10vw] pb-[9vw] rounded-[30px] overflow-hidden relative text-white">
        <Image fileName="refund-bg.png" className="absolute inset-0 size-full" />
        <Image fileName="refund-top.png" className="absolute top-0 left-0" />
        <Image fileName="refund-bottom.png" className="absolute bottom-0 right-0" />
        <div className="relative">
            <h2 className="mb-[5vw] font-unbounded font-bold text-[5.5vw] leading-[6vw] text-center uppercase">
                я гарантую тобі <br />
                результат, <span className="text-transparent bg-clip-text bg-[linear-gradient(105deg,#1DBF73_58.57%,#00743D_85.92%)]">або <br /> поверну гроші:</span>
            </h2>
            <p className="mb-[7.5vw] text-[3.5vw] font-codec italic font-bold text-center">
                Якщо ти застосуєш все, про що я кажу в <br /> уроках і не окупиш цей онлайн-інтенсив <br /> мінімум в 25 разів, <span className="text-transparent bg-clip-text bg-[linear-gradient(105deg,#1DBF73_58.57%,#00743D_85.92%)]">я поверну тобі <br /> гроші за нього</span>
            </p>
            <div className="mb-[6vw] text-[3.5vw] font-semibold text-center pt-[1.75vw] pb-[1.5vw] uppercase font-codec bg-[linear-gradient(105deg,#1DBF73_58.57%,#00743D_85.92%)]">
                <p>Ти можеш звернутись про <br /> повернення у будь-який момент <br /> протягом 90 днів після інтенсиву</p>
            </div>
            <p className="mb-[6.25vw] text-[3.5vw] font-light text-center font-codec">Така гарантія — це прояв моєї <br /> впевненості <span className="text-transparent bg-clip-text bg-[linear-gradient(105deg,#1DBF73_58.57%,#00743D_85.92%)]">у якості свого продукту)</span></p>
            <Btn className="text-[4.5vw] h-[19vw] leading-[5.5vw] w-[68.5vw] mx-auto">отримати ДОСТУП ЗА 390 ГРН</Btn>
        </div>
    </section>;
}

export default Refund;