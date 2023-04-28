import React, { useState } from "react";
import { salesCountryProps } from "./model";
import { salesCountry } from "../../../../helpers/dummy-data";

function CountrySalesPerformance() {
  const [countrySales, setCountrySales] = useState(salesCountry);
  return (
    <div className="font-sans uppercase">
      <div className="text-xs text-teal-500">Country Sales Performance</div>
      <div>
        {countrySales.map((country) => (
          <table>
            <tbody>
              <tr className="px-3 py-2">
                <td className="px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="fill-white"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    className="w-6 h-6  text-cyan-50 fill-cyan-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                    />
                  </svg>
                </td>
                <td className="px-3 py-2 text-xs">{country.countryName}</td>
                <td className="px-3 py-2 text-xs flex flex-row gap-1">
                  {country.growth}
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
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}
export default CountrySalesPerformance;
