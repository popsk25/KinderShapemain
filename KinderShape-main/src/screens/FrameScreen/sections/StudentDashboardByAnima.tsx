import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Task {
  id: string;
  class: string;
  sceneType: string;
  title: string;
  instructions: string;
}

export const StudentDashboardByAnima = (): JSX.Element => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string>("/gallery"); // State to manage active menu item
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("teacherTasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#8fd16a] via-[#f9ae33] to-[#ed4848] animate-fade-in-scale">
      {/* Верхняя плашка */}
      <div className="flex items-center justify-between w-full h-[64px] bg-gradient-to-r from-[#34a465] to-[#f9ae33] px-6">
        <div className="flex items-center gap-4">
          <img
            src="/rectangle-575.png"
            alt="KinderShape Logo"
            className="h-12 cursor-pointer"
            onClick={() => navigate("/select-role")}
          />
          <span className="text-white text-xl font-[Alfa_Slab_One] ml-2">Ученик</span>
        </div>
        <div className="flex items-center gap-2 bg-[#f9ae33]/80 rounded-full px-4 py-2">
          <span className="text-white text-sm font-[Alfa_Slab_One]">Аккаунт</span>
          <span className="text-white text-xs font-[Alfa_Slab_One] opacity-70">имя</span>
        </div>
      </div>
      {/* Основная часть */}
      <div className="flex w-full h-[calc(100vh-64px)]">
        {/* Меню слева */}
        <div className="w-[180px] bg-[#e0e0e0] h-full flex flex-col pt-6 gap-2">
          <div
            className={`flex items-center gap-2 px-4 py-2 hover:bg-[#f9ae33]/20 cursor-pointer rounded-r-xl ${activeMenu === "/gallery" ? "bg-[#f9ae33]/20" : ""}`}
            onClick={() => {
              setActiveMenu("/gallery");
              navigate("/student-dashboard"); // Navigate to base dashboard or gallery
            }}
          >
            <img src="/Grid.png" alt="Галерея" className="w-6 h-6" />
            <span className="text-[#505050] font-[Alfa_Slab_One] text-base">Галерея</span>
          </div>
          <div
            className={`flex items-center gap-2 px-4 py-2 hover:bg-[#f9ae33]/20 cursor-pointer rounded-r-xl ${activeMenu === "/my-class" ? "bg-[#f9ae33]/20" : ""}`}
            onClick={() => setActiveMenu("/my-class")}
          >
            <img src="/Users.png" alt="Мой класс" className="w-6 h-6" />
            <span className="text-[#505050] font-[Alfa_Slab_One] text-base">Мой класс</span>
          </div>
          <div
            className={`flex items-center gap-2 px-4 py-2 hover:bg-[#f9ae33]/20 cursor-pointer rounded-r-xl ${activeMenu === "/tasks" ? "bg-[#f9ae33]/20" : ""}`}
            onClick={() => setActiveMenu("/tasks")}
          >
            <img src="/Tasks.png" alt="Задания" className="w-6 h-6" />
            <span className="text-[#505050] font-[Alfa_Slab_One] text-base">Задания</span>
          </div>
          <div
            className={`flex items-center gap-2 px-4 py-2 hover:bg-[#f9ae33]/20 cursor-pointer rounded-r-xl ${activeMenu === "/my-projects" ? "bg-[#f9ae33]/20" : ""}`}
            onClick={() => {
              setActiveMenu("/my-projects");
              navigate("/my-projects"); // Navigate to my projects
            }}
          >
            <img src="/MyProjects.png" alt="Мои проекты" className="w-6 h-6" />
            <span className="text-[#505050] font-[Alfa_Slab_One] text-base">Мои проекты</span>
          </div>
          <div
            className={`flex items-center gap-2 px-4 py-2 hover:bg-[#f9ae33]/20 cursor-pointer rounded-r-xl ${activeMenu === "/resources" ? "bg-[#f9ae33]/20" : ""}`}
            onClick={() => window.open("https://kinder-shape3-d-xn27.vercel.app/", "_blank")}
          >
            <img src="/Gallery.png" alt="Ресурсы" className="w-6 h-6" />
            <span className="text-[#505050] font-[Alfa_Slab_One] text-base">Ресурсы</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 mt-auto mb-4 opacity-70 cursor-pointer" onClick={() => navigate("/support")}>
            <img src="/Help.png" alt="Поддержка" className="w-6 h-6" />
            <span className="text-[#ed4848] font-[Alfa_Slab_One] text-base">Поддержка</span>
          </div>
        </div>
        {/* Контент */}
        <div className="flex-1 bg-white p-8">
          {activeMenu === "/tasks" && (
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-bold mb-4">Мои Задания</h2>
              <div className="mt-8 w-full">
                {tasks.length > 0 ? (
                  tasks.map((task) => (
                    <div key={task.id} className="bg-white rounded-lg shadow p-4 mb-4 border border-gray-200">
                      <h3 className="text-xl font-bold mb-2">{task.title}</h3>
                      <p className="text-gray-700 mb-1">**Класс:** {task.class}</p>
                      <p className="text-gray-700 mb-1">**Тип сцены:** {task.sceneType}</p>
                      <p className="text-gray-700">**Инструкции:** {task.instructions}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">Пока нет заданий. Попросите учителя создать их.</p>
                )}
              </div>
            </div>
          )}

          {activeMenu === "/gallery" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Галерея</h2>
              <p className="text-gray-700">Посетите нашу галерею проектов:</p>
              <a href="https://kinder-shape3-d-xn27.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">KinderShape Проекты</a>
            </div>
          )}
          {activeMenu === "/my-class" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Мой класс</h2>
              {/* Add my class content here */}
            </div>
          )}
          {activeMenu === "/my-projects" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Мои проекты</h2>
              <p className="text-gray-700">Посмотрите свои проекты на платформе:</p>
              <a href="https://kinder-shape3-d-xn27.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Мои проекты KinderShape</a>
            </div>
          )}
          {activeMenu === "/resources" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Ресурсы</h2>
              {/* Add resources content here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 