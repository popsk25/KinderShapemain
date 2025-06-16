import React from "react";

export const SupportByAnima = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full mx-auto">
      {/* Main title section, similar to ResourcesScreen banner */}
      <section
        className="relative w-[1195px] h-[439px] mx-auto"
        style={{
          backgroundImage: `url('/support.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '0px 0px 289.5px 300px'
        }}
      >
        {/* Title */}
        <h1 className="absolute top-[194px] left-[158px] font-[Alfa_Slab_One] text-[60px] leading-[1.3689315795898438em] tracking-[-0.07em] text-white z-10 w-[439px] h-[71px]">
          Поддержка
        </h1>
      </section>

      {/* Container for the three sections */}
      <div className="flex flex-wrap justify-center gap-x-[36px] gap-y-[24px] mt-[66px] w-full max-w-[1200px] px-4 pb-16">
        {/* Section: Нужна помощь, чтобы начать работу? (Left box) */}
        <div className="w-[517px] h-[209px] bg-[#E5E4E4] rounded-[25px] flex flex-col items-center justify-start p-4 text-center">
          {/* Title */}
          <p className="font-[Andika] font-normal text-[20px] leading-[1.611328125em] tracking-[-0.06em] text-black">
            Нужна помощь, чтобы начать работу?
          </p>
          {/* Description */}
          <p className="font-[Tilt_Warp] font-normal text-[16px] leading-[1.2619999647140503em] tracking-[-0.06em] text-black mt-2">
            Начните здесь с этих бесплатных ресурсов для начинающих.
          </p>
          {/* Codesandbox Icon */}
          <img
            className="w-[72px] h-[72px] object-contain mt-4"
            alt="Иконка Codesandbox"
            src="/Codesandbox.png"
          />
          {/* Button */}
          <div className="w-[266px] h-[68px] bg-[#E27B07] rounded-full flex items-center justify-center mt-4 px-4 overflow-hidden">
            <p className="font-[Tilt_Warp] text-[20px] text-white whitespace-nowrap">
              Ресурсы
            </p>
          </div>
        </div>

        {/* Section: Проверил свою аппарутуру? (Right box) */}
        <div className="w-[577px] h-[213px] bg-[#E5E4E4] rounded-[25px] flex flex-col items-center justify-start p-4 text-center">
          {/* Title */}
          <p className="font-[Andika] font-normal text-[20px] leading-[1.611328125em] tracking-[-0.06em] text-black">
            Проверил свою аппарутуру?
          </p>
          {/* Description */}
          <p className="font-[Tilt_Warp] font-normal text-[16px] leading-[1.2619999647140503em] tracking-[-0.06em] text-black mt-2">
            Убедитесь, что у вас есть правильные настройки для использования
          </p>
          {/* Monitor Icon */}
          <img
            className="w-[72px] h-[72px] object-contain mt-4"
            alt="Иконка монитора"
            src="/Monitor.png"
          />
          {/* Button */}
          <div className="w-[331px] h-[68px] bg-[#E27B07] rounded-full flex items-center justify-center mt-4 px-4 overflow-hidden">
            <p className="font-[Tilt_Warp] text-[20px] text-white whitespace-nowrap">
              Рекомендуемые характеристики
            </p>
          </div>
        </div>

        {/* Section: Остались вопросы? (Bottom box) */}
        <div className="w-[588px] h-[209px] bg-[#E5E4E4] rounded-[25px] flex flex-col items-center justify-start p-4 text-center">
          {/* Title */}
          <p className="font-[Andika] font-normal text-[20px] leading-[1.611328125em] tracking-[-0.06em] text-black">
            Остались вопросы?
          </p>
          {/* Description */}
          <p className="font-[Tilt_Warp] font-normal text-[16px] leading-[1.2619999647140503em] tracking-[-0.06em] text-black mt-2">
            Напиши нам,решим все твои проблемы и ответим на вопросы
          </p>
          {/* Send Icon */}
          <img
            className="w-[72px] h-[72px] object-contain mt-4"
            alt="Иконка отправки"
            src="/Send.png"
          />
          {/* Button */}
          <div className="w-[241px] h-[68px] bg-[#E27B07] rounded-full flex items-center justify-center mt-4 px-4 overflow-hidden">
            <p className="font-[Tilt_Warp] text-[20px] text-white whitespace-nowrap">
              Поддержка
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 