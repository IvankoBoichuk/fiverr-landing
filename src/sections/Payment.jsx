import { Link } from "react-router-dom";
import Btn from "../components/Btn/Btn";
import Image from "../components/Image/Image";
const Payment = () => {
    return <section className="py-[6.5vw]">
        <div className="mb-[5vw] flex justify-center">
            <Image fileName="telegram-logo.jpg" className="w-[11.25vw]" />
        </div>
        <h2 className="font-benzin font-bold text-[5.5vw] leading-[6vw] uppercase text-center mb-[5.5vw]">
            є запитання
            <span className="block text-transparent bg-clip-text bg-[linear-gradient(90deg,#1DBF73_0%,#156640_100%)]">або потрібна допомога?</span>
        </h2>
        <Btn tg className="text-[4.5vw] h-[19vw] leading-[5.5vw] w-[68.5vw] mx-auto mb-[20vw]">ЗАДАТИ ПИТАННЯ <br /> В ТГ</Btn>
        <ul className="mb-[5vw] text-center text-[#838383] font-codec font-light space-y-[1.5vw]">
            <li><Link to="/oferta">ПУБЛІЧНИЙ ДОГОВІР (ОФЕРТА)</Link></li>
            <li><Link to="/privacy-policy">ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</Link></li>
        </ul>
        <div className="bg-[linear-gradient(90deg,#1DBF73_0%,#156640_100%)] p-0.5 rounded-[8px] w-max mx-auto">
            <Image fileName="payments.jpg" className="rounded-[6px] w-[80vw]" />
        </div>
    </section>
}

export default Payment;