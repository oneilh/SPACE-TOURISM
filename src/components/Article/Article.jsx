import React from 'react';
const Article = ({ planet, jobRole, name, content }) => {
  const style = {
    margin: '1.5rem 0'
  }
  return (
    <div style={style}>
      <h2>{planet}</h2>
      <h3>{jobRole}</h3>
      <h4>{name}</h4>
      <p>{content}</p>
    </div>
  );
};

export default Article;
