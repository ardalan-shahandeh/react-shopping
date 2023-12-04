import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import Wrapper from "../../hoc/Wrapper";
import "./layout.css";

const Layout = (props) => {
  return (
    <Wrapper>
      <Navbar></Navbar>
      <main className="content">{props.children}</main>
    </Wrapper>
  );
};
export default Layout;
