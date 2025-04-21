const Button = ({ children, onClick, className, type = "button" }) => {
  const classes = `px-4 py-2 rounded-md font-medium transition-colors ${className}`;

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
