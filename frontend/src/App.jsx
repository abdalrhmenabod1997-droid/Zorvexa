import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function NotFound() {
  return (
    <MainLayout>
      <h1>404</h1>
      <p>الصفحة غير موجودة.</p>
    </MainLayout>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/login"
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />

      <Route
        path="/register"
        element={
          <MainLayout>
            <Register />
          </MainLayout>
        }
      />

      <Route path="/404" element={<NotFound />} />

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
