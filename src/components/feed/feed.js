import { Link } from "gatsby";
import React from "react";
import {
  feed,
  feed_item,
  feed_item_header,
  post_title,
  post_title_link,
  post_meta,
  post_excerpt,
} from "./feed.module.scss";

const Feed = ({ posts }) => {
  return (
    <div className={feed}>
      {posts.map((post) => {
        const { frontmatter } = post.node;
        return (
          <article className={feed_item} key={frontmatter.slug}>
            <header className={feed_item_header}>
              <h2 className={post_title}>
                <Link className={post_title_link} to={frontmatter.slug}>
                  {frontmatter.title}
                </Link>
              </h2>
              <div className={post_meta}>
                <p>
                  <time>{frontmatter.date}</time>
                  {` – `} {frontmatter.tag}
                </p>
              </div>
            </header>
            <section>
              <p className={post_excerpt}>{frontmatter.excerpt}</p>
            </section>
          </article>
        );
      })}
    </div>
  );
};

export default Feed;
