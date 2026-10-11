import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Chính Sách Quyền Riêng Tư (Privacy Policy) | Google Play Console Ready",
  description: "Trang chính sách quyền riêng tư chính thức chuẩn Google Play Developer Policy, minh bạch dữ liệu theo quy định Google Play Data Safety, COPPA và GDPR.",
  keywords: [
    "Privacy Policy",
    "Chính sách quyền riêng tư",
    "Google Play Console",
    "Data Safety",
    "Game Privacy Policy",
    "COPPA",
    "Google AdMob Privacy"
  ],
  authors: [{ name: "Indie Game Developer" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Chính Sách Quyền Riêng Tư - Mobile Game Privacy Policy",
    description: "Chính sách quyền riêng tư và cam kết an toàn dữ liệu người chơi theo tiêu chuẩn Google Play Store.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
