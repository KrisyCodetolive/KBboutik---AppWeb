import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) 
    { 


  return ( 
  <html lang="fr"> 
    <body className="flex flex-col min-h-screen relative"> 
      <main className="flex-grow">{children}</main> 
    </body> 
  </html> ); }