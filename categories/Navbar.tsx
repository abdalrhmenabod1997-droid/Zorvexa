export default function Navbar() {
  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "الذكاء الاصطناعي", href: "/categories/ai" },
    { name: "التقنية", href: "/categories/technology" },
    { name: "البرمجة", href: "/categories/programming" },
    { name: "الأمن السيبراني", href: "/categories/cybersecurity" },
    { name: "من نحن", href: "/about" },
    { name: "تواصل", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-bold text-white">
          Zorvexa
        </a>

        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}