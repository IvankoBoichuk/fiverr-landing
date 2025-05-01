import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../components/Image/Image';

const data = [
    {
        id: 1,
        image: "result-1.jpg",
        text: "результат<br/>Через {6 місяців}<br/>ПІсля СТАРТУ",
        sphere: "ретуш фото"
    },
    {
        id: 2,
        image: "result-2.jpg",
        text: "результат<br/>Через {4 місяці}<br/>ПІсля СТАРТУ",
        sphere: "лого"
    },
    {
        id: 3,
        image: "result-3.jpg",
        text: "результат<br/>Через {3 місяці}<br/>ПІсля СТАРТУ",
        sphere: "ілюстрації"
    },
    {
        id: 4,
        image: "result-4.jpg",
        text: "результат<br/>Через {2 місяці}<br/>ПІсля СТАРТУ",
        sphere: "моушн"
    },
];

const parseText = (text) => {
    const parts = text.split(/<br\s*\/?>/i).map((part, idx) => {
        const match = part.match(/\{(.*?)\}/);
        if (match) {
            const before = part.slice(0, match.index);
            const inside = match[1];
            const after = part.slice((match.index ?? 0) + match[0].length);

            return (
                <div key={idx}>
                    {before}
                    <span className="text-[#393939]">{inside}</span>
                    {after}
                </div>
            );
        }
        return <div key={idx}>{part}</div>;
    });

    return parts;
};

const Results = () => {
    return <section className="pt-[6vw] pb-[10vw] overflow-hidden">
        <h2 className="font-benzin font-bold text-[5.5vw] leading-[6vw] uppercase text-center mb-[5vw]">
            <span className="block text-transparent bg-clip-text bg-[linear-gradient(90deg,#1DBF73_0%,#156640_100%)]">результати</span>
            моїх учнів
        </h2>
        <Swiper
            className='w-[73.75vw] items-center !overflow-visible'
            spaceBetween={0}
            navigation
            modules={[Navigation]}
            slidesPerView={1}
        >
            {data.map(el => (
                <SwiperSlide>
                    <div className="flex items-center bg-[#00C26B] rounded-[12px] p-[1.5vw]">
                        <Image fileName={el.image} className="rounded-[10px]"></Image>
                        <div className="pl-[4vw] font-codec">
                            <div className="font-bold text-[3.45vw] text-white uppercase">{parseText(el.text)}</div>
                            <span className="text-[3vw] scale-[.833] font-medium text-[#444]">Ніша: {el.sphere}</span>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
}

export default Results;