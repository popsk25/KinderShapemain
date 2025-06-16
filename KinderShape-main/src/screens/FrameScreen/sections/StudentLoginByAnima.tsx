import React from "react";
import { useNavigate } from "react-router-dom";

export const StudentLoginByAnima = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#8fd16a] via-[#f9ae33] to-[#ed4848] animate-fade-in-scale">
      <img
        src="/rectangle-575.png"
        alt="KinderShape Logo"
        className="w-[220px] mb-8 mt-8 cursor-pointer"
        onClick={() => navigate("/select-role")}
      />
      <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center w-[350px] max-w-full">
        <h2 className="text-2xl font-normal mb-2 text-center">Войти как ученик</h2>
        <div className="text-sm text-center mb-4">
          Учитель даст вам код класса, чтобы присоединиться к вашему классу <br />
          <span className="font-bold">KinderShape</span>
        </div>
        <input className="rounded-full px-4 py-2 mb-3 w-full bg-orange-400 text-white placeholder-white text-center outline-none" placeholder="Код" />
        <button className="rounded-full px-4 py-2 w-full bg-orange-500 text-white font-bold mt-2 mb-2 transition hover:bg-orange-600" onClick={() => navigate("/student-dashboard")}>Войти</button>
      </div>
    </div>
  );
}; 