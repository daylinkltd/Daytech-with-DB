import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export default function BlogLayout({ children }) {
  return (
    <>
      <Header/>
        {/* monetag */}
          {/* <meta name="monetag" content="df9f25b09a103e01529ba88d1472167d"/>
          <script src="https://alwingulla.com/88/tag.min.js" data-zone="60637" async data-cfasync="false"></script> */}
        <main>
            {children}
        </main>
      <Footer/>
    </>
  );
}
