import React, { useState } from "react";
import ChatbotContainer from "../modules/chatbotembedding";
import Navbar from "../layout/navbar";
import SalesPerformance from "../modules/dashboard/components/sales-performance";
import { salesGrowth, salesRevenues, values } from "../helpers/dummy-data";
import MonthlySalesGrowth from "../modules/dashboard/components/monthly-salesgrowth";
import CountrySalesPerformance from "../modules/dashboard/components/country-sales";
import UnitValues from "../modules/dashboard/components/unit-value";

function Home() {
  const [salesData, setSalesData] = useState(salesRevenues);
  const [growthData, setGrowthData] = useState(salesGrowth);
  const [unitValues, setUnitValues] = useState(values);
  return (
    <div className="">
      <Navbar />
      <div className=" bg-cyan-300 border mt-2 ml-4 mr-4">
        {salesData.map((sales) => (
          <div>
            <SalesPerformance {...sales} />
          </div>
        ))}
      </div>
      <table>
        <tbody>
          <tr>
            <td className="">
              <div className="bg-white border ml-4 mt-2 px-16 py-3">
                {growthData.map((salesGrowth) => (
                  <div>
                    <MonthlySalesGrowth {...salesGrowth} />
                  </div>
                ))}
              </div>
            </td>
            <td>
              <div className="bg-white border ml-4 mt-2 px-24 py-9">
                <CountrySalesPerformance />
              </div>
            </td>
            <td>
              <div className="bg-white border ml-4 mt-2 px-28 py-4 mr-4">
                {unitValues.map((values) => (
                  <div>
                    <UnitValues {...values} />
                  </div>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;

//import React from "react";
// import ChatbotContainer from "../modules/chatbot/components";

// import ChatbotContainer from "../modules/chatbot/components";
// const data = [
//   { name: "Jan", sales: 2400 },
//   { name: "Feb", sales: 1398 },
//   { name: "Mar", sales: 9800 },
//   { name: "Apr", sales: 3908 },
//   { name: "May", sales: 4800 },
//   { name: "Jun", sales: 3800 },
//   { name: "Jul", sales: 4300 },
// ];

// const SalesDashboard = () => {
//   return (
//     <div className="bg-gray-100 h-screen p-4">
//       <h1 className="text-2xl font-bold mb-4">Sales Dashboard</h1>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <h2 className="text-lg font-bold mb-2">Monthly Sales</h2>
//           <LineChart width={500} height={300} data={data}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//             <Line type="monotone" dataKey="sales" stroke="#8884d8" />
//             <Tooltip />
//             <Legend />
//           </LineChart>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <h2 className="text-lg font-bold mb-2">Top Products</h2>
//           <ul>
//             <li className="flex items-center justify-between mb-2">
//               <span>Product A</span>
//               <span className="text-green-500 font-bold">100 units</span>
//             </li>
//             <li className="flex items-center justify-between mb-2">
//               <span>Product B</span>
//               <span className="text-green-500 font-bold">80 units</span>
//             </li>
//             <li className="flex items-center justify-between mb-2">
//               <span>Product C</span>
//               <span className="text-green-500 font-bold">50 units</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SalesDashboard;

// import React from 'react';
// import Sidebar from './sidebar';

// const menuItems = [
//   { name: 'Home', path: '/' },
//   { name: 'About', path: '/about' },
//   { name: 'Contact', path: '/contact' },
// ];

// const App: React.FC = () => {
//   return (
//     <div className="flex">
//       <Sidebar menuItems={menuItems} />
//       <main className="flex-1 p-4">
//         <h1 className="text-2xl font-bold">Welcome to my app!</h1>
//         <p>
//           This is an example app that uses the Sidebar component. Try clicking
//           the button to toggle the sidebar menu.
//         </p>
//       </main>
//     </div>
//   );
// };

// export default App;
