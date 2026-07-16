type ArticleCardProps = {
  title: string;
  description: string;
  category: string;
  date: string;
};

export default function ArticleCard({
  title,
  description,
  category,
  date,
}: ArticleCardProps) {
  return (
    <article className="rounded-2xl border border-gray-800 bg-zinc-900 overflow-hidden hover:border-blue-500 transition">
      <div className="h-52 bg-gradient-to-r from-blue-700 to-cyan-500"></div>

      <div className="p-6">
        <span className="text-blue-400 text-sm">{category}</span>

        <h2 className="mt-3 text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-3 text-gray-400">
          {description}
        </p>

        <div className="mt-6 flex justify-between items-center">
          <span className="text-gray-500 text-sm">{date}</span>

          <a
            href="/blog"
            className="text-blue-400 hover:text-blue-300"
          >
            اقرأ المزيد →
          </a>
        </div>
      </div>
    </article>
  );
}