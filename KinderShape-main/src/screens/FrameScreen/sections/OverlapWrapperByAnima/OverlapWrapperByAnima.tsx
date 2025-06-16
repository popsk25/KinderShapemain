import React from "react";
import { Button } from "../../../../components/ui/button";

export const OverlapWrapperByAnima = ({ onStartClick }: { onStartClick?: () => void }): JSX.Element => {
  return (
    <section className="relative w-full max-w-[1120px] mx-auto px-4 md:px-8">
      <div className="relative w-full h-[320px] md:h-[420px] max-w-[1120px] mx-auto overflow-hidden bg-[#fffcf7] border-none flex items-center justify-start">
        {/* Фоновые изображения */}
        <img
          className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-[1121px] h-full object-cover z-0 select-none pointer-events-none"
          alt="KinderShape platform background"
          src="/rectangle-498.png"
        />
        <img
          className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-[1118px] h-full object-cover z-10 select-none pointer-events-none"
          alt="KinderShape platform interface"
          src="/---------------.png"
        />
        {/* Текст и кнопка */}
        <div className="relative z-20 flex flex-col items-start justify-center h-full w-full pl-0 md:pl-12 pt-[20px] md:pt-[40px] gap-4 text-left">
          <h1 className="text-[28px] md:text-[48px] leading-8 md:leading-[60px] tracking-[-2px] md:tracking-[-4.2px] text-white font-normal font-[Alfa_Slab_One] mb-2 drop-shadow-lg text-left">
            Мечтай. Создавай. Изменяй
          </h1>
          <p className="text-[16px] md:text-[26px] leading-5 md:leading-[32px] tracking-[-1px] md:tracking-[-1.82px] text-white font-normal font-volkhov mb-4 drop-shadow text-left">
            и многое другое на платформе <span className="font-bold">KinderShape</span>
          </p>
          <Button
            className="relative bg-[#e17b06] border-none p-0 shadow-none hover:bg-[#f9ae33] focus:bg-[#f9ae33] rounded-full w-[150px] md:w-[180px] h-[40px] md:h-[52px] text-base md:text-xl font-tiltwarp"
            onClick={onStartClick}
          >
            Начать
          </Button>
        </div>
      </div>
    </section>
  );
};
