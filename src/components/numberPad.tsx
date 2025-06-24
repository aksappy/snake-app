// NumberPad.tsx

import React, { useState } from "react";

import NumberButton from "@/components/numberButton";

const NumberPad: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [operatorUsed, setOperatorUsed] = useState(false);

  const handleClick = (value: string) => {
    const operators = ["+", "-", "*", "/"];
    if (operators.includes(value)) {
      if (operatorUsed) return;
      setOperatorUsed(true);
    }
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
    setOperatorUsed(false);
  };

  const handleEqual = () => {
    try {
      // Safely evaluate the expression
      const evalResult = eval(input); // Note: eval should not be used in production
      setResult(evalResult.toString());
      setInput(evalResult.toString());
      setOperatorUsed(false);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.display}>
        {result !== null ? `= ${result}` : input || "Calculate"}
      </div>

      <div style={styles.pad}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <NumberButton
            key={num}
            label={num.toString()}
            onClick={() => handleClick(num.toString())}
          />
        ))}
        <NumberButton label="0" onClick={() => handleClick("0")} />
        <NumberButton label="." onClick={() => handleClick(".")} />
        <NumberButton label="+" onClick={() => handleClick("+")} />
        <NumberButton label="-" onClick={() => handleClick("-")} />
        <NumberButton label="*" onClick={() => handleClick("*")} />
        <NumberButton label="/" onClick={() => handleClick("/")} />
        <NumberButton label="Clear" onClick={handleClear} />
        <NumberButton label="=" onClick={handleEqual} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "260px",
    margin: "20px auto",
    textAlign: "center" as const,
    fontFamily: "Arial, sans-serif",
  },
  display: {
    fontSize: "28px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "6px",
    backgroundColor: "#f9f9f9",
    minHeight: "40px",
    wordWrap: "break-word" as const,
  },
  pad: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  },
};

export default NumberPad;
