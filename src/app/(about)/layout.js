import InsightRoll from "@/src/components/About/InsightRoll";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";


const insights = [
    "Tech Related Blogs",
    "Developed By Daylink",
    "99% Geniune Content",
    "Just A New Tech Blog In the Maket",
    "Authored In-Depth Course on Educative",
    "Contributed as a Technical Course Reviewer 📝",
    "Recipient of the Hackernoon Noonies Award 🏆",
  ];

export default function AboutLayout({ children }) {
  return (
    <>
      <Header/>
        <main className="w-full flex flex-col items-center justify-between">
          <InsightRoll insights={insights} />
          {children}
        </main>
      <Footer/>
    </>
  );
}
