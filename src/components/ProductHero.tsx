/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Star, Sparkles, Clock, Truck, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

const displayImage = "/src/assets/images/gold_bracelets_display_1782043809762.jpg";
const wristImage = "/src/assets/images/gold_bracelets_wrist_1782043825347.jpg";
const silverDisplayImage = "/src/assets/images/silver_bracelets_display_perfect_1782046601088.jpg";
const silverWristImage = "/src/assets/images/silver_bracelets_wrist_perfect_1782046724240.jpg";

interface ProductHeroProps {
  onOrderClick: () => void;
}

export default function ProductHero({ onOrderClick }: ProductHeroProps) {
  const [selectedColor, setSelectedColor] = useState<'gold' | 'silver'>('gold');
  const images = selectedColor === 'gold' 
    ? [displayImage, wristImage] 
    : [silverDisplayImage, silverWristImage];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  // Countdown timer for FOMO
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          // Loop countdown to keep FOMO realistic but evergreen
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="hero-section" className="relative pt-6 pb-12 overflow-hidden">
      {/* Editorial Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-stone-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Gallery & Interactive Visuals */}
          <div className="space-y-6">
            <div className="relative group overflow-hidden rounded-2xl border border-stone-200/50 bg-white p-2 shadow-sm transition-shadow hover:shadow-md">
              <span className="absolute top-4 left-4 z-10 bg-amber-900/90 text-white font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Exclusivité Web — Offre Limitée
              </span>
              
              <div className="aspect-square relative overflow-hidden rounded-xl bg-stone-50">
                <img
                  src={images[activeImageIndex]}
                  alt="L'Ensemble Éternel Gold Bracelets"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Thumbnails indicator overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-full z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeImageIndex === i ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Show image ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Micro Thumbnail Previews */}
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all p-1 bg-white ${
                    activeImageIndex === i 
                      ? 'border-amber-600 scale-[1.02] shadow-sm' 
                      : 'border-transparent opacity-80 hover:opacity-100 hover:scale-[1.01]'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Preview model ${i + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-2 right-2 bg-stone-900/85 text-[9px] font-mono text-white px-1.5 py-0.5 rounded-md">
                    {i === 0 ? "Présentation" : "Porté"}
                  </span>
                </button>
              ))}
            </div>

            {/* Small Trust Snippet under Image */}
            <div className="grid grid-cols-3 gap-2 py-2 text-center text-[11px] text-stone-500 font-medium">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-5 h-5 text-amber-700" />
                <span>Anti-ternissement</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Heart className="w-5 h-5 text-amber-700" />
                <span>Hypoallergénique</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Sparkles className="w-5 h-5 text-amber-700" />
                <span>Plaqué Or 18K fin</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Product Details, Pricing, Urgency, action */}
          <div className="flex flex-col justify-center space-y-7 lg:sticky lg:top-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current text-amber-500" />
                  <Star className="w-4 h-4 fill-current text-amber-500" />
                </div>
                <span className="text-xs text-stone-500 font-medium">
                  4.9/5 • (148 avis vérifiés)
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-semibold text-stone-700 bg-stone-150/80 rounded-full">
                  En Stock
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-serif font-normal tracking-tight leading-tight text-stone-900">
                Bracelet Éclat
              </h1>
              <p className="text-xs font-mono uppercase tracking-widest text-[#a88147] font-medium">
                Trio de Bracelets {selectedColor === 'gold' ? 'Or Doré' : 'Argenté'}
              </p>
            </div>

            {/* Editorial Product Pitch */}
            <p className="text-stone-600 leading-relaxed text-sm">
              Inspiré par la beauté de la simplicité. Ce magnifique trio de bracelets associe trois designs harmonieux : un jonc épuré, une fine maille torsadée et une chaîne délicate. Conçus pour être portés ensemble ou séparément au gré de vos envies quotidiennes.
            </p>

            {/* Color Selection Selector */}
            <div className="space-y-3.5 bg-[#faf8f5] p-4 rounded-2xl border border-stone-200/50">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 font-mono block">
                Sélectionnez votre Couleur :
              </span>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedColor('gold');
                    setActiveImageIndex(0);
                  }}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                    selectedColor === 'gold'
                      ? 'border-[#a88147] bg-white text-[#a88147] ring-1 ring-[#a88147] font-semibold'
                      : 'border-stone-200 hover:border-stone-300 text-stone-600 bg-white'
                  }`}
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-amber-600/30 inline-block shrink-0 shadow-xs" />
                  Or Doré (Plaqué)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedColor('silver');
                    setActiveImageIndex(0);
                  }}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                    selectedColor === 'silver'
                      ? 'border-stone-800 bg-white text-stone-950 ring-1 ring-stone-950 font-semibold'
                      : 'border-stone-200 hover:border-stone-300 text-stone-600 bg-white'
                  }`}
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-[#e2e2e2] border border-stone-300 inline-block shrink-0 shadow-xs" />
                  Argenté (Métal)
                </button>
              </div>
            </div>

            {/* Pricing Section - Highly prominent */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200/60 shadow-xs space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
                      5 000 FCFA
                    </span>
                    <span className="text-stone-400 line-through text-lg font-light">
                      7 000 FCFA
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 font-semibold mt-1">
                    Économisez sur les ensembles (À partir de 5 000 FCFA • Expédition gratuite)
                  </p>
                </div>
                <span className="bg-amber-100/60 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-200/50 uppercase tracking-wider font-mono">
                  PROMO -50%
                </span>
              </div>

              {/* Countdown Urgency Timer */}
              <div className="flex items-center gap-3 px-4 py-2.5 bg-amber-50/60 border border-amber-100 rounded-xl">
                <Clock className="w-4.5 h-4.5 text-[#a88147] animate-pulse" />
                <span className="text-[12px] text-stone-700">
                  Offre limitée se terminant bientôt :
                </span>
                <div className="flex gap-1 font-mono text-[13px] font-bold text-[#121212]">
                  <span className="bg-[#121212] text-white px-2 py-0.5 rounded-md min-w-[24px] text-center">
                    00
                  </span>
                  <span className="text-stone-400">:</span>
                  <span className="bg-[#121212] text-white px-2 py-0.5 rounded-md min-w-[24px] text-center">
                    {formatNumber(timeLeft.minutes)}
                  </span>
                  <span className="text-stone-400">:</span>
                  <span className="bg-[#121212] text-white px-2 py-0.5 rounded-md min-w-[24px] text-center">
                    {formatNumber(timeLeft.seconds)}
                  </span>
                </div>
              </div>

              {/* Delivery info & Cash on Delivery guarantee */}
              <div className="space-y-2 text-xs text-stone-600 border-t border-stone-100 pt-3">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-stone-900" />
                  <span><strong>Livraison Gratuite :</strong> Offerte à Cotonou et Calavi (et envoi rapide partout au Bénin).</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-stone-900" />
                  <span><strong>Paiement à la Livraison :</strong> Commandez maintenant, payez seulement à la livraison.</span>
                </div>
              </div>
            </div>

            {/* Main Action Button */}
            <div className="space-y-4">
              <button
                onClick={onOrderClick}
                className="w-full relative group bg-[#c5a46e] hover:bg-[#a88147] text-white font-medium py-4 px-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2.5 overflow-hidden text-sm sm:text-base cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2 font-semibold uppercase tracking-wider">
                  Commander — Payer à la Livraison
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-[150%]" />
              </button>

              {/* Social Proof Alerts */}
              <div className="flex items-center justify-center gap-2 text-xs text-stone-500">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a46e]"></span>
                </span>
                <span><strong>15 personnes</strong> consultent cette page actuellement</span>
              </div>
            </div>

            {/* Highlights bullet list */}
            <div className="border-t border-stone-200/80 pt-6 space-y-3.5 text-sm">
              <h3 className="font-semibold text-stone-950 text-xs uppercase tracking-widest font-mono">Pourquoi Choisir le Bracelet Éclat ?</h3>
              <ul className="space-y-2.5 text-stone-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-bold mt-0.5">✔</span>
                  <span><strong>Style Épuré :</strong> Composé de 3 styles complémentaires fins indispensables pour illuminer vos tenues de tous les jours.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-bold mt-0.5">✔</span>
                  <span><strong>Qualité Durable :</strong> Conçus pour résister au quotidien sans ternir rapidement, parfaits pour un style de vie actif.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-600 font-bold mt-0.5">✔</span>
                  <span><strong>Ajustement Confortable :</strong> Grâce à leur structure souple légèrement adaptable, ils conviennent parfaitement à tous les poignets.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
