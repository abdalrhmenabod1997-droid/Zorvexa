import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../services/articleService";

export default function Article() {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const data = await getArticle(slug);
        setArticle(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadArticle();
  }, [slug]);

  if (!article) {
    return <h2>جاري تحميل المقال...</h2>;
  }

  return (
    <div className="container">

      <h1>{article.title}</h1>

      <p style={{ color: "#38bdf8" }}>
        {article.category}
      </p>

      <hr />

      <div
        dangerouslySetInnerHTML={{
          __html: article.content
        }}
      />

    </div>
  );
}
