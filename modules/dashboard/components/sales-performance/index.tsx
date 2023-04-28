import React, { useState } from "react";
import { salesRevenues } from "../../../../helpers/dummy-data";
import { salesRevenueProps } from "./model";
import Image from "next/image";
import PieChart from "../pie";
import PieData from "../pie-data";
import BarWeeklySales from "../bar-data";

function SalesPerformance({
  newCustomer,
  salesRevenue,
  salesTarget,
  weeklySales,
  profit,
}: salesRevenueProps) {
  return (
    <div>
      <table className="font-sans">
        <tbody>
          <tr>
            <td>
              <tr className="flex flex-col gap-3 px-[5rem] py-[1rem] border-cyan-200 border-r">
                <td className="flex flex-row gap-4">
                  {/* <Image src="/assets/user.png" alt="" height={24} width={24} /> */}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-xl">
                    {" "}
                    {newCustomer}
                    <h6 className="text-xs font-medium uppercase items-center text-white overflow-hidden whitespace-nowrap">
                      New Customer | YTD
                    </h6>
                  </div>
                </td>
                <span className="border-cyan-200 border border-b"></span>
                <td className="flex flex-row gap-4 text-xl">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="flex flex-row gap-2">
                      {profit}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    <h6 className="text-xs font-medium uppercase items-center text-white overflow-hidden whitespace-nowrap">
                      Profit|YTD
                    </h6>
                  </div>
                </td>
                <span className="border-cyan-200 border border-b"></span>
                <td className="flex flex-row gap-4 text-xl">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="flex flex-row gap-2">
                      {salesRevenue}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    <h6 className="text-xs font-medium uppercase items-center text-white overflow-hidden whitespace-nowrap">
                      SalesRevenue|YTD
                    </h6>
                  </div>
                </td>
              </tr>
            </td>
            <td>
              <tr className="flex flex-col px-[4rem] py-[1rem] border-cyan-200 border-r">
                <td className="flex flex-row gap-2 text-xl justify-center">
                  {weeklySales}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </td>
                <td className="text-xs font-medium uppercase flex justify-center text-white overflow-hidden whitespace-nowrap">
                  Average Weekly Sales Revenue
                </td>
                <td>
                  <BarWeeklySales />
                </td>
              </tr>
            </td>
            <td>
              <tr className="flex flex-col px-[4rem] py-[1rem]">
                <td className="flex flex-row gap-2 text-xl justify-center">
                  {salesTarget}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </td>
                <td className="flex justify-center text-xs font-medium uppercase items-center text-white overflow-hidden whitespace-nowrap">
                  Above sales target | YTD
                </td>
                <td>
                  <PieData />
                </td>
              </tr>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default SalesPerformance;
