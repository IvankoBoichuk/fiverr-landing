import Image from "../components/Image/Image";
const Gift = () => {
    return <section className="pl-[10vw] pt-[4.5vw]">
        <div className="w-[11.25vw] h-[8vw] mb-[2.2vw] rounded-md bg-brand-black flex items-center justify-center">
            <Image fileName="icon-gift.png" className="w-[4.5vw]" />
        </div>
        <h2 className="font-unbounded uppercase font-semibold text-[5vw] leading-[5.5vw]">
            Бонус для тих, хто доєднається <span className="block text-transparent bg-clip-text bg-[linear-gradient(90deg,#1DBF73_0%,#156640_100%)]" >сьогодні:</span>
        </h2>
        <span className="-rotate-1 rounded-xl h-[8vw] w-[67.5vw] flex justify-center items-center font-bad text-[3.5vw] text-white
            bg-[linear-gradient(124deg,#1DBF73_-5.02%,#156640_101.25%)]
            shadow-[0px_3.31px_3.31px_0px_rgba(0,0,0,.25)]
        ">
            ефір «Як успішно стартонути на Fiverr з нуля?»
        </span>
        <div className="relative w-[81vw] h-[36.75vw] flex items-end">
            <svg className="absolute left-[8.5vw] top-[8vw] w-[40.25vw]" xmlns="http://www.w3.org/2000/svg" width="161" height="102" viewBox="0 0 161 102" fill="none">
                <path opacity="0.5" d="M0.999949 101.001C52.9999 98.0002 52.5002 -11.0026 13.5001 28.9984C-25.5 68.9994 71 99.0381 74.5 47.5379C77.9999 -3.96233 117.5 -3.96536 160 7.53789" stroke="#3D3D3D" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
            <Image fileName="fiver-logo.jpg" className="rounded-md w-[9.25vw]" />
            <div className="absolute left-[37.5vw] -top-[1.5vw] -rotate-[4.657deg] flex-none overflow-hidden rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,.25)]">
                <Image fileName="kate-cover.jpg" className="w-[43.75vw] h-[25.5vw]"/>
            </div>
        </div>
    </section>
}

export default Gift;