import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="hero">

      <h1>Zorvexa</h1>

      <p>
        منصة احترافية تعتمد على الذكاء الاصطناعي، سريعة، آمنة، ومهيأة لمحركات البحث.
      </p>

      <Link className="btn" to="/register">
        ابدأ الآن
      </Link>

    </main>
  );
}
