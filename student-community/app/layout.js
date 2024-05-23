import "./globals.css";
import NavBar from "@/Components/Nav";

export const metadata = {
  title: "Student-community App",
  description: "Created to help in marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        </body>
    </html>
  );
}
