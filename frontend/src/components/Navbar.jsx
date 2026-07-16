import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      style={{
        background: "#111827",
        padding: "18px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Link
        to="/"
        style={{
          color: "#38bdf8",
          fontSize: "28px",
          fontWeight: "bold",
          textDecoration: "none"
        }}
      >
        Zorvexa
      </Link>

      <nav
        style={{
          display: "flex",
          gap: "20px"
        }}
      >
        <Link to="/">الرئيسية</Link>
        <Link to="/login">دخول</Link>
        <Link to="/register">حساب جديد</Link>
      </nav>
    </header>
  );
}
