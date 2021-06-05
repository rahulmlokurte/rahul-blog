import React from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import { copyRight } from "./footer.module.scss";
const Footer = () => {
  const data = useSiteMetadata();
  const { copyright } = data;
  return (
    <footer>
      <p className={copyRight}>{copyright}</p>
    </footer>
  );
};

export default Footer;
