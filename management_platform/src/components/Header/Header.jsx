import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <Navbar className="navbar">
      <div className="brand_container">
        <p className="brand_name">Five Guys</p>

        <p className="brand_subtitle">Management</p>
      </div>
    </Navbar>
  );
};

export default Header;
