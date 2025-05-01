import Image from "../components/Image/Image"

const Item = ({children, className}) => {
    return <div className={`h-[17vw] w-max rounded-[5px] flex items-center font-codec text-white text-[3.25vw] font-light relative ${className}`} style={{
        background: "linear-gradient(96deg, #00AAEF 18.04%, #006189 104.49%)"
    }}>{children}</div>
}

const Procces = () => {
    return <section className="pt-[7vw] pb-[10.75vw]">
        <h2 className="font-benzin font-bold text-[5.5vw] leading-[6vw] uppercase text-center mb-[14.5vw]">
            <span className="block text-transparent bg-clip-text bg-[linear-gradient(90deg,#1DBF73_0%,#156640_100%)]">як проходить</span>
            онлайн-ІНТЕНСИВ?
        </h2>
        <div className="relative w-[78.75vw] mx-auto">
            <Item className="mb-[25.25vw] ml-auto">
                <div className="w-[56.75vw] pl-[12.75vw]">
                    Після оплати ти потрапиш <br />
                    у телеграм-бот з <br />
                    <span className="italic font-semibold"> довічним доступом </span> <br />
                    до інтенсиву
                </div>
                <div className="absolute -top-[7vw] -left-[25vw] w-[50.25vw]">
                    <Image fileName="procces-1.png" className="w-[50.25vw]" />
                </div>
            </Item>
            <Item className="mb-[20vw]">
                <div className="w-[65vw] pl-[8.5vw] pr-[12.75vw]">
                    Щодня будуть з'являтися
                    <span className="font-semibold"> 20-хвилинні уроки </span> з
                    практичною інформацією
                </div>
                <div className="absolute -top-[15vw] left-[34.25vw] w-[55vw]">
                    <Image fileName="procces-2.png" className="w-[55vw]" />
                </div>
            </Item>
            <Item className="mb-[26vw] ml-auto">
                <div className="w-[68vw] pl-[13.75vw] pr-[1.25vw]">
                    Періодично отримуватимеш
                    додаткові матеріали,
                    які доповнюватимуть навчання
                </div>
                <div className="absolute w-[57vw] -left-[21vw] -top-[9vw]">
                    <Image fileName="procces-3.png" className="w-[57vw]" />
                </div>
            </Item>
            <Item className="">
                <div className="w-[65vw] pl-[5vw] pr-[7.25vw]">
                    Q/A-сесію по завершенню
                    інтенсиву на якій зможете задати
                    всі турбуючи запитання
                </div>
                <div className="absolute w-[52vw] -top-[22vw] left-[37vw]">
                    <Image fileName="procces-4.png" className="w-[52vw]" />
                </div>
            </Item>
            <img src="/images/procces-ants.svg" alt="" className="w-[77.5vw] absolute top-[17vw] right-0 -z-10" />
        </div>
    </section>
}

export default Procces;