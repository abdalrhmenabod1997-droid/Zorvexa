import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px"
        }}
      >
        <h1 style={{ fontSize: "56px", marginBottom: "20px" }}>
          Zorvexa
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "700px",
            margin: "0 auto",
            color: "#cbd5e1"
          }}
        >
          منصة احترافية للمقالات والخدمات الرقمية، سريعة وآمنة ومهيأة لمحركات البحث.
        </p>

        <Link className="btn" to="/register">
          ابدأ الآن
        </Link>
      </section>

      <section style={{ padding: "40px 0" }}>
        <h2>آخر المقالات</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
            marginTop: "30px"
          }}
        >
          <div className="card">
            <h3>سيظهر أول مقال هنا</h3>
            <p>سيتم ربط هذه البطاقات مع MongoDB لاحقًا.</p>
          </div>

          <div className="card">
            <h3>المقال الثاني</h3>
            <p>واجهة مؤقتة حتى نربط الـ Backend.</p>
          </div>

          <div className="card">
            <h3>المقال الثالث</h3>
            <p>سيتم جلبه من قاعدة البيانات.</p>
          </div>
        </div>
      </section>
    </>
  );
}
