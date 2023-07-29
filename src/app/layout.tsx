import ThemeRegistry from '@/config/theme/theme-register';
import { AuthProvider } from '@/providers';
import { ReduxProvider } from '@/providers/redux.provider';
import '@/styles/fonts.css';
import '@/styles/global.css';

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
        <ReduxProvider>
          <AuthProvider>
            <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
