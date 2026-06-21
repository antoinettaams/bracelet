/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  Compass, 
  Sparkles, 
  CheckCircle, 
  Timer, 
  ThumbsUp, 
  Phone, 
  MapPin, 
  ExternalLink,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { Order } from './types';
import ProductHero from './components/ProductHero';
import ProductSpecs from './components/ProductSpecs';
import ReviewsSection from './components/ReviewsSection';
import OrderForm from './components/OrderForm';
import FaqSection from './components/FaqSection';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  const [submittedOrder, setSubmittedOrder] = useState<Order | null>(null);
  const [liveNotification, setLiveNotification] = useState<string | null>(null);

  // Smooth scroll helper
  const handleScrollToOrder = () => {
    document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOrderSuccess = (newOrder: Order) => {
    setSubmittedOrder(newOrder);
  };

  return (
    <div className="min-h-screen flex flex-col antialiased bg-[#faf8f5] text-stone-900 scroll-smooth selection:bg-[#c5a46e]/30 selection:text-stone-900">
      
      {/* LUXURY SCROLLING ANNOUNCEMENT BAR */}
      <div className="bg-stone-950 text-stone-200 text-[11px] font-mono py-2.5 px-4 overflow-hidden border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center sm:px-6">
          <div className="flex items-center gap-1.5 font-semibold text-amber-400">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            PROMOTION : -50% AUJOURD'HUI SEULEMENT
          </div>
          <p className="hidden md:block">📦 Livraison Gratuite à Cotonou & Calavi • Paiement à la Livraison</p>
          <p className="font-semibold text-stone-100 uppercase tracking-wider text-[10px]">Payer à la Réception</p>
        </div>
      </div>

      {/* LUXURY EDITORIAL HEADER */}
      <header className="sticky top-0 z-35 bg-[#faf8f5]/90 backdrop-blur-md border-b border-stone-200/40 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#a88147]" />
            <span className="font-serif text-lg tracking-widest uppercase font-semibold text-stone-950">
              Bracelet Éclat
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-mono text-stone-600 font-medium">
            <a href="#hero-section" className="hover:text-[#a88147] transition-colors">Modèle</a>
            <a href="#features" className="hover:text-[#a88147] transition-colors">Matériaux</a>
            <a href="#reviews" className="hover:text-[#a88147] transition-colors">Avis</a>
            <a href="#faq-section" className="hover:text-[#a88147] transition-colors">FAQ</a>
          </nav>

          <button
            onClick={handleScrollToOrder}
            className="flex items-center gap-2 bg-stone-900 hover:bg-stone-850 text-white font-mono text-[10px] uppercase font-semibold tracking-widest px-4 py-2 rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Commander
          </button>
        </div>
      </header>

      {/* CONVERSION-ORIENTED SOCIAL ALERTS (Toast bottom-left) */}
      {liveNotification && (
        <div className="fixed bottom-6 left-6 z-50 bg-white border border-stone-200 p-4 rounded-xl shadow-lg flex items-center gap-3 max-w-sm hover:opacity-10 opacity-100 transition-opacity animate-fade-in">
          <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center font-bold text-lg text-amber-700">
            ✉
          </div>
          <div className="text-xs">
            <p className="font-medium text-stone-900">{liveNotification}</p>
            <span className="text-[10px] text-stone-400 font-mono">Il y a un instant</span>
          </div>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="flex-1">
        
        {submittedOrder ? (
          /* CONGRATULATIONS & REALISTIC LIVE TRACKING AREA */
          <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-8 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-[#a88147]">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-[#a88147] font-bold">Commande Enregistrée avec succès</p>
              <h1 className="text-3xl sm:text-4.5xl font-serif text-stone-950 font-normal">
                Merci pour votre commande, {submittedOrder.fullName} !
              </h1>
              <p className="text-stone-500 text-sm max-w-lg mx-auto leading-relaxed">
                Votre commande a bien été reçue. Notre livreur va préparer votre colis de bracelets immédiatement.
              </p>
            </div>

            {/* Tracking Progress Pipelines */}
            <div className="bg-white p-6 rounded-3xl border border-stone-200/60 shadow-xs text-left space-y-5">
              <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-stone-950 flex items-center justify-between border-b border-stone-150 pb-3">
                <span>Régler seulement à la réception</span>
                <span className="text-amber-700">{submittedOrder.id}</span>
              </h3>

              <div className="space-y-6 pt-2">
                {/* Step 1: Registered */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-[#c5a46e] text-white flex items-center justify-center text-xs font-bold font-mono">✓</div>
                    <div className="w-0.5 h-10 bg-[#c5a46e]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">1. Commande reçue</h4>
                    <p className="text-[11px] text-stone-500 mt-0.5">La commande a été ajoutée à notre liste de distribution au Bénin.</p>
                  </div>
                </div>

                {/* Step 2: Verification call */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-[#faf8f5] border border-[#c5a46e] text-[#a88147] flex items-center justify-center text-xs font-bold animate-pulse">
                      <Phone className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <div className="w-0.5 h-10 bg-stone-250" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                      2. Appel de confirmation rapide
                      <span className="text-[9px] font-mono text-amber-700 bg-amber-50 px-2 py-0.2 rounded-md font-semibold animate-pulse">En cours d'appel</span>
                    </h4>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Notre équipe va vous passer un appel rapide d'une minute sur votre numéro <strong>{submittedOrder.phone}</strong> aujourd'hui pour fixer l'heure exacte de livraison avec vous.
                    </p>
                  </div>
                </div>

                {/* Step 3: Fast shipping */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-stone-100 border border-stone-150 text-stone-400 flex items-center justify-center text-xs font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">3. Livraison à domicile & Règlement</h4>
                    <p className="text-[11px] text-stone-400 mt-0.5">Le livreur se rend à votre adresse à Cotonou ou environs sous 24h. Vous inspectez le colis et vous payez en espèces.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recipient invoice summary details */}
            <div className="bg-[#faf8f5] p-6 rounded-2xl border border-stone-200/50 text-left text-xs text-stone-700 space-y-3">
              <h3 className="font-semibold text-stone-900 text-[11px] uppercase tracking-wider font-mono">Destinataire et Adresse</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="space-y-1">
                  <p className="text-stone-500">Nom & Prénom :</p>
                  <p className="font-medium text-stone-900 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-stone-500" />
                    {submittedOrder.fullName}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-stone-500">Ville & Quartier :</p>
                  <p className="font-medium text-stone-900 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-stone-500" />
                    {submittedOrder.address}, {submittedOrder.city} (Bénin)
                  </p>
                </div>
              </div>

              <div className="border-t border-stone-200/60 pt-3 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-stone-900">Produit commandé :</p>
                  <p className="text-stone-500 text-[11px]">{submittedOrder.quantity} ensemble(s) Bracelet Éclat</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-stone-900">Total à payer au livreur :</p>
                  <p className="font-serif font-bold text-[#a88147] text-base">{submittedOrder.totalPrice.toLocaleString('fr-FR')} FCFA</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button
                onClick={() => setSubmittedOrder(null)}
                className="bg-stone-900 hover:bg-stone-850 text-white font-mono text-[11px] uppercase font-bold tracking-widest py-3.5 px-6 rounded-xl transition-all cursor-pointer"
              >
                Passer une autre commande
              </button>
              <a
                href="#hero-section"
                onClick={() => setSubmittedOrder(null)}
                className="text-stone-600 hover:text-stone-900 text-xs font-semibold underline flex items-center gap-1"
              >
                Retourner à la page produit
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ) : (
          /* STANDARD PROMOTE LANDING PAGE LAYOUT */
          <>
            <ProductHero onOrderClick={handleScrollToOrder} />
            <ProductSpecs />
            <ReviewsSection />
            <OrderForm onOrderSuccess={handleOrderSuccess} />
            <FaqSection />
            <FloatingCTA onOrderClick={handleScrollToOrder} />
          </>
        )}

      </main>

      {/* LUXURY EDITORIAL FOOTER - ALIGNÉ À GAUCHE SUR MOBILE */}
      <footer className="bg-stone-950 text-stone-400 py-12 px-4 sm:px-6 mt-16 border-t border-stone-850">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Colonne 1 - Brand */}
          <div className="space-y-4">
            <h4 className="font-serif text-white tracking-widest uppercase font-semibold text-sm">Bracelet Éclat</h4>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Des créations simples et distinguées pour illuminer vos tenues. Un ensemble de 3 bracelets dorés qui allient discrétion et brillance.
            </p>
          </div>

          {/* Colonne 2 - Garanties */}
          <div className="space-y-4">
            <h4 className="font-serif text-white tracking-widest uppercase font-semibold text-sm">Garanties & Confiance</h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <p className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-500 shrink-0" />
                Livraison gratuite à Cotonou et partout au Bénin
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                Matériaux durables de qualité supérieure
              </p>
              <p className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-amber-500 shrink-0" />
                Paiement à la livraison après inspection de votre colis
              </p>
            </div>
          </div>

          {/* Colonne 3 - Service Clients */}
          <div className="space-y-4">
            <h4 className="font-serif text-white tracking-widest uppercase font-semibold text-sm">Service Clients</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Une question ? Notre équipe vous appelle rapidement pour valider votre adresse de livraison. Assistance WhatsApp disponible.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/2290153998359"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4.5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Discuter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
