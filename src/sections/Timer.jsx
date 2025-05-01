const Timer = () => {
    return <div id="timer" className="mx-auto mt-[2vw] w-[88.5vw] sticky top-5 z-10 py-[3vw] pl-[4.75vw] pr-[6.75vw] text-[#FB8B28] border border-[#FB8B28] bg-[#111111] rounded-full flex items-center">
        <button className="mr-[3vw]" id="timer-pause">
            <svg className="size-[10.75vw]" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="17.9637" cy="17.9637" r="17.9637" fill="#713F12"></circle>
                <rect x="12.5202" y="11.1593" width="4.53629" height="13.6089" rx="0.907258" fill="#FB8B28"></rect>
                <rect x="18.8709" y="11.1593" width="4.53629" height="13.6089" rx="0.907258" fill="#FB8B28"></rect>
            </svg>
        </button>
        <button className="mr-[3vw] hidden" id="timer-play">
            <svg className="size-[10.75vw]" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="17.9637" cy="17.9637" r="17.9637" fill="#713F12"></circle>
                <rect x="12.5202" y="11.1593" width="4.53629" height="13.6089" rx="0.907258" fill="#FB8B28"></rect>
                <rect x="18.8709" y="11.1593" width="4.53629" height="13.6089" rx="0.907258" fill="#FB8B28"></rect>
            </svg>
        </button>
        <button className="mr-[2vw]" id="timer-remove">
            <svg className="size-[10.75vw]" xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                <circle cx="18.6903" cy="17.9637" r="17.9637" fill="#5C5C5F"></circle>
                <rect x="24.0924" y="10.3716" width="2.17742" height="18.5081" rx="1.08871" transform="rotate(42.1431 24.0924 10.3716)" fill="white"></rect>
                <rect x="24.0924" y="10.3716" width="2.17742" height="18.5081" rx="1.08871" transform="rotate(42.1431 24.0924 10.3716)" fill="white"></rect>
                <rect x="24.0924" y="10.3716" width="2.17742" height="18.5081" rx="1.08871" transform="rotate(42.1431 24.0924 10.3716)" fill="white"></rect>
                <rect width="2.17742" height="18.5081" rx="1.08871" transform="matrix(-0.741472 0.670984 0.670984 0.741472 13.2882 10.3716)" fill="white"></rect>
                <rect width="2.17742" height="18.5081" rx="1.08871" transform="matrix(-0.741472 0.670984 0.670984 0.741472 13.2882 10.3716)" fill="white"></rect>
                <rect width="2.17742" height="18.5081" rx="1.08871" transform="matrix(-0.741472 0.670984 0.670984 0.741472 13.2882 10.3716)" fill="white"></rect>
            </svg>
        </button>
        <p className="text-[3.25vw] font-semibold mr-[1.5vw] self-end pb-[2.5vw] whitespace-nowrap">До кінця знижки</p>
        <div className="text-[5.75vw] font-extrabold"><span id="hours">10</span>:<span id="minutes">44</span>:<span id="seconds">20</span></div>
    </div>
}

export default Timer;