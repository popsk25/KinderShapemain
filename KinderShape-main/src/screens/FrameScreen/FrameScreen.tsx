import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { AlexpanByAnima } from "./sections/AlexpanByAnima/AlexpanByAnima";
import { FrameByAnima } from "./sections/FrameByAnima";
import { MakspanByAnima } from "./sections/MakspanByAnima";
import { MayapanByAnima } from "./sections/MayapanByAnima";
import { NachatpanelByAnima } from "./sections/NachatpanelByAnima/NachatpanelByAnima";
import { NatashpanByAnima } from "./sections/NatashpanByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima";
import { PanelByAnima } from "./sections/PanelByAnima";
import { PodgotpanelByAnima } from "./sections/PodgotpanelByAnima";
import { PodvalByAnima } from "./sections/PodvalByAnima/PodvalByAnima";
import { VishpanelByAnima } from "./sections/VishpanelByAnima";
import { VozmpanelByAnima } from "./sections/VozmpanelByAnima";
import { RoleSelectByAnima } from "./sections/RoleSelectByAnima";
import { StudentLoginByAnima } from "./sections/StudentLoginByAnima";
import { TeacherDashboardByAnima } from "./sections/TeacherDashboardByAnima";
import { StudentDashboardByAnima } from "./sections/StudentDashboardByAnima";
import { SupportByAnima } from "./sections/SupportByAnima";
import { ResourcesScreen } from "../ResourcesScreen/ResourcesScreen";
import { MainLayout } from "./MainLayout";

