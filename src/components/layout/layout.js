import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { layout } from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
