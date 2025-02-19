import "../app/globals.css";
import Navbar from './compents/navbar';

export const metadata = {
  title: "Dashboard",
  description: "Dashboard dengan Navigasi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-100">
        <Navbar />
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}