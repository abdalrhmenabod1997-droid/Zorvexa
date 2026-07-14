import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";

function Login() {
  return <h1 style={{padding:"40px"}}>تسجيل الدخول</h1>;
}

function Register() {
  return <h1 style={{padding:"40px"}}>إنشاء حساب</h1>;
}

function NotFound() {
  return <h1 style={{padding:"40px"}}>404 | الصفحة غير موجودة</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
