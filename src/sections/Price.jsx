import Image from "../components/Image/Image";
import Btn from "../components/Btn/Btn";
const Price = () => {
    return <section className="pt-[8.5vw] pb-[10vw]">
        <h2 className="mb-[5vw] font-unbounded font-bold text-[5.5vw] leading-[6vw] text-center uppercase">
            ЧОМУ ТАКА <br />
            <span className="text-transparent bg-clip-text bg-[linear-gradient(105deg,#1DBF73_58.57%,#00743D_85.92%)]">НИЗЬКА ЦІНА?</span>
        </h2>
        <ul className="w-[64.75vw] mx-auto font-codec text-[3.5vw] font-medium mb-[2.5vw]">
            <li className="flex items-start mb-[5vw]">
                <div className="flex-none mr-[2vw]"><Image fileName="price-star.jpg" /></div>
                <span className="pt-[2.25vw]"><span className="text-[#1DBF73]">Я сама розвиваюсь на Fiverr по тій системі якій навчаю</span> і вона працює в інших, бо мої учні мають результати</span>
            </li>
            <li className="flex items-start">
                <div className="flex-none mr-[2vw]"><Image fileName="price-star.jpg" /></div>
                <span className="pt-[2.25vw]"><span className="text-[#1DBF73]">По-чесному я могла б продавати цю інформацію за 1000$,</span> але розумію, що тобі буде легше почати свій шлях на Fiverr з навчанням за 390 грн</span>
            </li>
        </ul>
        <div className="-mb-[23vw]"><Image fileName="dollars.png" className="w-[22.5vw]"/></div>
        <div className="mb-[8.25vw] bg-[linear-gradient(105deg,#1DBF73_58%,#00743D_86%)] pl-[23.5vw] h-[13vw] flex items-center">
            <p className="text-white font-codec text-[3.5vw] leading-[4.5vw] font-semibold uppercase"><span className="rounded-[5px] bg-white text-[#15A964] px-[1.5vw] py-[.5vw]">390 грн</span> це дійсно мало для тих інструментів, які я даю в інтенсиві</p>
        </div>
        <Btn className="text-[4.5vw] h-[19vw] leading-[5.5vw] w-[68.5vw] mx-auto">отримати ДОСТУП ЗА 390 ГРН</Btn>
    </section>
}

export default Price;