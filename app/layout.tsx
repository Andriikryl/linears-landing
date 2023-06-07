import { Container } from "@/components/Container";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          <main className="pt-[var(--navigation-height)]">{children}</main>
          <footer>
            <Container>footer heare</Container>
          </footer>
        </div>
      </body>
    </html>
  );
}
