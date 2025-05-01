import { useRef, useState } from 'react';

const AccordionItem = ({ ttl, text, isActive, onToggle }) => {
  const contentRef = useRef(null);

  return (
    <div className="p-px rounded-[16px] bg-[linear-gradient(118deg,#1DBF73_22%,rgba(102,102,102,0)_95%)]">
      <div className={`group w-full py-[7vw] px-[5vw] ${isActive ? 'bg-[linear-gradient(121deg,#00D16F_32%,#156640_83%)]' : 'bg-[#1D1D1D]'} rounded-[15px] relative`}>
        <button
          onClick={onToggle}
          className="font-codec text-[3.25vw] pr-[19vw] uppercase font-bold text-start text-balance"
        >
          <span>{ttl}</span>
          <svg className={`absolute top-[5vw] right-[5vw] transition-transform ${isActive ? 'rotate-45' : ''}`} xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
            <circle cx="19.3189" cy="18.8361" r="18.2302" stroke="white" strokeOpacity="0.3" strokeWidth="1.08298" />
            <path d="M11.1063 18.8357H27.5315M19.3189 10.623L19.3189 27.0483" stroke="white" strokeWidth="1.75984" />
          </svg>
        </button>
        <div
          ref={contentRef}
          style={{
            maxHeight: isActive ? contentRef.current.scrollHeight : 0,
            overflow: 'hidden',
            transition: 'max-height 0.4s ease, opacity 0.4s ease',
            opacity: isActive ? 1 : 0,
          }}
          className="font-codec text-[3.25vw] leading-[1.4]"
        >
          <div className="pt-[4.25vw]">{text}</div>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-[72vw] mx-auto space-y-[2vw]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          ttl={item.ttl}
          text={item.text}
          isActive={activeIndex === index}
          onToggle={() => handleToggle(index)} />
      ))}
    </div>
  );
};

export default Accordion;