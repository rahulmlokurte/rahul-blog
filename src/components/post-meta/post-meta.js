import React from "react";
import { post_meta, post_title, post_caption } from "./post-meta.module.scss";

const PostMeta = ({ frontmatter, timeToRead }) => {
  const { title } = frontmatter;
  const { date, tag } = frontmatter;

  return (
    <header className={post_meta}>
      <h1 className={post_title}>{title}</h1>
      <div className={post_caption}>
        <p>
          <time>{date}</time>
          {`-`}
          {tag}
        </p>
        <p>{timeToRead} min read</p>
      </div>
    </header>
  );
};

export default PostMeta;
