import Accordion from "../components/Accordion/Accordion";

const items = [
    {
        ttl: "маю мало часу, чи зможу навчатись?",
        text: "Онлайн-курс буде проходити в телеграм-боті. Відео-уроки будуть відкриватися підряд, ти зможеш дивитись їх в будь-який момент"
    },
    {
        ttl: "я вперше на Fiverr, Чи зможу заробити?",
        text: "В курсі я розповіла як зайти на Fiverr з нуля та почати заробляти, а також про найдієвіші методи пошуку клієнтів, без відгуків теж",
    },
    {
        ttl: "Я погано знаю англійську, Це ок?",
        text: "Так, тому що зідзвонюватись з замовниками не потрібно, а в переписці можна користуватись ChatGPT, DeepL та Grammarly",
    },
    {
        ttl: "А замовлення точно будуть?",
        text: "Якщо робиш те, що я показую - так. Fiverr - це не магія, це алгоритми і ти навчишся з ними працювати",
    },
    {
        ttl: "на fiverr шалена конкуренція, ХІБА НІ?",
        text: "Конкуренція існує тільки для тих, хто рухається без стратегії, з поганим оформленням і низькими цінами і ти отримаєш дієву стратегію від мене",
    },
    {
        ttl: "Який бюджет потрібен ДЛЯ РОБОТИ НА FIVERR?",
        text: "На Fiverr не потрібні вкладення! Це не Upwork чи подібні біржі, тут тобі достатньо гарно упакувати профіль і вже матимеш замовлення",
    },
];

const Faq = () => {
    return <section className="bg-black rounded-[30px] overflow-hidden pt-[10.5vw] pb-[10vw] text-white">
        <h2 className="mb-[8vw] font-unbounded font-bold text-[5.5vw] leading-[6vw] text-center uppercase">
            ЗАПИТАННЯ <br />
            <span className="text-transparent bg-clip-text bg-[linear-gradient(105deg,#1DBF73_58.57%,#00743D_85.92%)]">ВІДПОВІДІ</span>
        </h2>
        <Accordion items={items} />
    </section>
}

export default Faq;