import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export default function TagsLayout({ children }) {
  return (
    <>
      <Header/>
        <main>
            {children}
        </main>
      <Footer/>
    </>
  );
}
