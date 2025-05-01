import Image from "../components/Image/Image"
const Speaker = () => {
    return <section className="pt-[6.5vw]">
        <h2 className="h-[16vw] w-[80.5vw] text-[5.5vw] leading-[6vw] mx-auto text-center font-benzin font-bold uppercase ">спікер курсу - <span className="block bg-[linear-gradient(90deg,#1DBF73_0%,#156640_100%)] bg-clip-text text-transparent">Катя Михайлова</span></h2>
        <Image fileName="kate-speaker.jpg" className="m-auto mb-[6.25vw] w-[84.5vw]" />
        <ul className="space-y-[7.25vw] mb-[9.25vw]">
            <li className="flex flex-col items-center text-center font-codec font-medium text-[3.75vw]">
                <Image fileName="star-1.jpg" className="w-[4.5vw] h-[3.5vw] mb-[2.25vw]" />
                <span className="mb-[1.25vw]"><span className="text-[#1DBF73]">№1 ЕКСПЕРТ ПО FIVERR,</span> зробила на <br />
                    Fiverr Х000 замовлень та <br />
                    маю 800+ відгуків </span>
                <div className="from-[#373737] to-[#878787] bg-gradient-to-t rounded-[6px] p-px w-max overflow-hidden" style={{
                    boxShadow: "0px 4.376px 4.376px 0px rgba(0, 0, 0, 0.25)"
                }}>
                    <img
                        src={`/images/reviews.jpg`}
                        srcSet={`/images/reviews.jpg 1x, /images/reviews@2x.jpg 2x`}
                        alt="reviews"
                        className="w-[23.75vw] rounded-[5px] h-auto"
                    />
                </div>
            </li>
            <li className="flex flex-col items-center text-center font-codec font-medium text-[3.75vw]">
                <Image fileName="star-1.jpg" className="w-[4.5vw] h-[3.5vw] mb-[2.25vw]" />
                <span className="mb-[1.25vw]">
                    <span className="text-[#1DBF73]">СТВОРИЛА КОМАНДУ,</span>
                    з 17 дизайнерів <br />
                    і всі мають замовлення <br />
                    завдяки Fiverr </span>
                <div className="from-[#373737] to-[#878787] bg-gradient-to-t rounded-[6px] p-px w-max overflow-hidden" style={{
                    boxShadow: "0px 4.376px 4.376px 0px rgba(0, 0, 0, 0.25)"
                }}>
                    <img
                        src={`/images/design-team.jpg`}
                        srcSet={`/images/design-team.jpg 1x, /images/design-team@2x.jpg 2x`}
                        alt="design-team"
                        className="w-[28.25vw] rounded-[5px] h-auto"
                    />
                </div>
            </li>
            <li className="flex flex-col items-center text-center font-codec font-medium text-[3.75vw]">
                <Image fileName="star-1.jpg" className="w-[4.5vw] h-[3.5vw] mb-[2.25vw]" />
                <span className="mb-[1.25vw]">
                    <span className="text-[#1DBF73]">НА ПЛАТФОРМІ З 2022,</span>
                    за <br /> цей час провела 50+ <br /> консультацій по Fiverr</span>
            </li>
        </ul>

        <div className="bg-[#1DBF73] pt-[2.5vw] pl-[37.5vw] h-[14.5vw] w-full -mb-[51vw] ">
            <span className="block w-[50.75vw] font-codec font-medium text-[3.75vw] text-white">
                ЗАРОБИЛА НА TESLA 3 ЗА 22.000$,  суто з Fiverr на дизайні креативів
            </span>
        </div>

        <Image fileName="kate-tesla.png" className="w-full" />
    </section>
}

export default Speaker;