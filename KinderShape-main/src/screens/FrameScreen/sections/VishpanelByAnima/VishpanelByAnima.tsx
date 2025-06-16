import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../../../../components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const VishpanelByAnima = ({ onAuthClick }: { onAuthClick?: () => void }): JSX.Element => {
  return (
    <header className="w-full">
      <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 min-h-[70px] md:min-h-[90px] [background:linear-gradient(90deg,rgb(52,164,101)_24%,rgb(249,174,51)_85%)]">
        <div className="flex items-center justify-between px-4 h-full max-w-[1446px] mx-auto">
          <div className="flex items-center h-full p-0 m-0">
            <img
              className="h-full max-h-[70px] md:max-h-[90px] w-auto object-contain"
              alt="Logo"
              src="/rectangle-575.png"
            />
          </div>

          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex gap-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-[Alfa_Slab_One] text-white text-lg bg-transparent hover:bg-transparent focus:bg-transparent">
                  О платформе
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="min-w-[260px] bg-[#4caf50] rounded-[32px] flex flex-col border border-[#388e3c] font-[Alfa_Slab_One] text-lg text-white shadow-lg" style={{boxShadow: '0 8px 32px 0 rgba(60,120,60,0.18)'}}>
                    <a href="#" className="px-6 py-4 hover:bg-[#43a047] transition rounded-t-[32px] border-b border-[#388e3c] font-[Alfa_Slab_One]">О платформе</a>
                    <a href="#" className="px-6 py-4 hover:bg-[#43a047] transition border-b border-[#388e3c] font-[Alfa_Slab_One]">Почему выбирают нашу платформу</a>
                    <a href="#" className="px-6 py-4 hover:bg-[#43a047] transition border-b border-[#388e3c] font-[Alfa_Slab_One]">Примеры работ</a>
                    <a href="#" className="px-6 py-4 hover:bg-[#43a047] transition border-b border-[#388e3c] font-[Alfa_Slab_One]">Отзывы учителей</a>
                    <a href="#" className="px-6 py-4 hover:bg-[#43a047] transition rounded-b-[32px] font-[Alfa_Slab_One]">Подготовка детей</a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/resources" className="font-[Alfa_Slab_One] text-white text-lg cursor-pointer block py-2 px-4">
                  Ресурсы
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/support" className="font-[Alfa_Slab_One] text-white text-lg cursor-pointer block py-2 px-4">
                  Поддержка
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex gap-4">
            <Button className="h-7 bg-[#ffffff94] hover:bg-[#ffffffaa] rounded-[272px] font-[Alfa_Slab_One] text-[#e17b06] text-sm" onClick={onAuthClick}>
              войти
            </Button>
            <Button className="h-7 bg-[#ffffff94] hover:bg-[#ffffffaa] rounded-[272px] font-[Alfa_Slab_One] text-[#e17b06] text-sm" onClick={onAuthClick}>
              зарегестрироваться
            </Button>
          </div>
        </div>
      </div>
      <div className="w-screen left-1/2 right-1/2 -translate-x-1/2 h-px bg-[#ed4848] relative" />
    </header>
  );
};