import type { Metadata } from "next";
import Providers from "@/utils/providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
