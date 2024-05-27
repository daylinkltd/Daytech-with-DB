import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export default function PrivacyLayout({ children }) {
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
