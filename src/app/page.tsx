"use client";

import Link from "next/link";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Calculator from "@/components/calculator";
import NumberPad from "@/components/numberPad";

// pages/index.js (or app/page.tsx)
export default function Home() {
  return (
    <main
      style={{
        marginTop: "0px",
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        minHeight: "80vh",
        width: "100%",
      }}
    >
      {/* Left Column */}
      <div
        style={{
          width: "20%",
          marginTop: "100px",
          paddingTop: "50px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "silver",
          padding: "1rem",
        }}
      >
        <Heading title="New Game" />

        <Heading title="Save Game" />
        <Heading title="Exit Game" />
      </div>

      {/* Middle Column */}
      <div
        style={{
          width: "60%",
          marginTop: "100px",
          flex: 2,
          backgroundColor: "#d1ecf1",
          padding: "1rem",
        }}
      >
        <NumberPad />
        <Calculator />
      </div>

      {/* Right Column */}
      <div
        style={{
          width: "20%",
          flex: 1,
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "silver",
          padding: "1rem",
        }}
      >
        <Heading title="Scores" variant="secondary" />
        <Heading title="Highscore" variant="secondary" />
        <Heading title="Timelapsed" variant="secondary" />
      </div>
    </main>
  );
}
