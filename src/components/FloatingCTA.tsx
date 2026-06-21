/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';

const thumbnailImage = "/src/assets/images/gold_bracelets_display_1782043809762.jpg";

interface FloatingCTAProps {
  onOrderClick: () => void;
}

export default function FloatingCTA({ onOrderClick }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls down past 400px
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] sm:w-[92%] max-w-lg bg-black/90 backdrop-blur-md rounded-2xl border border-stone-850 p-2.5 sm:p-3 shadow-xl flex items-center justify-between gap-2 sm:gap-4 animate-fade-in">
      
      {/* Partie gauche - Image + Infos produit (inchangée) */}
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border border-white/10 shrink-0">
          <img 
            src={thumbnailImage} 
            alt="Bracelet Éclat thumbnail" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-white text-[10px] sm:text-xs font-serif font-medium leading-tight truncate">
            Bracelet Éclat
          </h4>
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 mt-0.5">
            <span className="text-[#c5a46e] text-[10px] sm:text-xs font-bold">
              5 000 FCFA
            </span>
            <span className="text-stone-400 line-through text-[8px] sm:text-[10px] font-light">
              7 000 FCFA
            </span>
            <span className="bg-red-950/40 text-red-400 text-[7px] sm:text-[8px] font-mono px-1 rounded-sm border border-red-900/40 font-bold uppercase tracking-wider">
              -50%
            </span>
          </div>
        </div>
      </div>

      {/* BOUTON COMMANDER - RENDU RESPONSIVE */}
      <button
        onClick={onOrderClick}
        className="
          bg-[#c5a46e] 
          hover:bg-[#a88147] 
          active:scale-95 
          text-white 
          font-semibold 
          py-2 sm:py-2.5 
          px-2.5 sm:px-3.5 
          rounded-xl 
          text-[9px] sm:text-xs 
          uppercase 
          tracking-wider 
          flex 
          items-center 
          gap-1 sm:gap-1.5 
          transition-all 
          shadow-md 
          cursor-pointer 
          shrink-0
        "
      >
        <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        <span>Commander</span>
        <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </button>
    </div>
  );
}