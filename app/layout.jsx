import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://carwashsupershine.com"),
  title: "CarWashSuperShine - Car Wash Services",
  description:
    "Super Shine Car Wash & Lube offers car wash, auto detailing, express lube, and preventative maintenance services in Houston, TX.",
  icons: {
    icon: "/carLogo-Picsart-BackgroundRemover.png",
    apple: "/carLogo-Picsart-BackgroundRemover.png",
  },
  openGraph: {
    title: "CarWashSuperShine - Car Wash Services",
    description:
      "Car wash, detailing, and lube services in Houston, TX. Express washes starting at $9.",
    images: ["/carLogo-Picsart-BackgroundRemover.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
