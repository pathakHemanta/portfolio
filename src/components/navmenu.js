import React from "react";
import { Navbar, Button, Link } from "@nextui-org/react";

const Navmenu = () => {
  return (
    <div>
      <Navbar>
        {" "}
        <Navbar.Brand>Try out</Navbar.Brand>
        <Navbar.Content>
          <Navbar.Item>Portfolio</Navbar.Item>
          <Navbar.Item>Portfolio</Navbar.Item>
          <Navbar.Item>Portfolio</Navbar.Item>
          <Navbar.Item>Portfolio</Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </div>
  );
};

export default Navmenu;
