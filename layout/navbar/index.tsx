import React, { useState } from "react";
import Sidebar from "../../pages/sidebar";

function Navbar() {
  const [productOptions, setProductOptions] = useState(false);
  const [solutionOptions, setSolutionOptions] = useState(false);
  const [companyOptions, setCompanyOptions] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleProduct = () => {
    setProductOptions((prevShowOptions) => !prevShowOptions);
  };
  const toggleSolution = () => {
    setSolutionOptions((prevShowOptions) => !prevShowOptions);
  };
  const toggleCompany = () => {
    setCompanyOptions((prevShowOptions) => !prevShowOptions);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-1 font-sans">
      <div className="flex gap-4">
        {" "}
        <div className="">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                fill="#ffffff"
              />
            </svg>
          </button>
          {menu && (
            <div>
              <Sidebar menuItems={menuItems} />
            </div>
          )}
        </div>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight uppercase">
            Sales Dashboard
          </span>
        </div>
      </div>

      <div className="w-full flex flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div>
          <a
            href="#"
            className="flex text-sm px-4 py-2 text-white border-white mt-4 lg:mt-0 uppercase"
            onMouseEnter={() => setProductOptions(true)}
            onMouseLeave={() => setProductOptions(false)}
          >
            Product
          </a>
          {productOptions && (
            <div className="absolute text-xs flex flex-col gap-2 bg-white rounded-lg shadow-sm px-9 py-2">
              <div>Getting Started</div>
              <div>API Reference</div>
              <div>Examples</div>
            </div>
          )}
        </div>
        <div>
          <a
            href="#"
            className="flex text-sm px-4 py-2 text-white border-white mt-4 lg:mt-0 uppercase"
            onClick={toggleSolution}
          >
            Solutions
          </a>
          {solutionOptions && (
            <div className="absolute text-xs flex flex-col gap-2 bg-white rounded-lg shadow-sm px-16 py-2">
              <div>POC</div>
              <div>AI</div>
              <div>MOC</div>
            </div>
          )}
        </div>
        <div>
          <a
            href="#"
            className="flex text-sm px-4 py-2 text-white border-white mt-4 lg:mt-0 uppercase"
            onClick={toggleCompany}
          >
            Company
          </a>
          {companyOptions && (
            <div className="absolute text-xs flex flex-col gap-2 bg-white rounded-lg shadow-sm px-12 py-2">
              <div>About us</div>
              <div>Contact</div>
            </div>
          )}
        </div>
        <div>
          <a
            href="#"
            className="flex text-sm px-4 py-2 text-white border-white mt-4 lg:mt-0 uppercase"
          >
            Free Trial
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
