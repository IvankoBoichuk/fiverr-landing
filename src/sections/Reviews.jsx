import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../components/Image/Image';

const data = [
    {
        id: 1,
        image: "review-1.jpg",
    },
    {
        id: 2,
        image: "review-2.jpg",
    },
    {
        id: 3,
        image: "review-3.jpg",
    },
    {
        id: 4,
        image: "review-4.jpg",
    },
    {
        id: 5,
        image: "review-5.jpg",
    },
    {
        id: 6,
        image: "review-6.jpg",
    },
];

const Results = () => {
    return <section className="pt-[6vw] pb-[10vw] overflow-hidden">
        <h2 className="font-benzin font-bold text-[5.5vw] leading-[6vw] uppercase text-center mb-[5vw]">
            відгуки на
            <span className="block text-transparent bg-clip-text bg-[linear-gradient(90deg,#1DBF73_0%,#156640_100%)]">минулі продукти</span>
            такого формату
        </h2>
        <Swiper
            className='w-[67.5vw] items-center !overflow-visible'
            spaceBetween={0}
            navigation
            modules={[Navigation]}
            slidesPerView={1}
        >
            {data.map(el => (
                <SwiperSlide>
                    <div className="flex items-center justify-center">
                        <Image fileName={el.image} className="rounded-[12px]"></Image>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
}

export default Results;