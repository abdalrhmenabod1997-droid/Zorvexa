import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Zorvexa</h1>
      <p>منصة احترافية تعتمد على الذكاء الاصطناعي.</p>
    </div>
  );
}

function Login() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>تسجيل الدخول</h1>
    </div>
  );
}

function Register() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>إنشاء حساب</h1>
    </div>
  );
}

export default function App() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          background: "#111827"
        }}
      >
        <Link to="/">الرئيسية</Link>
        <Link to="/login">تسجيل الدخول</Link>
        <Link to="/register">إنشاء حساب</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
