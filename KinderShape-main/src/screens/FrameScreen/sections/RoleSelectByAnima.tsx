import React from "react";
import { useNavigate } from "react-router-dom";

export const RoleSelectByAnima = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#8fd16a] via-[#f9ae33] to-[#ed4848] animate-fade-in-scale">
      <img
        src="/rectangle-575.png"
        alt="KinderShape Logo"
        className="w-[220px] mb-8 mt-8 cursor-pointer"
        onClick={() => window.location.href = "/"}
      />
      <div className="flex flex-col gap-4 w-full max-w-xs items-center">
        <button className="bg-[#dbe7c9] hover:bg-[#c7e1a1] text-[#505050] rounded-full px-8 py-2 text-lg font-[Alfa_Slab_One] shadow transition" onClick={() => navigate("/teacher-dashboard")}>Войти</button>
      </div>
      <div className="flex flex-row gap-8 mt-12">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-md cursor-pointer" onClick={() => navigate("/student-dashboard")}>
            <span className="text-red-500 font-[Alfa_Slab_One] text-lg mt-2">Ученик</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-md cursor-pointer" onClick={() => navigate("/teacher-dashboard")}>
            <span className="text-red-500 font-[Alfa_Slab_One] text-lg mt-2">Учитель</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 