import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.JS Tutorial</title>
        <meta name="description" content="Telman Wisley's portfolio" />
        <meta name='keyword' content='Telman, portfolio, Next.js' />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
