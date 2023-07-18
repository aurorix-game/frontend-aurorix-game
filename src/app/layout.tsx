import '@/styles/global.css';
import ThemeRegistry from '@/styles/theme-register';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Aurorix',
    template: '%s | Aurorix',
  },
  description: 'Aurorix Game',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
