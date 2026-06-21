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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-lg bg-black/90 backdrop-blur-md rounded-2xl border border-stone-850 p-3 shadow-xl flex items-center justify-between gap-4 animate-fade-in">
      <div className="flex items-center gap-2.5">
        <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 shrink-0">
          <img 
            src={thumbnailImage} 
            alt="Bracelet Éclat thumbnail" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h4 className="text-white text-xs font-serif font-medium leading-tight">Bracelet Éclat</h4>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[#c5a46e] text-xs font-bold">5 000 FCFA</span>
            <span className="text-stone-400 line-through text-[10px] font-light">7 000 FCFA</span>
            <span className="bg-red-950/40 text-red-400 text-[8px] font-mono px-1 rounded-sm border border-red-900/40 font-bold uppercase tracking-wider">
              -50%
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={onOrderClick}
        className="bg-[#c5a46e] hover:bg-[#a88147] active:scale-95 text-white font-semibold py-2.5 px-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Commander
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
