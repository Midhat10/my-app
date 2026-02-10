const Button = ({ onClick, children }) => {
  return (
    <>
      <button style={{ width: "25px", height: "25px" }} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
