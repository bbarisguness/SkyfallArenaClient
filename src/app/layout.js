import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/customStyles.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import OtherComponents from "@/components/otherComponents";
import { Providers } from "@/store/provider";
import store from "@/store";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Providers store={store}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
          <OtherComponents />
        </body>
      </html>
    </Providers>
  );
}
