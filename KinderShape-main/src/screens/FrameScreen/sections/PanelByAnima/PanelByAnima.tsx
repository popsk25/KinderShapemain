import { ChromeIcon, PackageIcon, UserPlusIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const PanelByAnima = (): JSX.Element => {
  const features = [
    {
      icon: <UserPlusIcon className="w-[72px] h-[68px]" />,
      text: "Присоединяйся  к обучению со своим учителем",
    },
    {
      icon: <PackageIcon className="w-[72px] h-[72px]" />,
      text: "Создавай свои проекты и делись ними",
    },
    {
      icon: <ChromeIcon className="w-[72px] h-[72px]" />,
      text: "Создавай прямо в браузере",
    },
  ];

  return (
    <section className="w-full max-w-[836px] mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-0">
        {features.map((feature, index) => (
          <Card key={index} className="border-0 rounded-none">
            <CardContent className="flex items-center p-6 h-[126px]">
              <div className="flex-shrink-0 mr-5">{feature.icon}</div>
              <div className="font-[Alfa_Slab_One] text-[#505050] text-base tracking-[-0.96px] leading-normal font-normal max-w-[177px]">
                {feature.text}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
