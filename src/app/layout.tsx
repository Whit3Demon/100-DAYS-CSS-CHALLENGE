import type { Metadata } from 'next';

import '@styles/reset.scss';
import '@styles/globals.scss';

export const metadata: Metadata = {
  title: 'New template',
  description: 'template for new next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
