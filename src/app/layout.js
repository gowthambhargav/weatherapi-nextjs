export const metadata = {
  title: "WeatherAPP By GB",
  description: "Generated by MrGB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-800">{children}</body>
    </html>
  );
}
