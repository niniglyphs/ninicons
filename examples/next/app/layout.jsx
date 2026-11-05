import '../style.css';

export const metadata = { title: 'Ninicons · Next.js' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
