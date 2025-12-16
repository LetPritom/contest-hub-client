import React from "react";
// import { FaUser } from "react-icons/fa6";

const Menu = ({children , icon , title}) => {
  return (
    <div>
      <li>
        <button
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-purple-600/20 rounded-xl"
          data-tip={title}
        >
          {/* user icon*/}
          <div className="icon text-lg">{icon}</div>
          
          <span className={`is-drawer-close:hidden text-lg font-semibold`}>{children}</span>
        </button>
      </li>
    </div>
  );
};

export default Menu;
