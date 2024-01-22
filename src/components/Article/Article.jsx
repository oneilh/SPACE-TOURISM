import React from "react";
const Article = ({ planet, jobRole, name, content }) => {
  return (
    <div>
      <h2>{planet}</h2>
      <h3>{jobRole}</h3>
      <h4>{name}</h4>
      <p>{content}</p>
    </div>
  );
};

export default Article;
