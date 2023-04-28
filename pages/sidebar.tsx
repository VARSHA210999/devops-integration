import React, { useState } from 'react';

interface MenuItem {
  name: string;
  path: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen w-64 bg-gray-800">
      <div className="flex justify-end h-14">
        {isOpen ? (
          <button
            className="text-white focus:outline-none"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
      </div>
      <nav
        className={`${
          !isOpen ? 'hidden' : 'block'
        } flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto`}
      >
        {menuItems.map((menuItem, index) => (
          <a
            key={index}
            href={menuItem.path}
            className="block py-2 px-4 text-sm text-white hover:bg-gray-700"
            onClick={closeMenu}
          >
            {menuItem.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

// import classNames from 'classnames'
// import { useRouter } from 'next/router';
// import React, { useState, useMemo } from 'react'
// import Link from 'next/link';
// import { HomeIcon} from '../helpers/Icon';
// import { UsersIcon } from '../helpers/Icon';
// import { LogoIcon } from '../helpers/Icon';
// import { CollapsIcon } from '../helpers/Icon';

// const Sidebar = () => {

//   const menuItems = [
//     { id: 1, label: "Dashboard", icon: HomeIcon, link: "/" },
//     { id: 2, label: "Manager", icon: UsersIcon, link: "/manager" },
//     { id: 3, label: "Leads", icon: UsersIcon, link: "/leads" },
//   ];


//   const [toggleCollapse, setToggleCollapse] = useState(false);
//   const [isCollapsible, setIsCollapsible] = useState(false);
  
//   const router =useRouter();
  
//   const activeMenu : any = useMemo(
//     () => menuItems.find((menu) => menu.link === router.pathname),
//     [router.pathname]
//   )

//   const wrapperClasses = classNames (
//     "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col border-r-2 w-60",
//     {
//       ["w-80"]:  !toggleCollapse,
//       ["w-20"]: toggleCollapse
//     }
//   );

//   const CollapsIconClasses = classNames("p-4 rounded bg-light-lighter absolute right-0",
//   {
//     "rotate-180": toggleCollapse,
//   });

//   // const getNavItemClasses = (menu : any) => {
//   //   return classNames(
//   //     "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
//   //     {
//   //       ["bg-light-lighter"]: activeMenu.id === menu.id,
//   //     }
//   //   );
//   // };

//   const onMouseOver = () => {
//     setIsCollapsible(!isCollapsible);
//   };

//   const handleSidebarToggle = () => {
//     setToggleCollapse(!toggleCollapse);
//   };
  
//   return (
//     <div className={wrapperClasses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>
//       <div className="flex flex-col">
//           <div className="flex items-center justify-between relative ">
//           <div className="fex items-center pl-1 gap-4">
//             <LogoIcon/>
//             <span className={classNames('mt-2 text-lg font-medium text-text', 
//             {
//               hidden : toggleCollapse,
//             })}>
//               Logo
//             </span>
//           </div>
//           {isCollapsible && (
//             <button
//               className={CollapsIconClasses}
//               onClick={handleSidebarToggle}
//             >
//               <CollapsIcon />
//             </button>
//           )}
//           </div>
//           <div className="flex flex-col items-start mt-24">
//                 {menuItems.map(({icon: Icon, ...menu}) => {
//                   //const classes = getNavItemClasses(menu);
//                   return (
//                     <div>
//                       <Link href={menu.label} legacyBehavior> 
//                       <a className="flex py-4 px-3 items-center w-full h-full">
//                         <div>
//                           <Icon/>
//                         </div>
//                         {!toggleCollapse && (
//                       <span
//                         className={classNames(
//                           "text-md font-medium text-text-light"
//                         )}
//                       >
//                         {menu.label}
//                       </span>
//                     )}
//                       </a>
//                       </Link>
                     
//                     </div>
//                   )
//                 })}
//           </div>
//       </div>
//     </div>
//   )
// }

// export default Sidebar;