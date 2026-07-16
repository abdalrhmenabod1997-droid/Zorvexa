import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="container" style={{ padding: "40px 20px" }}>
        {children}
      </main>
    </>
  );
}
