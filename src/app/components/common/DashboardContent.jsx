"use client"
import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts";
import { ThreeDotsIcon } from "./Icons";
import ActionsPopup from "../popups/ActionsPopup";
import { recentTranjections } from "./Helper";

const DashboardContent = () => {
  const [apiData, setApiData] = useState([]);
  const [openPopupIndex, setOpenPopupIndex] = useState(null);

  const handleTogglePopup = (index) => {
    if (openPopupIndex === index) {
      setOpenPopupIndex(null);
    } else {
      setOpenPopupIndex(index);
    }
  };

  useEffect(() => {
    fetch("https://crud-django-c7ri.onrender.com/api/user/")
      .then((response) => response.json())
      .then((responseData) => setApiData(responseData.data));
  }, []);

  return (
    <>
      <div className="px-5 bg-[#F5F7FA] pb-5 z-[1] relative">
        <h2 className="font-medium text-[30px] text-black pt-5">Dashboard</h2>
        <div className="flex flex-wrap gap-5 lg:gap-9 mt-5">
          <div className="flex flex-col items-center w-full sm:w-1/3 backdrop_shadow bg-white p-5 gap-5 rounded-[10px]">
            <p className="font-normal text-sm text-black/50">Total SIPs</p>
            <p className="font-medium text-black text-[30px]">6</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/3 backdrop_shadow bg-white p-5 gap-5 rounded-[10px]">
            <p className="font-normal text-sm text-black/50">
              Total Inverster ‘s
            </p>
            <p className="font-medium text-black text-[30px]">1000</p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-5 lg:gap-0">
          <div className="w-full lg:w-1/3 xl:w-1/4 lg:pe-2.5">
            <div className="bg-white p-5 backdrop_shadow rounded-[10px]">
              <div className="flex justify-between items-center">
                <h2 className="font-normal text-base text-black">
                  Recent Transection
                </h2>
                <span className="cursor-pointer">
                  <ThreeDotsIcon />
                </span>
              </div>
              <div className="flex justify-between items-center mt-2.5  px-2.5 py-3">
                <h2 className="font-normal text-sm text-black/50">Name</h2>
                <p className="font-normal text-sm text-black/50">amount</p>
              </div>
              {recentTranjections.map((items, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center px-2.5 py-3 recent_transactions"
                >
                  <h2 className="font-normal text-sm text-black capitalize">
                    {items.name}
                  </h2>
                  <p className="font-normal text-sm text-black">
                    {items.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-2/3 xl:w-3/4 lg:ps-2.5">
            <div className="bg-white pt-5 px-5 backdrop_shadow rounded-[10px] h-full">
              <div className="flex flex-col w-full">
                <h2 className="font-normal text-base text-black">
                  Comparison Graph Inversters SPIs
                </h2>
                <div className="relative !z-0">
                  <BarChart
                    xAxis={[
                      {
                        scaleType: "band",
                        data: [
                          "jan",
                          "feb",
                          "mar",
                          "apr",
                          "may",
                          "jun",
                          "jul",
                          "aug",
                          "sept",
                          "oct",
                          "nov",
                          "dec",
                        ],
                      },
                    ]}
                    // eslint-disable-next-line no-sparse-arrays
                    series={[
                      {
                        data: [43, 49, 70, 93, 49, 35, 79, 91, 50, 26, 50, 85],
                      },
                      ,
                      {
                        data: [79, 32, 35, 85, 28, 88, 39, 38, 25, 32, 88, 82],
                      },
                      ,
                    ]}
                    // width={500}
                    height={230}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap backdrop_shadow p-5 bg-white">
          <div className="overflow-x-auto w-full">
            <h2 className="font-normal text-base text-black">
              Recent Transection
            </h2>
            <table className="w-full bg-white mt-5">
              <thead>
                <tr className="w-full font-normal text-base text-black border-b border-black/24">
                  <th className="py-4 px-4 text-left  font-normal text-sm lg:text-base">
                    Name
                  </th>
                  <th className="py-4 px-4 text-left capitalize font-normal text-sm lg:text-base">
                    Registration
                  </th>
                  <th className="py-4 px-4 text-left capitalize font-normal text-sm lg:text-base">
                    E-mail
                  </th>
                  <th className="py-4 px-4 text-left capitalize font-normal text-sm lg:text-base">
                    phone Number
                  </th>
                  <th className="py-4 px-4 text-left capitalize font-normal text-sm lg:text-base">
                    City
                  </th>
                  <th className="py-4 px-4 text-left capitalize font-normal text-sm lg:text-base">
                    State
                  </th>
                  <th className="py-4 px-4 text-left capitalize font-normal text-sm lg:text-base">
                    action
                  </th>
                </tr>
              </thead>
              <tbody>
                {apiData.slice(0, 5).map((items, index) => (
                  <tr key={index} className="w-full even:bg-gray-100">
                    <td className="py-3.5 text-black/80 text-sm lg:text-base font-normal px-4">
                      {items.first_name} {items.last_name}
                    </td>
                    <td className="py-3.5 text-black/80 text-sm lg:text-base font-normal px-4">
                      {items.registration}
                    </td>
                    <td className="py-3.5 text-black/80 text-sm lg:text-base font-normal px-4">
                      {items.email}
                    </td>
                    <td className="py-3.5 text-black/80 text-sm lg:text-base font-normal px-4">
                      {items.phone_no}
                    </td>
                    <td className="py-3.5 text-black/80 text-sm lg:text-base font-normal px-4">
                      {items.city}
                    </td>
                    <td className="py-3.5 text-black/80 text-sm lg:text-base font-normal px-4">
                      {items.state}
                    </td>
                    <td className="py-3.5 text-black/80 text-sm lg:text-base font-normal px-4">
                      <div
                        onClick={() => handleTogglePopup(index)}
                        className="w-4 h-4 flex flex-col justify-between items-end cursor-pointer relative ps-2"
                      >
                        {openPopupIndex === index && (
                          <div className="absolute top-full z-10">
                            <ActionsPopup
                              setOpenPopupIndex={setOpenPopupIndex}
                              userId={items.id}
                            />
                          </div>
                        )}
                        <span className="w-1 h-1 inline-block rounded-3xl bg-black"></span>
                        <span className="w-1 h-1 inline-block rounded-3xl bg-black"></span>
                        <span className="w-1 h-1 inline-block rounded-3xl bg-black"></span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardContent