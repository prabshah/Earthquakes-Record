import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default () => (
  <div>
    <Navbar color="dark">
      <NavbarBrand
        href="https://earthquake.usgs.gov/"
        className="mr-auto text-info"
      >
        More Earthquake Info!
      </NavbarBrand>
    </Navbar>
  </div>
);
