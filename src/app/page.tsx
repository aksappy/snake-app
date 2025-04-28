import Link from "next/link";

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
          flex: 1,
          backgroundColor: "silver",
          padding: "1rem",
        }}
      >
        <h1>New</h1>
        <h1>Save</h1>
        <h1>Exit</h1>
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
        <h2>Game playing area</h2>
      </div>

      {/* Right Column */}
      <div
        style={{
          width: "20%",
          flex: 1,
          marginTop: "100px",
          backgroundColor: "silver",
          padding: "1rem",
        }}
      >
        <h1>Score</h1>
        <h1>Highscore</h1>
        <h1>Timelapsed</h1>
      </div>
    </main>
  );
}
