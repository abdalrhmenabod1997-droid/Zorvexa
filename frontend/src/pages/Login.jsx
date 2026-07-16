import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      localStorage.setItem("token", data.token);

      alert("تم تسجيل الدخول بنجاح");

    } catch (error) {
      alert(error.response?.data?.message || "حدث خطأ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: 450, marginTop: 80 }}>

      <div className="card">

        <h2>تسجيل الدخول</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"
            onChange={handleChange}
            required
          />

          <button
            className="btn"
            style={{ width: "100%", border: 0 }}
            disabled={loading}
          >
            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </button>

        </form>

      </div>

    </div>
  );
}
