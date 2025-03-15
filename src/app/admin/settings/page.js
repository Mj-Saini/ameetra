"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/app/components/common/Sidebar";
import AdminHeader from "@/app/components/common/AdminHeader";
import DashboardContent from "@/app/components/common/DashboardContent";
import AllUsers from "@/app/components/AllUsers";
import Notifications from "@/app/components/Notifications";
import DashboardSettings from "@/app/components/DashboardSettings";

const Page = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  useEffect(() => {
    if (showSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSideBar]);

  return (
    <div className="h-screen">
      <div className="flex flex-wrap h-full">
        <div
          className={` w-full md:w-3/12 xl:w-2/12 max-md:fixed left-0 duration-300  ${
            showSideBar ? "top-0" : "-top-full"
          }`}
        >
          <div className="h-full bg-[#3D464D] z-10 relative">
            <Sidebar setShowSideBar={setShowSideBar} />
          </div>
        </div>
        <div className="w-full md:w-9/12 xl:w-10/12">
          <div className="top-0 sticky bg-white z-10">
            <AdminHeader
              showSideBar={showSideBar}
              setShowSideBar={setShowSideBar}
            />
          </div>
          <DashboardSettings />
        </div>
      </div>
    </div>
  );
};

export default Page;
