import React from "react";
import { useNavigate } from "react-router-dom";
import { VishpanelByAnima } from "./sections/VishpanelByAnima/VishpanelByAnima";
import { PodvalByAnima } from "./sections/PodvalByAnima/PodvalByAnima";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[1440px] mx-auto px-4 md:px-8 relative">
        {/* Header Section */}
        <VishpanelByAnima onAuthClick={() => navigate("/select-role")} />

        {/* Main Content Area */}
        {children}

        {/* Footer */}
        <PodvalByAnima />
      </div>
    </div>
  );
}; 