import React from "react";
// import { FaUser } from "react-icons/fa6";

const Menu = ({children , icon}) => {
  return (
    <div>
      <li>
        <button
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Homepage"
        >
          {/* user icon*/}
          <div className="icon text-lg">{icon}</div>
          
          <span className="is-drawer-close:hidden text-lg font-semibold">{children}</span>
        </button>
      </li>
    </div>
  );
};

export default Menu;
