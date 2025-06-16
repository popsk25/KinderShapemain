import {
  AlertCircleIcon,
  MessageSquareIcon,
  MonitorIcon,
  SunIcon,
} from "lucide-react";
import React from "react";

export const PodgotpanelByAnima = (): JSX.Element => {
  // Данные для карточек
  const skillCards = [
    {
      title: "Цифровая грамотность",
      description:
        "Моделирование и другие цифровые навыки, необходимые для будущей карьеры",
      icon: <MonitorIcon className="w-8 h-8 text-[#49a8cf]" />,
      style: "left-2 top-8 lg:left-[calc(50%-420px)] lg:top-[120px]",
    },
    {
      title: "Критическое мышление",
      description: "Навыки наблюдения, анализа и поиска решений проблем",
      icon: <AlertCircleIcon className="w-8 h-8 text-[#49a8cf]" />,
      style: "right-2 top-8 lg:right-[calc(50%-420px)] lg:top-[120px]",
    },
    {
      title: "Коммуникативность",
      description:
        "Культурное и социальное взаимопонимание, эмпатия и коммуникативные навыки",
      icon: <MessageSquareIcon className="w-8 h-8 text-[#49a8cf]" />,
      style: "left-2 bottom-8 lg:left-[calc(50%-420px)] lg:bottom-[120px]",
    },
    {
      title: "Креативность",
      description: "Нестандартное мышление и разработка уникальных идей",
      icon: <SunIcon className="w-8 h-8 text-[#49a8cf]" />,
      style: "right-2 bottom-8 lg:right-[calc(50%-420px)] lg:bottom-[120px]",
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-center my-16 px-2">
      <h2 className="text-[#ed4848] text-[32px] md:text-[40px] text-center font-normal font-andika mb-8 md:mb-12">
        Подготовка детей к будущему
      </h2>
      <div className="relative w-full max-w-screen-2xl h-[600px] md:h-[700px] flex items-center justify-center mx-auto">
        {/* Круглый фон */}
        <div className="absolute w-[340px] h-[340px] md:w-[520px] md:h-[520px] bg-[#e6e6e6] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
        {/* Центральное изображение */}
        <img
          className="absolute w-[180px] h-[180px] md:w-[320px] md:h-[320px] object-cover rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border-4 md:border-8 border-white shadow-lg"
          alt="Child portrait"
          src="/hd-crop-786462fb330835662293aae156b68a8f-67fb98fd0-no-bg-preview.png"
        />
        {/* Карточки по кругу, адаптивно */}
        {skillCards.map((card, idx) => (
          <div
            key={idx}
            className={`absolute w-[220px] h-[110px] md:w-[340px] md:h-[110px] bg-white rounded-[24px] shadow-lg flex items-center px-4 py-2 md:px-8 md:py-4 ${card.style} z-20 overflow-hidden`}
            style={{wordBreak: 'break-word'}}
          >
            <div className="mr-3 md:mr-6 flex-shrink-0">{card.icon}</div>
            <div className="min-w-0">
              <div className="font-volkhov text-[#49a8cf] text-base md:text-lg font-bold mb-1 truncate">{card.title}</div>
              <div className="font-volkhov text-[#505050] text-xs md:text-sm leading-tight break-words">{card.description}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Мобильная версия: карточки под кругом */}
      <div className="flex flex-col gap-4 w-full mt-8 md:hidden">
        {skillCards.map((card, idx) => (
          <div key={idx} className="w-full bg-white rounded-[24px] shadow-lg flex items-center px-4 py-4 overflow-hidden">
            <div className="mr-3 flex-shrink-0">{card.icon}</div>
            <div className="min-w-0">
              <div className="font-volkhov text-[#49a8cf] text-base font-bold mb-1 truncate">{card.title}</div>
              <div className="font-volkhov text-[#505050] text-xs leading-tight break-words">{card.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
