import Navbar from './components/NavBar';
import './globals.css';

export const metadata = {
  title: 'KBboutik',
  description: 'Application KBboutik',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen relative">
        <Navbar/>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
