const Title = ({no, title}) => {
  return (
    <h4 className='page_title'>
      <span>{no}</span> {title.toUpperCase()}
    </h4>
  );
};

export default Title;
