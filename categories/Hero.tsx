export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
          🚀 منصة عربية للمستقبل
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
          Zorvexa
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
          أحدث أخبار الذكاء الاصطناعي، التقنية، البرمجة، الأمن السيبراني،
          والأدوات الرقمية في مكان واحد.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/blog"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700 transition"
          >
            تصفح المقالات
          </a>

          <a
            href="/about"
            className="rounded-xl border border-gray-700 px-8 py-4 hover:border-white transition"
          >
            تعرف علينا
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-gray-800 p-6">
            <h3 className="text-3xl font-bold">AI</h3>
            <p className="text-gray-400 mt-2">الذكاء الاصطناعي</p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <h3 className="text-3xl font-bold">Tech</h3>
            <p className="text-gray-400 mt-2">التقنية</p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <h3 className="text-3xl font-bold">Code</h3>
            <p className="text-gray-400 mt-2">البرمجة</p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <h3 className="text-3xl font-bold">Cyber</h3>
            <p className="text-gray-400 mt-2">الأمن السيبراني</p>
          </div>
        </div>
      </div>
    </section>
  );
}