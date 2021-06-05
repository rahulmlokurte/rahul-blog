import React from "react";

const PostContent = ({ markdownRemark }) => {
  const html = markdownRemark.html;

  return <section dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
