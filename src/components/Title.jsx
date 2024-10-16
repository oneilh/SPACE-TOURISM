const Title = ({ no, title }) => {
  return (
    <p className="title">
      <span
        className="dark-txt"
        style={{ fontWeight: "900", marginRight: "0.7rem" }}
      >
        {no}
      </span>{" "}
      {title.toUpperCase()}
    </p>
  );
};

export default Title;
