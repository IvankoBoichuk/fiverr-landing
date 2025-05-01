import Image from "../components/Image/Image";

const Bell = () => {
    return <section className="bg-white rounded-[20px] -my-[20px] relative z-10 pb-[8.75vw]">
        <div className="flex justify-center py-[4vw]"><Image fileName="bell.png" /></div>
        <div style={{
            background: "linear-gradient(124deg, #1DBF73 -5.02%, #156640 101.25%)",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        }} className="mx-auto rounded-[10px] px-[6vw] font-unbounded font-bold text-[3.5vw] leading-[5vw] text-white uppercase text-center w-[81.25vw] h-[24.25vw] flex items-center justify-center">моя місія — дати інструмент фінансової свободи через систему роботи на Fiverr</div>
    </section>
}
export default Bell;