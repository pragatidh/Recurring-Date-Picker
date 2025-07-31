import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Recurring Date Picker',
  description: 'A customizable recurring date picker in React',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
