import "./globals.css";


export const metadata = {
  title: "Student-community App",
  description: "Created to help in marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
