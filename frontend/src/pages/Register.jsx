import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
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

      await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      alert("تم إنشاء الحساب بنجاح");

    } catch (error) {
      alert(error.response?.data?.message || "حدث خطأ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: 450, marginTop: 80 }}>
      <div className="card">

        <h2>إنشاء حساب</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="الاسم"
            onChange={handleChange}
            required
          />

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
            {loading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
          </button>

        </form>

      </div>
    </div>
  );
}
