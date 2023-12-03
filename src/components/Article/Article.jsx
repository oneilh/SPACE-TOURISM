const Article = ({ planet, jobRole, name, content }) => {
  return (
    <>
      <h2>{planet}</h2>
      <h3>{jobRole}</h3>
      <h4>{name}</h4>
      <p>{content}</p>
    </>
  );
};

export default Article;