export const FrameScreen = (): JSX.Element => {
  const benefitCards = [
    {
      id: 1,
      title: "Креативность",
      description: "Ученики становятся творцами, создавая и исследуя свои 3D-миры",
      imageSrc: "/--1.svg",
      imageAlt: "Креативность",
    },
    {
      id: 2,
      title: "Универсальность",
      description: "Единая площадка как для учеников,так и для учителей",
      imageSrc: "/rectangle-507.svg",
      imageAlt: "Универсальность",
    },
    {
      id: 3,
      title: "Обучение",
      description: "Учащиеся обучаются востребыванным навыкам в современном мире",
      imageSrc: "/rectangle-508.svg",
      imageAlt: "Обучение",
    },
    {
      id: 4,
      title: "Вовлечение",
      description: "Учащиеся обучаются востребыванным навыкам в современном мире",
      imageSrc: "/rectangle-491.svg",
      imageAlt: "Вовлечение",
    },
  ];

  const featureCards = [
    {
      id: 1,
      title: "Игры",
      description: "Твори и играй в свою собственную игру",
      imageSrc: "/rectangle-514.png",
      imageAlt: "Игры",
    },
    {
      id: 2,
      title: "Моделирование",
      description: "Изучай и делай свои произведения",
      imageSrc: "/rectangle-515.png",
      imageAlt: "Моделирование",
    },
    {
      id: 3,
      title: "Свой мир",
      description: "Включай воображение и воплоти свои идеи в реальность",
      imageSrc: "/rectangle-516.png",
      imageAlt: "Свой мир",
    },
  ];

  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-white flex flex-row justify-center w-full">
            <div className="bg-white w-full max-w-[1440px] mx-auto px-4 md:px-8 relative">
              {/* Header Section */}
              <VishpanelByAnima onAuthClick={() => navigate("/select-role")} />
              <OverlapWrapperByAnima onStartClick={() => navigate("/select-role")} />
              <section className="flex flex-col md:flex-row justify-center gap-4 md:gap-16 mt-[-32px] z-30 relative w-full px-2">
                <div className="flex items-center gap-2 bg-white rounded-[32px] px-4 md:px-6 py-3 shadow-md w-full md:w-auto justify-center">
                  <img src="/user-plus.svg" alt="Icon" className="w-6 h-6" />
                  <span className="font-[Alfa_Slab_One] text-[#505050] text-sm md:text-base text-center">Присоединяйся к обучению со своим учителем</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-[32px] px-4 md:px-6 py-3 shadow-md w-full md:w-auto justify-center">
                  <img src="/package.svg" alt="Icon" className="w-6 h-6" />
                  <span className="font-[Alfa_Slab_One] text-[#505050] text-sm md:text-base text-center">Создавай свои проекты и делись ними</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-[32px] px-4 md:px-6 py-3 shadow-md w-full md:w-auto justify-center">
                  <img src="/chrome.svg" alt="Icon" className="w-6 h-6" />
                  <span className="font-[Alfa_Slab_One] text-[#505050] text-sm md:text-base text-center">Создавай прямо в браузере</span>
                </div>
              </section>

              {/* Benefits Section */}
              <section className="w-full flex flex-col items-center px-2 md:px-0 mt-20 md:mt-32 mb-16 md:mb-24">
                <h2 className="text-[#49a8cf] text-[28px] md:text-[40px] font-andika font-normal text-center mb-16 md:mb-24 tracking-tight">
                  Почему учителя и ученики выбирают нашу платформу
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 w-full max-w-[1200px] mx-auto">
                  {benefitCards.map((card) => (
                    <Card
                      key={card.id}
                      className="flex-1 min-w-0 w-full h-[340px] md:h-[436px] bg-[url('/rectangle-511.svg')] bg-cover bg-no-repeat border-none flex flex-col items-center justify-start shadow-lg rounded-[32px] mx-auto mb-4 md:mb-0"
                    >
                      <CardContent className="p-0 flex flex-col items-center">
                        <img
                          className="w-full md:w-[264px] h-[180px] md:h-[264px] object-contain rounded-t-[32px]"
                          alt={card.imageAlt}
                          src={card.imageSrc}
                        />
                        <h3 className="mt-4 text-center font-tiltwarp text-[#e17b06] text-lg md:text-[28px] leading-7 md:leading-8 font-normal">
                          {card.title}
                        </h3>
                        <p className="mt-2 px-2 md:px-4 font-volkhov text-[#505050] text-sm md:text-[18px] leading-5 md:leading-6 text-center font-normal">
                          {card.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Learn More Section */}
              <VozmpanelByAnima />

              {/* Examples Section */}
              <FrameByAnima />
              <section className="w-full flex flex-col items-center px-2 md:px-0 mt-8">
                <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 w-full max-w-[1100px] mx-auto">
                  {featureCards.map((card) => (
                    <Card key={card.id} className="flex-1 min-w-0 w-full h-[250px] md:h-[370px] border-none shadow-lg rounded-[32px] flex flex-col items-center justify-start bg-white mx-auto mb-4 md:mb-0">
                      <CardContent className="p-0 flex flex-col items-center">
                        <img
                          className="w-full md:w-[315px] h-[140px] md:h-[220px] object-cover rounded-t-[32px]"
                          alt={card.imageAlt}
                          src={card.imageSrc}
                        />
                        <h3 className="mt-4 font-tiltwarp text-[#038ac1] text-lg md:text-[28px] leading-7 md:leading-8 text-center font-normal">
                          {card.title}
                        </h3>
                        <p className="mt-2 font-volkhov text-[#505050] text-sm md:text-[18px] leading-5 md:leading-6 text-center px-2 md:px-4 font-normal">
                          {card.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Start Creating Section */}
              <NachatpanelByAnima onStartClick={() => navigate("/select-role")} />

              {/* Preparing Children Section */}
              <PodgotpanelByAnima />

              {/* Teachers Section */}
              <section className="w-full mt-10 md:mt-16 mb-10 md:mb-16 flex flex-col items-center px-2">
                <h2 className="font-andika text-[#ed4848] text-[28px] md:text-[40px] text-center mb-8 md:mb-12">
                  Присоединяйся к нашим учителям
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-12 gap-y-8 md:gap-y-10 max-w-[1100px] mx-auto w-full">
                  <AlexpanByAnima />
                  <MayapanByAnima />
                  <NatashpanByAnima />
                  <MakspanByAnima />
                </div>
              </section>

              {/* Footer */}
              <PodvalByAnima />
            </div>
          </div>
        }
      />
      <Route
        path="/select-role"
        element={
          <RoleSelectByAnima />
        }
      />
      <Route path="/student-login" element={<StudentLoginByAnima />} />
      <Route path="/teacher-dashboard" element={<TeacherDashboardByAnima />} />
      <Route path="/student-dashboard" element={<StudentDashboardByAnima />} />
      <Route
        path="/resources"
        element={
          <MainLayout>
            <ResourcesScreen />
          </MainLayout>
        }
      />
      <Route
        path="/support"
        element={
          <MainLayout>
            <SupportByAnima />
          </MainLayout>
        }
      />
    </Routes>
  );
};