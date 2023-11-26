import type { Metadata } from "next";
import Providers from "@/utils/providers";
import Header from "@/components/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppInit from "@/components/AppInit";

export const metadata: Metadata = {
  title: "Beta Limited Assignment",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <AppInit />
          {children}
        </Providers>
      </body>
    </html>
  );
}
