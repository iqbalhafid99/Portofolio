import Navbar from "./components/Nav";
import "./globals.css";
export const metadata = {
  title: "Iqbal Hafid",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
