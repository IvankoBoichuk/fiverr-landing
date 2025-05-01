import css from "./Btn.module.css";

const Btn = ({children, className = "", ...props}) => {
    return <a href="#" {...props} className={`relative text-white z-10
        uppercase font-unbounded text-center
        w-[51vw] h-[14.25vw] flex items-center text-[3.5vw] ${className}`}>
        <span className={`z-10 rounded-[11px] absolute inset-x-0 size-full top-0 ${css.btn}`}></span>
        <span className={`-z-10 rounded-[11px] absolute inset-x-0 size-full -bottom-[0.75vw] ${css.btnBg}`}></span>
        <svg className="absolute top-0 right-0 -translate-y-1/2 z-20" xmlns="http://www.w3.org/2000/svg" width="102" height="31" viewBox="0 0 102 31" fill="none">
            <g filter="url(#filter0_f_0_136)">
                <ellipse cx="51" cy="15.5" rx="38" ry="2.5" fill="#00FF87" />
            </g>
            <g filter="url(#filter1_f_0_136)">
                <ellipse cx="51" cy="15.5" rx="26" ry="1.5" fill="white" />
            </g>
            <defs>
                <filter id="filter0_f_0_136" x="0.9" y="0.9" width="100.2" height="29.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="6.05" result="effect1_foregroundBlur_0_136" />
                </filter>
                <filter id="filter1_f_0_136" x="15.9" y="4.9" width="70.2" height="21.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="4.55" result="effect1_foregroundBlur_0_136" />
                </filter>
            </defs>
        </svg>
        <svg className="absolute bottom-0 left-0 translate-y-1/2 z-20" xmlns="http://www.w3.org/2000/svg" width="102" height="31" viewBox="0 0 102 31" fill="none">
            <g filter="url(#filter0_f_0_136)">
                <ellipse cx="51" cy="15.5" rx="38" ry="2.5" fill="#00FF87" />
            </g>
            <g filter="url(#filter1_f_0_136)">
                <ellipse cx="51" cy="15.5" rx="26" ry="1.5" fill="white" />
            </g>
            <defs>
                <filter id="filter0_f_0_136" x="0.9" y="0.9" width="100.2" height="29.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="6.05" result="effect1_foregroundBlur_0_136" />
                </filter>
                <filter id="filter1_f_0_136" x="15.9" y="4.9" width="70.2" height="21.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="4.55" result="effect1_foregroundBlur_0_136" />
                </filter>
            </defs>
        </svg>
        <span className="relative z-10 block p-[3.75vw_1vw_3vw_3vw]">{children}</span>
    </a>
}

export default Btn;