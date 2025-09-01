import { lufga } from "./fonts/fonts";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={`relative bg-[#040404] font-sans text-white ${lufga.variable}`}
    >
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
