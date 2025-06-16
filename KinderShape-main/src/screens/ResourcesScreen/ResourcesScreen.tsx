import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { PodvalByAnima } from "../FrameScreen/sections/PodvalByAnima/PodvalByAnima";
import { VishpanelByAnima } from "../FrameScreen/sections/VishpanelByAnima/VishpanelByAnima";
import { useNavigate } from "react-router-dom";

export const ResourcesScreen = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <VishpanelByAnima onAuthClick={() => navigate("/select-role")} />
      {/* Main title section, using image from Figma as background */}
      <section
        className="relative w-[1195px] h-[439px] mx-auto"
        style={{
          backgroundImage: `url('/resourcesban.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Title */}
        <h1 className="absolute top-[194px] left-[158px] font-[Alfa_Slab_One] text-[60px] leading-[1.3689315795898438em] tracking-[-0.07em] text-white z-10 w-[439px] h-[71px]">
          Ресурсы
        </h1>
        {/* Image - fox and rabbit */}
        <img
          className="absolute top-[66px] left-[680px] object-contain w-[293px] h-[379px]"
          alt="Ресурсы Изображение"
          src="/resourses.png"
        />
      </section>

      {/* Resource Cards Section */}
      <section className="w-full flex flex-col items-center px-2 md:px-0 mt-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 w-full max-w-[1200px] mx-auto">
          {/* Card 1: Планы уроков (Frame 22) */}
          <Card className="flex-1 min-w-0 w-full h-[497.86px] border-none shadow-lg rounded-[32px] flex flex-col items-center justify-between bg-[#E5E5E5] mx-auto mb-4 md:mb-0">
            <CardContent className="p-4 flex flex-col items-center justify-between h-full">
              <h3 className="font-andika text-[#E27B07] text-[20px] leading-[1.6126977920532226em] text-center font-normal mb-2">
                Планы уроков
              </h3>
              <p className="font-tiltwarp text-black text-sm md:text-[16px] leading-[1.2619999647140503em] tracking-[-0.06em] text-center font-normal flex-grow mb-4">
                  Просмотрите наши шаблоны и найдите подходящий урок для ваших учеников
              </p>
              <img
                className="w-[262px] h-[244.87px] object-cover rounded-b-[32px] mt-auto"
                alt="Планы уроков"
                src="/planuyrokov.png"
              />
            </CardContent>
          </Card>

          {/* Card 2: Справочник для учеников (Frame 23) */}
          <Card className="flex-1 min-w-0 w-full h-[495.83px] border-none shadow-lg rounded-[32px] flex flex-col items-center justify-between bg-[#E5E5E5] mx-auto mb-4 md:mb-0">
            <CardContent className="p-4 flex flex-col items-center justify-between h-full">
              <h3 className="font-andika text-[#E27B07] text-[20px] leading-[1.611328125em] text-center font-normal mb-2">
                Справочник для учеников
              </h3>
              <p className="font-tiltwarp text-black text-sm md:text-[16px] leading-[1.2619999647140503em] tracking-[-0.06em] text-center font-normal flex-grow mb-4">
                Все основы для учеников, необходимые для начала работы
              </p>
              <img
                className="w-[262px] h-[244.87px] object-cover rounded-b-[32px] mt-auto"
                alt="Справочник для учеников"
                src="/spravoychnik.png"
              />
            </CardContent>
          </Card>

          {/* Card 3: Ресурсы для начала работы (Frame 24) */}
          <Card className="flex-1 col-span-1 md:col-span-2 w-full h-[272px] border-none shadow-lg rounded-[32px] flex flex-row items-center justify-start bg-[#E5E5E5] mx-auto mb-4 md:mb-0">
            <CardContent className="p-0 flex items-center w-full h-full">
              <img
                className="w-[256px] h-[242px] object-cover rounded-l-[32px] flex-shrink-0"
                alt="Ресурсы для начала работы"
                src="/resoursecdlyanachala.png"
              />
              <div className="flex flex-col items-center p-4 flex-grow justify-center">
                <h3 className="font-tiltwarp text-[#E27B07] text-[20px] leading-[1.2619999885559081em] text-center font-normal mb-2">
                  Ресурсы для начала работы
                </h3>
                <p className="font-tiltwarp text-black text-[16px] leading-[1.2619999647140503em] tracking-[-0.06em] text-center font-normal">
                  Вы впервые пользуетесь KinderShape?<br/>Приготовьтесь внедрить и использовать нашу платформу
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 4: Идеи для занятий (Frame 21) */}
          <Card className="flex-1 col-span-1 md:col-span-2 w-full h-[262px] border-none shadow-lg rounded-[32px] flex flex-row items-center justify-start bg-[#E5E5E5] mx-auto mb-4 md:mb-0">
            <CardContent className="p-0 flex items-center w-full h-full">
              <div className="flex flex-col items-center p-4 flex-grow justify-center">
                <h3 className="font-andika text-[#E27B07] text-[20px] leading-[1.611328125em] text-center font-normal mb-2">
                  Идеи<br/>для занятий
                </h3>
                <p className="font-tiltwarp text-black text-[16px] leading-[1.2619999647140503em] tracking-[-0.06em] text-center font-normal">
                  Найдите для себя разное<br/>в наших шаблонах и галерии
                </p>
              </div>
              <img
                className="w-[256px] h-[242px] object-cover rounded-r-[32px] flex-shrink-0"
                alt="Идеи для занятий"
                src="/idei dlya zanyati.png"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <PodvalByAnima />
    </div>
  );
}; 