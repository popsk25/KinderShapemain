import React from "react";
import { Button } from "../../../../components/ui/button";

export const VozmpanelByAnima = (): JSX.Element => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 py-6 md:py-12 px-0">
      <div className="relative w-full">
        <div className="w-full h-auto md:h-[300px] bg-gradient-to-r from-[#3baf11] to-[#d2c215] flex flex-col md:flex-row items-center justify-between px-0 rounded-[24px] md:rounded-none overflow-visible relative">
          <div className="w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-8">
            {/* Левая часть: текст и кнопка */}
            <div className="flex flex-col justify-center h-full py-8 md:py-16 max-w-full md:max-w-[486px] w-full text-center items-center md:items-start md:text-left md:pl-12">
              <h2 className="font-andika text-white text-[22px] md:text-[32px] leading-7 md:leading-10 mb-6 md:mb-8">
                Узнай больше о <span className="font-volkhov">KinderShape</span>
                <br className="hidden md:block" />и окунись в мир возможностей
              </h2>
              <Button className="bg-[#f9ae33] hover:bg-[#f9ae33]/90 text-white rounded-[272px] h-10 md:h-14 w-[160px] md:w-[226px] text-base md:text-xl">
                О платформе
              </Button>
            </div>
            {/* Правая часть: только 3D-иллюстрация */}
            <div className="relative w-full md:w-auto h-[220px] md:h-[300px] mt-4 md:mt-0">
              <img
                className="w-[180px] h-[220px] md:w-[320px] md:h-[360px] object-contain z-10"
                alt="KinderShape 3D island"
                src="/rectangle-532.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};