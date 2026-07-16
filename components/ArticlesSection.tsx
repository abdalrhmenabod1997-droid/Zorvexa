import ArticleCard from "./ArticleCard";

const articles = [
  {
    title: "أفضل أدوات الذكاء الاصطناعي في 2026",
    description: "دليل شامل لأقوى أدوات الذكاء الاصطناعي التي تغير طريقة العمل.",
    category: "الذكاء الاصطناعي",
    date: "16 يوليو 2026",
  },
  {
    title: "كيف تبدأ تعلم البرمجة من الصفر",
    description: "خارطة طريق عملية لتصبح مطورًا محترفًا.",
    category: "البرمجة",
    date: "16 يوليو 2026",
  },
  {
    title: "أهم تهديدات الأمن السيبراني هذا العام",
    description: "تعرف على أحدث الهجمات وطرق الحماية.",
    category: "الأمن السيبراني",
    date: "16 يوليو 2026",
  },
];

export default function ArticlesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10">آخر المقالات</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>
    </section>
  );
}