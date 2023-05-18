import './globals.css';
import { Inter } from 'next/font/google';
import { SSTIProvider } from '@/contexts/SSTIContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '나에게 맞는 삼성 디바이스는?',
  description: 'MBTI 대신 SSTI(SamSung Type Indicator) 어때요',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <SSTIProvider>{children}</SSTIProvider>
      </body>
    </html>
  );
}
