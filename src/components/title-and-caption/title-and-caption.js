import { Link } from "gatsby";
import React from "react";
import {
  titleAndCaption,
  blogTitle,
  titleLink,
} from "./title-and-caption.module.scss";

const TitleAndCaption = ({ data }) => {
  const { title } = data;

  return (
    <div className={titleAndCaption}>
      <h1 className={blogTitle}>
        <Link to={`/`} className={titleLink}>
          {title}
        </Link>
      </h1>
    </div>
  );
};

export default TitleAndCaption;
