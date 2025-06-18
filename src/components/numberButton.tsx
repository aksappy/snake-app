import React from "react";

type NumberButtonProps = {
  number: number;
  onClick: (value: number) => void;
};

const NumberButton: React.FC<NumberButtonProps> = ({ number, onClick }) => {
  return (
    <button onClick={() => onClick(number)} style={styles.button}>
      {number}
    </button>
  );
};

const styles = {
  button: {
    width: "60px",
    height: "60px",
    fontSize: "24px",
    margin: "5px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default NumberButton;
