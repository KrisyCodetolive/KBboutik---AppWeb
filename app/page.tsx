"use client";

import Cardre from "@/components/Cardre";
import { DescriptionCard } from "@/components/DescCart";
import ProductMedia from "@/components/ProductMedia";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Contenu de la page (vide pour le moment) */}
      <div 
      className="p-5 max-h-[500px] overflow-auto  flex flex-col gap-5"
    //   style={{
    // boxShadow: "inset 0 -4px 6px -2px rgba(0,0,0,0.5)"
    // }}
      >
        {/* cover */}
        <ProductMedia
          type="image"
          src=""
          alt="Chaussure KBboutik"
        />

        {/* metaData */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="flex flex-col gap-0.5">
              <h1 className="font-bold">Lieu de vente</h1>
              <p className="text-gray-500 text-sm">Yopougon - permis</p>
            </span>
            <Cardre quantité="24"/>
          </div>
          <DescriptionCard title="description" description={"KBboutik est une boutique dédiée aux passionnés de sneakers. Nous proposons des produits de qualité, soigneusement sélectionnés pour satisfaire tous les amateurs de chaussures."} />
        </div>
      </div>

      {/* CTA FIXE */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 p-5">
        <button
          onClick={() => {
            console.log("Passer commande");
          }}
          className="
            bg-purple-600 
            text-white 
            w-full
            text-lg 
            font-semibold 
            px-8 
            py-4 
            rounded-full 
            shadow-lg 
            hover:bg-purple-700 
            transition 
            active:scale-95 
            active:bg-gray-500
          "
        >
          Passer commande
        </button>
      </div>
    </div>
  );
}
