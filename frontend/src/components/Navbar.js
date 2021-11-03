import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="navBar">
        <li>
          <NavLink to="/" exact={true}>
            <p>HOME</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/top-ten" exact={true}>
            <p>top-ten</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cheap-products" exact={true}>
            <p>cheap-products</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/available-products" exact={true}>
            <p>available-products</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/company-orders" exact={true}>
            <p>company-orders</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products-supplier" exact={true}>
            <p>products-supplier</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bottom-ten" exact={true}>
            <p>bottom-ten</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/customer-city-list" exact={true}>
            <p>customer-city-list</p>
          </NavLink>
        </li>

      </ul>
    </div>
  );
}

export default Navbar;
