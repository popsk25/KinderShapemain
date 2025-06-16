import React from "react";
import { Button } from "../../../../components/ui/button";

export const NachatpanelByAnima = ({ onStartClick }: { onStartClick?: () => void }): JSX.Element => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 mt-20 md:mt-32 mb-10 md:mb-16 px-0">
      <div className="w-full h-auto md:h-[223px] bg-gradient-to-r from-[#ed4848] via-[#f9ae33] to-[#34a465] rounded-[24px] md:rounded-[32px] flex flex-col md:flex-row items-center md:items-center justify-between px-0 overflow-visible relative gap-4 md:gap-0">
        <div className="w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-8 gap-4 md:gap-0">
          {/* Content слева */}
          <div className="flex flex-col justify-center z-10 w-full md:w-auto items-center text-center py-6 md:py-0 md:items-start md:text-left md:pl-12">
            <h2 className="font-volkhov text-white text-xl md:text-[32px] leading-7 md:leading-10 font-bold mb-3 md:mb-4 drop-shadow-lg">
              Начни создавать уже прямо сейчас
            </h2>
            <Button className="bg-[#34a465] hover:bg-[#2d8f58] text-white rounded-[272px] w-[120px] md:w-[146px] h-10 md:h-12 shadow-md font-tiltwarp text-base md:text-lg" onClick={onStartClick}>
              Начать
            </Button>
          </div>
          {/* Иллюстрация справа/снизу */}
          <div className="relative h-[120px] w-full md:w-[260px] flex items-end justify-center md:justify-end md:items-end z-10 pb-2 md:pb-20">
            <div className="md:absolute md:right-0 md:bottom-[-40px] md:translate-x-1/4">
              <img
                className="h-[120px] md:h-[320px] w-auto object-contain drop-shadow-xl"
                alt="Start creating"
                src="/rectangle-568.png"
              />
            </div>
          </div>
        </div>
        {/* Декоративный SVG фон */}
        <img
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
          alt="Background"
          src="/rectangle-524.svg"
        />
      </div>
    </section>
  );
};