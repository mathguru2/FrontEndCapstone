import TableLayout from "./assets/TableLayout.pdf";

export default function Main() {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        margin: "1rem",
      }}
    >
      <h3>Please take a look at our tables!</h3>
      <button>
        <a
          href={TableLayout}
          download="TableLayout.pdf"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Download Table Layout
        </a>
      </button>
    </main>
  );
}
