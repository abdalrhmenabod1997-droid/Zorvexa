import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  const articles = [
    {
      title: "أول مقال في Zorvexa",
      excerpt: "سيتم استبدال هذه البيانات ببيانات MongoDB لاحقًا.",
      category: "تقنية",
      slug: "first-article"
    },
    {
      title: "كيف تبني مشروع احترافي؟",
      excerpt: "أفضل الممارسات لبناء مشروع حديث وقابل للتوسع.",
      category: "برمجة",
      slug: "build-professional-project"
    },
    {
      title: "دليل تحسين SEO",
      excerpt: "أساسيات تحسين ظهور الموقع في محركات البحث.",
      category: "SEO",
      slug: "seo-guide"
    }
  ];

  return (
    <>
      <section className="hero">
        <h1>Zorvexa</h1>

        <p>
          منصة احترافية للمقالات والخدمات الرقمية، سريعة وآمنة ومهيأة لمحركات البحث.
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
              key={article.slug}
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
