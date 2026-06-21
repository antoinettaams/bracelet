/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Package, Truck, ShieldCheck, ShoppingBag, Landmark, PhoneCall } from 'lucide-react';
import { OrderInput, Order } from '../types';

interface OrderFormProps {
  onOrderSuccess: (order: Order) => void;
}

export default function OrderForm({ onOrderSuccess }: OrderFormProps) {
  // Volume offers
  const offers = [
    {
      id: 1,
      quantity: 1,
      title: "1 Ensemble de 3 Bracelets (Avec son pochon de rangement)",
      price: 5000,
      badge: "Offre Solo",
      discountText: "Pochette en coton & Livraison Gratuite (Cotonou & Calavi)",
      popular: false
    },
    {
      id: 2,
      quantity: 2,
      title: "2 Ensembles de 3 Bracelets (Idéal pour offrir !)",
      price: 9000,
      badge: "Recommandé / Duo Complice",
      discountText: "Deux pochettes incluses • Livraison Gratuite (Cotonou & Calavi)",
      popular: true
    },
    {
      id: 3,
      quantity: 3,
      title: "3 Ensembles de 3 Bracelets (Le maxi partage)",
      price: 12000,
      badge: "Super Aubaine",
      discountText: "Trois pochettes incluses • Livraison Gratuite (Cotonou & Calavi)",
      popular: false
    }
  ];

  const [selectedOffer, setSelectedOffer] = useState(offers[1]); // Preselect the 2 Sets Best Seller !
  const [colorChoice, setColorChoice] = useState('1_gold_1_silver');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOfferSelect = (offer: typeof offers[0]) => {
    setSelectedOffer(offer);
    if (offer.quantity === 1) {
      setColorChoice('gold');
    } else if (offer.quantity === 2) {
      setColorChoice('1_gold_1_silver');
    } else if (offer.quantity === 3) {
      setColorChoice('2_gold_1_silver');
    }
  };

  const calculateDeliveryFee = (selectedCity: string) => {
    if (!selectedCity) return 0;
    return (selectedCity === 'Cotonou' || selectedCity === 'Abomey-Calavi') ? 0 : 1500;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address || !city) return;

    setIsSubmitting(true);

    const deliveryFee = calculateDeliveryFee(city);
    const finalPrice = selectedOffer.price + deliveryFee;

    // Simulate database write / api proxy turnaround
    setTimeout(() => {
      const simulatedOrder: Order = {
        id: `CMD-${Math.floor(100000 + Math.random() * 900000)}`,
        fullName,
        phone,
        address,
        city,
        quantity: selectedOffer.quantity,
        totalPrice: finalPrice,
        deliveryNotes: `${notes ? notes + ' | ' : ''}Couleurs envoyées : ${colorChoice}`,
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      onOrderSuccess(simulatedOrder);
      setIsSubmitting(false);

      // Scroll smoothly to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <section id="order-section" className="py-16 bg-white border-t border-stone-200/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header decoration */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#a88147] font-semibold bg-amber-50 px-3 py-1 rounded-full inline-block border border-amber-100/60">
            Formulaire Rapide de Commande
          </span>
          <h2 className="text-3xl font-serif text-stone-900">
            Finaliser ma Commande
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm">
            Remplissez le formulaire ci-dessous. La livraison est <strong>gratuite à Cotonou et Calavi</strong>. Pour les autres villes, un tarif forfaitaire d'envoi s'applique. Vous réglez directement le livreur par espèce lors de la remise de votre colis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* STEP 1: Buy Options (Left column if grid or top) */}
          <div className="lg:col-span-12 space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-950 font-mono flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#121212] text-white text-[10px] font-mono">1</span>
              Étape 1 : Choisissez votre Formule
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {offers.map((offer) => (
                <button
                  key={offer.id}
                  type="button"
                  onClick={() => handleOfferSelect(offer)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between cursor-pointer ${
                    selectedOffer.id === offer.id
                      ? 'border-[#c5a46e] bg-amber-50/20 ring-1 ring-[#c5a46e] shadow-xs'
                      : 'border-stone-200 hover:border-stone-300 bg-[#faf8f5]/50'
                  }`}
                >
                  {offer.popular && (
                    <span className="absolute -top-2.5 right-6 bg-amber-900 text-white text-[9px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                      Meilleur Choix (-56%)
                    </span>
                  )}
                  <div className="flex items-start gap-3.5 pr-2 mb-4">
                    <div className="flex items-center justify-center mt-1">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        selectedOffer.id === offer.id 
                          ? 'border-amber-600 bg-amber-600 text-white' 
                          : 'border-stone-300 bg-white'
                      }`}>
                        {selectedOffer.id === offer.id && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[14px] font-bold text-stone-900 leading-snug">
                        {offer.title}
                      </h4>
                      <p className="text-[11px] text-[#a88147] font-semibold mt-0.5 font-sans">
                        {offer.discountText}
                      </p>
                    </div>
                  </div>

                  <div className="text-left mt-auto pt-2 border-t border-stone-200/50 w-full flex justify-between items-baseline font-mono text-xs text-stone-500">
                    <span>Prix promo</span>
                    <span className="text-lg font-serif font-bold text-stone-900 block">
                      {offer.price.toLocaleString('fr-FR')} FCFA
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* COLOR SELECTION FOR ORDERED ENSEMBLES */}
            <div className="bg-[#fffdfa] p-5 rounded-2xl border border-[#c5a46e]/30 shadow-2xs space-y-3">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono flex items-center gap-1.5">
                🎨 Personnalisation des Couleurs :
              </h4>
              <p className="text-stone-500 text-xs">
                Sélectionnez la combinaison de couleurs souhaitée pour vos {selectedOffer.quantity} {selectedOffer.quantity > 1 ? "ensembles" : "ensemble"} :
              </p>

              {selectedOffer.quantity === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setColorChoice('gold')}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      colorChoice === 'gold'
                        ? 'border-[#a88147] bg-[#a88147]/5 text-[#a88147] ring-1 ring-[#a88147] font-semibold'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600 bg-white'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-amber-400 border border-amber-600/30 inline-block" />
                    1x Ensemble Or Doré
                  </button>
                  <button
                    type="button"
                    onClick={() => setColorChoice('silver')}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      colorChoice === 'silver'
                        ? 'border-stone-800 bg-stone-50 text-stone-950 ring-1 ring-stone-950 font-semibold'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600 bg-white'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-[#e2e2e2] border border-stone-300 inline-block" />
                    1x Ensemble Argenté
                  </button>
                </div>
              )}

              {selectedOffer.quantity === 2 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setColorChoice('1_gold_1_silver')}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      colorChoice === '1_gold_1_silver'
                        ? 'border-[#a88147] bg-[#a88147]/5 text-[#a88147] ring-1 ring-[#a88147] font-semibold'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600 bg-white'
                    }`}
                  >
                    <span className="flex gap-0.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500/30 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e2e2e2] border border-stone-300 inline-block" />
                    </span>
                    1 Or Doré + 1 Argenté
                  </button>
                  <button
                    type="button"
                    onClick={() => setColorChoice('2_gold')}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      colorChoice === '2_gold'
                        ? 'border-[#a88147] bg-[#a88147]/5 text-[#a88147] ring-1 ring-[#a88147] font-semibold'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600 bg-white'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/30 inline-block shrink-0" />
                    2 Ensembles Or Doré
                  </button>
                  <button
                    type="button"
                    onClick={() => setColorChoice('2_silver')}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      colorChoice === '2_silver'
                        ? 'border-stone-800 bg-stone-50 text-stone-950 ring-1 ring-stone-950 font-semibold'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600 bg-white'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-[#e2e2e2] border border-stone-300 inline-block shrink-0" />
                    2 Ensembles Argenté
                  </button>
                </div>
              )}

              {selectedOffer.quantity === 3 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <button
                    type="button"
                    onClick={() => setColorChoice('2_gold_1_silver')}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      colorChoice === '2_gold_1_silver'
                        ? 'border-[#a88147] bg-[#a88147]/5 text-[#a88147] ring-1 ring-[#a88147] font-semibold'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600 bg-white'
                    }`}
                  >
                    <span className="flex gap-0.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500/30 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500/30 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e2e2e2] border border-stone-300 inline-block" />
                    </span>
                    2 Or Doré + 1 Argenté
                  </button>
                  <button
                    type="button"
                    onClick={() => setColorChoice('1_gold_2_silver')}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      colorChoice === '1_gold_2_silver'
                        ? 'border-[#a88147] bg-[#a88147]/5 text-[#a88147] ring-1 ring-[#a88147] font-semibold'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600 bg-white'
                    }`}
                  >
                    <span className="flex gap-0.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500/30 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e2e2e2] border border-stone-300 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e2e2e2] border border-stone-300 inline-block" />
                    </span>
                    1 Or Doré + 2 Argentés
                  </button>
                  <button
                    type="button"
                    onClick={() => setColorChoice('3_gold')}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      colorChoice === '3_gold'
                        ? 'border-[#a88147] bg-[#a88147]/5 text-[#a88147] ring-1 ring-[#a88147] font-semibold'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600 bg-white'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/30 inline-block shrink-0" />
                    3 Ensembles Or Doré
                  </button>
                  <button
                    type="button"
                    onClick={() => setColorChoice('3_silver')}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      colorChoice === '3_silver'
                        ? 'border-stone-800 bg-stone-50 text-stone-950 ring-1 ring-stone-950 font-semibold'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600 bg-white'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-[#e2e2e2] border border-stone-300 inline-block shrink-0" />
                    3 Ensembles Argenté
                  </button>
                </div>
              )}
            </div>

            {/* Solid assurances layout */}
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/50 space-y-3">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono">Garanties d'Expédition & De Livraison</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600 pt-1">
                <div className="flex items-start gap-2">
                  <Truck className="w-4 h-4 text-[#a88147] shrink-0 mt-0.5" />
                  <span><strong>Port Gratuit :</strong> Livraison 100% offerte à Cotonou et Calavi. Pour les autres villes du Bénin, frais d'envoi forfaitaires de seulement 1 500 FCFA.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#a88147] shrink-0 mt-0.5" />
                  <span><strong>Pochette Cadeau :</strong> Chaque ensemble est livré dans une élégante pochette en coton doux puis mis sous emballage plastifié protecteur.</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2: Checkout Form & Details */}
          <div className="lg:col-span-12 bg-[#faf8f5] p-6 rounded-3xl border border-stone-200/60 shadow-2xs">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-950 font-mono flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#121212] text-white text-[10px] font-mono">2</span>
              Étape 2 : Vos Informations de Livraison au Bénin
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">Votre Nom & Prénom *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex : Carine Tossou"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:outline-hidden focus:ring-1 focus:ring-amber-600 text-stone-900 placeholder:text-stone-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">Numéro de Téléphone (Appel & WhatsApp) *</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 text-xs">
                    📞
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="Ex : +229 97 00 00 00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:outline-hidden focus:ring-1 focus:ring-amber-600 text-stone-900 placeholder:text-stone-400"
                  />
                </div>
                <p className="text-[10px] text-stone-500 font-sans mt-1 leading-snug">
                  * Trés Important : Nous vous contacterons par appel téléphonique court de confirmation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">Ville de Livraison *</label>
                  <select
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:outline-hidden focus:ring-1 focus:ring-amber-600 text-stone-900"
                  >
                    <option value="">-- Sélectionnez votre ville --</option>
                    <option value="Cotonou">Cotonou</option>
                    <option value="Abomey-Calavi">Abomey-Calavi</option>
                    <option value="Porto-Novo">Porto-Novo</option>
                    <option value="Parakou">Parakou</option>
                    <option value="Ouidah">Ouidah</option>
                    <option value="Bohicon">Bohicon</option>
                    <option value="Abomey">Abomey</option>
                    <option value="Natitingou">Natitingou</option>
                    <option value="Lokossa">Lokossa</option>
                    <option value="Kandi">Kandi</option>
                    <option value="Autre">Autre ville du Bénin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">Quartier & Précisions *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Fidjrossè, Cadjehoun, Fifadji..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:outline-hidden focus:ring-1 focus:ring-amber-600 text-stone-900 placeholder:text-stone-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">Notes ou instructions complémentaires (Optionnel)</label>
                <input
                  type="text"
                  placeholder="Ex : Appeler en fin d'après-midi, ou livrer au bureau"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:outline-hidden focus:ring-1 focus:ring-amber-600 text-stone-900 placeholder:text-stone-400"
                />
              </div>

              {/* Order Invoice Details summary */}
              {(() => {
                const deliveryFee = calculateDeliveryFee(city);
                const finalPrice = selectedOffer.price + deliveryFee;
                return (
                  <div className="border-t border-stone-200/80 pt-4 mt-4 space-y-2">
                    <div className="flex justify-between text-xs text-stone-600">
                      <span>Sous-total ({selectedOffer.quantity} {selectedOffer.quantity > 1 ? "ensembles" : "ensemble"})</span>
                      <span>{selectedOffer.price.toLocaleString('fr-FR')} FCFA</span>
                    </div>
                    <div className="flex justify-between text-xs text-stone-600">
                      <span>Frais d'expédition & Livraison</span>
                      {deliveryFee === 0 ? (
                        <span className="text-emerald-700 font-bold uppercase text-[10px] tracking-widest font-mono">Gratuit (Cotonou & Calavi)</span>
                      ) : (
                        <span className="text-stone-900 font-semibold font-mono">{deliveryFee.toLocaleString('fr-FR')} FCFA</span>
                      )}
                    </div>
                    <div className="flex justify-between text-sm text-stone-900 font-bold border-t border-dashed border-stone-200 pt-2">
                      <span>Total à payer au livreur</span>
                      <span className="text-[#a88147] text-base">{finalPrice.toLocaleString('fr-FR')} FCFA</span>
                    </div>
                  </div>
                );
              })()}

              {/* Secure cash on delivery message */}
              <div className="flex items-center gap-2 px-3 py-2 bg-stone-100 border border-stone-200/50 rounded-lg text-[11px] text-stone-600">
                <Landmark className="w-4 h-4 text-stone-500" />
                <span>Paiement en espèces à la livraison. Vous inspectez d'abord vos bracelets.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-[#121212] hover:bg-neutral-800 text-white font-semibold py-4 rounded-xl text-xs uppercase tracking-widest transition-colors shadow-md disabled:bg-neutral-400 cursor-pointer flex items-center justify-center gap-2.5"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    Enregistrement de votre commande...
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4.5 h-4.5" />
                    VALIDER REÇU & COMMANDER SANS ATTENDRE
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
