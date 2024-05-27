import Navbar from "@/src/components/Dashboard/Navbar";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export default function DashLayout({ children }) {
  return (
    <>
      <Navbar/>
        <main className="border-dark dark:border-light text-dark dark:text-light">
            {children}
        </main>
    </>
  );
}
