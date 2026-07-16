import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ArticleCard from "../components/ArticleCard";
import { getArticles } from "../services/articleService";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await getArticles();
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadArticles();
  }, []);

  return (
    <>
      <section className="hero">
        <h1>Zorvexa</h1>

        <p>
          منصة احترافية للمقالات والخدمات الرقمية.
        </p>

        <Link className="btn" to="/register">
          ابدأ الآن
        </Link>
      </section>

      <section>
        <h2>آخر المقالات</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
            marginTop: "30px"
          }}
        >
          {articles.map((article) => (
            <ArticleCard
              key={article._id}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              slug={article.slug}
            />
          ))}
        </div>
      </section>
    </>
  );
}
