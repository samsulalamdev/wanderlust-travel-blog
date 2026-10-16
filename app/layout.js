import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Wanderlust | A Bangladesh Travel Blog",
    template: "%s | Wanderlust",
  },
  description: "A travel blog about beaches, hills, forests and tea gardens in Bangladesh. A practice project built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
