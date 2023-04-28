import React from "react";
import { unitValueProps } from "./model";

function UnitValues({
  revenueUnit,
  acquisitionCost,
  lifeTimeValue,
}: unitValueProps) {
  return (
    <div className="font-sans uppercase">
      <div className="text-xs text-cyan-500 font-medium">
        Average Revenue per unit
      </div>
      <div className="flex flex-row gap-1 justify-center mt-2 h-6 w-48 text-center rounded bg-cyan-400">
        {revenueUnit}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="mt-2 border-cyan-200 border border-b"></div>
      <div className="text-xs text-cyan-500 font-medium">
        Customer LifeTime Value
      </div>
      <div className="flex flex-row gap-1 justify-center mt-2 h-6 w-48 text-center rounded bg-cyan-400">
        {acquisitionCost}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="mt-2 border-cyan-200 border border-b"></div>
      <div className="text-xs text-cyan-500 font-medium">
        Customer Acquisition Cost
      </div>
      <div className="flex flex-row gap-1 justify-center mt-2 h-6 w-48 text-center rounded bg-cyan-400">
        {lifeTimeValue}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="mt-2 border-cyan-200 border border-t"></div>
    </div>
  );
}

export default UnitValues;
