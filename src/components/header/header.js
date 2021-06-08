import React from "react";

import { useSiteMetadata } from "../../hooks/use-site-metadata";
import ThemeSwitcher from "../theme-switcher/theme-switcher";
import TitleAndCaption from "../title-and-caption/title-and-caption";
import { header } from "./header.module.scss";

const Header = () => {
  const data = useSiteMetadata();

  return (
    <header className={header}>
      <TitleAndCaption data={data} />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
