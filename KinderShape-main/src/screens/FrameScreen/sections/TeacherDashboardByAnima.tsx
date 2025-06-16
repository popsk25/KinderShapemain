import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Task {
  id: string;
  class: string;
  sceneType: string;
  title: string;
  instructions: string;
}

export const TeacherDashboardByAnima = (): JSX.Element => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string>("/gallery"); // State to manage active menu item
  const [showAddClassModal, setShowAddClassModal] = useState<boolean>(false);
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [showAddTaskModal, setShowAddTaskModal] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<Task>({ id: "", class: "", sceneType: "", title: "", instructions: "" });
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("teacherTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("teacherTasks", JSON.stringify(tasks));
  }, [tasks]);

  const generateRandomCode = (): string => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const handleAddClassClick = () => {
    setGeneratedCode(generateRandomCode());
    setShowAddClassModal(true);
  };

  const handleCreateTask = () => {
    if (newTask.class && newTask.sceneType && newTask.title && newTask.instructions) {
      setTasks([...tasks, { ...newTask, id: Date.now().toString() }]);
      setNewTask({ id: "", class: "", sceneType: "", title: "", instructions: "" });
      setShowAddTaskModal(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#8fd16a] via-[#f9ae33] to-[#ed4848]">
      {/* Верхняя плашка */}
      <div className="flex items-center justify-between w-full h-[64px] bg-gradient-to-r from-[#34a465] to-[#f9ae33] px-6">
        <div className="flex items-center gap-4">
          <img
            src="/rectangle-575.png"
            alt="KinderShape Logo"
            className="h-12 cursor-pointer"
            onClick={() => navigate("/select-role")}
          />
          <span className="text-white text-xl font-[Alfa_Slab_One] ml-2">Учитель</span>
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
              navigate("/teacher-dashboard"); // Navigate to base dashboard or gallery
            }}
          >
            <img src="/Grid.png" alt="Галерея" className="w-6 h-6" />
            <span className="text-[#505050] font-[Alfa_Slab_One] text-base">Галерея</span>
          </div>
          <div
            className={`flex items-center gap-2 px-4 py-2 hover:bg-[#f9ae33]/20 cursor-pointer rounded-r-xl ${activeMenu === "/classes" ? "bg-[#f9ae33]/20" : ""}`}
            onClick={() => setActiveMenu("/classes")}
          >
            <img src="/Users.png" alt="Классы" className="w-6 h-6" />
            <span className="text-[#505050] font-[Alfa_Slab_One] text-base">Классы</span>
          </div>
          <div
            className={`flex items-center gap-2 px-4 py-2 hover:bg-[#f9ae33]/20 cursor-pointer rounded-r-xl ${activeMenu === "/tasks" ? "bg-[#f9ae33]/20" : ""}`}
            onClick={() => setActiveMenu("/tasks")}
          >
            <img src="/Tasks.png" alt="Задания" className="w-6 h-6" />
            <span className="text-[#505050] font-[Alfa_Slab_One] text-base">Задания</span>
          </div>
          <div
            className={`flex items-center gap-2 px-4 py-2 hover:bg-[#f9ae33]/20 cursor-pointer rounded-r-xl ${activeMenu === "/archive" ? "bg-[#f9ae33]/20" : ""}`}
            onClick={() => {
              setActiveMenu("/archive");
              navigate("/archive"); // Navigate to archive
            }}
          >
            <img src="/Archive.png" alt="Архив" className="w-6 h-6" />
            <span className="text-[#505050] font-[Alfa_Slab_One] text-base">Архив</span>
          </div>
          <div
            className={`flex items-center gap-2 px-4 py-2 hover:bg-[#f9ae33]/20 cursor-pointer rounded-r-xl ${activeMenu === "/resources" ? "bg-[#f9ae33]/20" : ""}`}
            onClick={() => {
              setActiveMenu("/resources");
              navigate("/resources"); // Navigate to resources
            }}
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
          {activeMenu === "/classes" && (
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-bold mb-4">Мой класс</h2>
              <button
                className="bg-[#dbe7c9] hover:bg-[#c7e1a1] text-[#505050] rounded-full px-8 py-2 text-lg font-[Alfa_Slab_One] shadow transition"
                onClick={handleAddClassClick}
              >
                Добавить
              </button>

              {showAddClassModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center w-[450px] max-w-full relative">
                    <h2 className="text-2xl font-normal mb-6 text-center text-black">Добавить учеников</h2>
                    <p className="text-sm text-center mb-4 text-gray-700">
                      Поделитесь этим кодом с вашими учениками,<br /> чтобы позволить им присоединиться к классу
                    </p>
                    <div className="bg-gray-200 rounded-lg px-6 py-3 mb-6 flex items-center justify-between w-full">
                      <span className="text-3xl font-bold text-gray-800">{generatedCode}</span>
                      <img
                        src="/clipboard.svg" // Updated to use SVG icon
                        alt="Скопировать"
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => navigator.clipboard.writeText(generatedCode)}
                      />
                    </div>
                    <div className="text-sm text-gray-600 text-center mb-2">
                      Действителен до: <span className="font-semibold">всегда</span>
                    </div>
                    <div className="text-sm text-gray-600 text-center">
                      Использований: <span className="font-semibold">0/30</span>
                    </div>
                    <button
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                      onClick={() => setShowAddClassModal(false)}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeMenu === "/tasks" && (
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-bold mb-4">Задания</h2>
              <button
                className="bg-[#dbe7c9] hover:bg-[#c7e1a1] text-[#505050] rounded-full px-8 py-2 text-lg font-[Alfa_Slab_One] shadow transition"
                onClick={() => setShowAddTaskModal(true)}
              >
                Добавить
              </button>

              {showAddTaskModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center w-[450px] max-w-full relative">
                    <div className="w-full bg-gradient-to-r from-[#e17b06] to-[#f9ae33] rounded-t-3xl p-6 flex items-center justify-between absolute top-0 left-0">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <span className="text-[#e17b06] text-4xl font-bold">+</span>
                      </div>
                      <h2 className="text-2xl font-normal text-white">Создать задание</h2>
                      <button
                        className="text-white hover:text-gray-200 text-3xl"
                        onClick={() => setShowAddTaskModal(false)}
                      >
                        &times;
                      </button>
                    </div>
                    <div className="mt-20 w-full">
                      <label className="block text-gray-700 text-sm font-bold mb-2">Класс:</label>
                      <input
                        className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                        type="text"
                        placeholder=""
                        value={newTask.class}
                        onChange={(e) => setNewTask({ ...newTask, class: e.target.value })}
                      />
                      <label className="block text-gray-700 text-sm font-bold mb-2">Тип сцены:</label>
                      <input
                        className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                        type="text"
                        placeholder="3D окружение" // Placeholder from image
                        value={newTask.sceneType}
                        onChange={(e) => setNewTask({ ...newTask, sceneType: e.target.value })}
                      />
                      <label className="block text-gray-700 text-sm font-bold mb-2">Название задания:</label>
                      <input
                        className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                        type="text"
                        placeholder="Название задания"
                        value={newTask.title}
                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                      />
                      <label className="block text-gray-700 text-sm font-bold mb-2">Инструкции:</label>
                      <textarea
                        className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
                        placeholder="Инструкции"
                        rows={4}
                        value={newTask.instructions}
                        onChange={(e) => setNewTask({ ...newTask, instructions: e.target.value })}
                      ></textarea>
                      <button
                        className="bg-[#dbe7c9] hover:bg-[#c7e1a1] text-[#505050] rounded-full px-8 py-2 text-lg font-[Alfa_Slab_One] shadow transition w-full"
                        onClick={handleCreateTask}
                      >
                        Продолжить
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 w-full">
                {tasks.map((task) => (
                  <div key={task.id} className="bg-white rounded-lg shadow p-4 mb-4 border border-gray-200">
                    <h3 className="text-xl font-bold mb-2">{task.title}</h3>
                    <p className="text-gray-700 mb-1">**Класс:** {task.class}</p>
                    <p className="text-gray-700 mb-1">**Тип сцены:** {task.sceneType}</p>
                    <p className="text-gray-700">**Инструкции:** {task.instructions}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeMenu === "/gallery" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Галерея</h2>
              {/* Add gallery content here */}
            </div>
          )}
           {activeMenu === "/archive" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Архив</h2>
              {/* Add archive content here */}
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