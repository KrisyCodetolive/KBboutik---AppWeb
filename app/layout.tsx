"use client";

import Ordercta from '@/components/btnPasserCommande';
import Navbar from './components/NavBar';
import './globals.css';
import { OrderSheet } from '@/components/OrderSheet';
import { useEffect, useState } from 'react';
import { Product } from '@/lib/type';
import { getProducts } from '@/services/products';

// export const metadata = {
//   title: 'KBboutik',
//   description: 'Application KBboutik',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.error("Erreur chargement produits", error)
        // alert("Erreur chargement produits")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <p className="text-center mt-10">Chargement...</p>
  }
  
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen relative">
        <Navbar/>
        <main className="flex-grow">{children}</main>
        <OrderSheet priceUnit={10000} nomProduit={"habits"}>
          <Ordercta/>
        </OrderSheet>
      </body>
    </html>
  );
}
