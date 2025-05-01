import { useEffect, useRef, useState } from 'react';

const formatTime = (val) => String(val).padStart(2, '0');

const Timer = () => {
    const initialTime = 60 * 60 * 2; // 2 години в секундах (наприклад)
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isSticky, setIsSticky] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    // запускаємо або зупиняємо таймер
    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
            }, 1000);
        }

        return () => clearInterval(intervalRef.current);
    }, [isPaused]);

    const handlePause = () => {
        setIsPaused(true);
    };

    const handleResume = () => {
        setIsPaused(false);
    };

    const handleReset = () => {
        setIsSticky(false);
    };

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return (
        <div id="timer" className={`mx-auto mt-[2vw] w-max font-codec ${isSticky ? "sticky" : ""} top-5 z-50 py-[3vw] pl-[4.75vw] pr-[6.75vw] text-[#FB8B28] border border-[#FB8B28] bg-[#111111] rounded-full flex items-center`}>
            {!isPaused ? (
                <button onClick={handlePause} className="mr-[3vw]" id="timer-pause">
                    {/* pause icon */}
                    <svg className="size-[10.75vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
                        <circle cx="18" cy="18" r="18" fill="#713F12" />
                        <rect x="11" y="10" width="4" height="16" rx="1" fill="#FB8B28" />
                        <rect x="20" y="10" width="4" height="16" rx="1" fill="#FB8B28" />
                    </svg>
                </button>
            ) : (
                <button onClick={handleResume} className="mr-[3vw]" id="timer-play">
                    {/* play icon */}
                    <svg className="size-[10.75vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none">
                        <circle cx="22" cy="22" r="21.5" fill="#713F12" />
                        <path d="M32 21.5C32.7 21.9 32.7 23 32 23.4L17 32C16.3 32.4 15.5 31.9 15.5 31V13C15.5 12.1 16.3 11.6 17 12L32 21.5Z" fill="#FB8B28" />
                    </svg>
                </button>
            )}

            {isSticky && 
                <button onClick={handleReset} className="mr-[2vw]" id="timer-remove">
                    {/* remove icon */}
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
            }

            <p className="text-[3.25vw] font-light mr-[1.5vw] self-end pb-[2.5vw] whitespace-nowrap">До кінця знижки</p>
            <div className="text-[6vw] font-bold w-[25vw] text-center">
                <span id="hours">{formatTime(hours)}</span>:
                <span id="minutes">{formatTime(minutes)}</span>:
                <span id="seconds">{formatTime(seconds)}</span>
            </div>
        </div>
    );
};

export default Timer;