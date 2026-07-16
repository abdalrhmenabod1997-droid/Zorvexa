export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-white text-xl font-bold">Zorvexa</h3>
          <p className="mt-2">
            منصة عربية متخصصة في الذكاء الاصطناعي والتقنية.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="/about">من نحن</a>
          <a href="/contact">تواصل</a>
          <a href="/privacy">سياسة الخصوصية</a>
          <a href="/terms">شروط الاستخدام</a>
        </div>
      </div>
    </footer>
  );
}