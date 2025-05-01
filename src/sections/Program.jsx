import Btn from "../components/Btn/Btn";
import Image from "../components/Image/Image";
import DayCard from "../components/DayCard/DayCard";

const data = [
    {
        day: 1,
        title: "Бонус при покупці сьогодні",
        icon: "gift",
        points: ["Ефір «Як успішно стартонути на Fiverr з нуля!»"]
    },
    {
        day: 2,
        title: "Fiverr – лідогенератор №1 у 2025",
        icon: "star",
        points: [
            "Чому Fiverr, а не інші біржі? Як забути про пошук клієнтів?",
            "Як влаштований Fiverr? Які особливості має?"
        ]
    },
    {
        day: 3,
        title: "Алгоритми та як їх треба юзати",
        icon: "star+gift",
        points: [
            "Які ключові алгоритми Fiverr потрібно знати кожному?",
            "{Додатковий матеріал:} Ефір «Розбір профілів на Fiverr»"
        ]
    },
    {
        day: 4,
        title: "Як продати себе як спеціаліста",
        icon: "star+gift",
        points: [
            "Що таке оптимізація гіга? Як робити опис, теги, відео та обкладинку?",
            "{Додатковий матеріал:} Стаття «Шаблони описів гігів»"
        ]
    },
    {
        day: 5,
        title: "Перше замовлення на Fiverr",
        icon: "star",
        points: [
            "Скільки потрібно часу для того, щоб отримати перше замовлення?",
            "Як отримувати замовлення навіть без відгуків?"
        ]
    },
    {
        day: 6,
        title: "Гарний LTV клієнтів на Fiverr",
        icon: "star",
        points: [
            "Які методи пошуку та утримання постійних клієнтів існують?",
            "Як заробити з одного клієнта заробляти Х10 більше грошей?"
        ]
    },
    {
        day: 7,
        title: "Переговори з реальними клієнтами",
        icon: "star+gift",
        points: [
            "Як вести переговори так, щоб досягати найвигідніших умов?",
            "{Додатковий матеріал:} Чек-лист «Скрипт з переговорів»"
        ]
    },
    {
        day: 8,
        title: "Відповіді на питання",
        icon: "star+gift",
        points: [
            "Ефір, де я розберу усі найпопулярніші питання",
            "{Додатковий матеріал:} Детальні інструкції як рухатися далі"
        ]
    }
];

const Program = () => {
    return <section className="pt-[12.5vw] pb-[10.25vw] text-white relative rounded-b-[30px] overflow-hidden">
        <Image fileName="days-bg.jpg" className="absolute size-full inset-0 object-cover" />
        <div className="relative z-10">
            <h2 className="font-unbounded text-center uppercase font-semibold text-[5.5vw] leading-[6vw] mb-[9.5vw]">
                <span className="block text-transparent bg-clip-text bg-[linear-gradient(164deg,#1DBF73_19%,#156640_105%)]">програма</span>
                онлайн-інтенсиву
            </h2>
            <ul className="w-[84.75vw] mx-auto space-y-[7.25vw] mb-[10.25vw]">
                {data.map(el => (
                    <li key={el.day}>
                        <DayCard
                            day={el.day}
                            title={el.title}
                            icon={el.icon}
                            points={el.points}
                        />
                    </li>
                ))}
            </ul>
            <Btn className="text-[4.5vw] h-[19vw] leading-[5.5vw] w-[68.5vw] mx-auto">отримати ДОСТУП ЗА 390 ГРН</Btn>
        </div>
    </section>
}

export default Program;