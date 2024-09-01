const Img = ({ png }) => {
  return (
    <section className="img_container">
      <img src={png ? png : ""} alt="PNG image" />
    </section>
  );
};

export default Img;
