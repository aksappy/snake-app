import React, { useState } from "react";

import styles from "@/components/NumberButton.module.css";

type NumberButtonProps = {
  label: string;
  onClick: () => void;
};

const NumberButton: React.FC<NumberButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default NumberButton;
