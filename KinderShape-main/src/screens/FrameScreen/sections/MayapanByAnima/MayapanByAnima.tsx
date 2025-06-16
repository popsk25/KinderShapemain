import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#229ED9" />
    <path d="M17.5 7.5L15.5 17.5C15.5 17.5 15.25 18 14.75 18C14.5 18 14.25 17.75 14 17.5L11.5 15.5L10.5 16.5C10.5 16.5 10.25 16.75 10 16.75C9.75 16.75 9.75 16.5 9.75 16.5L9.5 13.5L15 8.5C15.25 8.25 15 8 14.75 8.25L8.5 13L5.5 12C5.5 12 5 11.75 5 11.25C5 10.75 5.5 10.5 5.5 10.5L17 7.25C17 7.25 17.5 7 17.5 7.5Z" fill="white" />
  </svg>
);

export const MayapanByAnima = (): JSX.Element => {
  return (
    <Card className="border-none shadow-lg rounded-2xl w-full max-w-[520px] min-h-[260px] flex flex-col justify-between mx-auto font-volkhov">
      <CardContent className="p-4 flex flex-col md:flex-row gap-4 md:gap-6 h-full">
        <div className="flex-shrink-0 flex justify-center items-start">
          <img
            className="w-[120px] h-[120px] md:w-[190px] md:h-48 object-cover rounded-xl"
            alt="Майя Фёдорова"
            src="/rectangle-528.png"
          />
        </div>
        <div className="flex flex-col justify-between min-w-0 w-full">
          <div>
            <div className="flex items-center mb-2 md:mb-4 gap-2">
              <TelegramIcon />
              <h3 className="text-black text-lg md:text-xl truncate font-volkhov">
                Майя Фёдорова
              </h3>
            </div>
            <p className="text-[#383838] text-xs md:text-[15px] tracking-[-0.90px] text-justify mb-2 md:mb-4 break-words font-volkhov">
              Если вы еще не знаете что такое KinderShape, но хотите чем-то занять своего ребёнка, то это верный выбор.
            </p>
          </div>
          <div>
            <p className="text-[#383838] text-xs truncate font-volkhov">
              Минск | Беларусь | Программист
            </p>
            <p className="text-[#ed4848] text-xs truncate font-volkhov">
              @GirlTechIT2025
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
