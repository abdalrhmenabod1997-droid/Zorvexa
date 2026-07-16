import { Link } from "react-router-dom";

export default function ArticleCard({
  title,
  excerpt,
  category,
  slug
}) {
  return (
    <div className="card">
      <span
        style={{
          display: "inline-block",
          marginBottom: "10px",
          color: "#38bdf8",
          fontWeight: "bold"
        }}
      >
        {category}
      </span>

      <h3>{title}</h3>

      <p
        style={{
          margin: "15px 0",
          color: "#cbd5e1"
        }}
      >
        {excerpt}
      </p>

      <Link className="btn" to={`/article/${slug}`}>
        اقرأ المزيد
      </Link>
    </div>
  );
}
