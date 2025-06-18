import React, { useState } from "react";
import Heading from "@/components/Heading";
import Styles from "@/components/calculatorstyle.module.css";

export default function Calculator() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleAddition = () => setResult(num1 + num2);
  const handleSubtraction = () => setResult(num1 - num2);
  const handleMultiplication = () => setResult(num1 * num2);
  const handleDivision = () => {
    if (num2 === 0) {
      alert("Cannot divide by zero");
      return;
    }
    setResult(num1 / num2);
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          placeholder="First number"
        />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          placeholder="Second number"
        />
      </div>

      <div style={{ margin: "1rem 0" }}>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>−</button>
        <button onClick={handleMultiplication}>×</button>
        <button onClick={handleDivision}>÷</button>
      </div>
      <Heading title={result !== null && <h3>Result= {result}</h3>} />
    </div>
  );
}
