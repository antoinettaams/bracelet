/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQ } from '../types';

export default function FaqSection() {
  const faqs: FAQ[] = [
    {
      id: "faq1",
      question: "Comment fonctionne le Paiement à la Livraison ?",
      answer: "C'est l'un des moyens de paiement les plus sûrs et confortables existants ! Vous saisissez votre adresse et votre téléphone. Nous expédions votre colis par notre transporteur partenaire local. Vous ne payez qu'au moment de recevoir vos bracelets de la part du livreur, en espèces."
    },
    {
      id: "faq2",
      question: "Quel est le délai de livraison ?",
      answer: "Les commandes sont traitées et emballées dans les 12 heures suivant l'appel de confirmation. Le colis est ensuite livré chez vous sous 24h à 48h selon votre ville. La livraison est entièrement gratuite à Cotonou et Calavi, et de seulement 1 500 FCFA pour le reste des villes du Bénin."
    },
    {
      id: "faq3",
      question: "Les bracelets changent-ils de couleur ou s'oxydent-ils ?",
      answer: "Non, absolument pas. Plus qu'un simple plaquage traditionnel, nous appliquons un dépôt physique par faisceau d'ions (technologie PVD) sous vide d'Or Jaune 18 carats sur de l'acier chirurgical 316L. Vos bracelets résistent sans problème à l'eau de douche et à la sueur quotidienne sans s'écailler."
    },
    {
      id: "faq4",
      question: "Le set est-il adapté aux petits poignets ?",
      answer: "Oui, tout à fait. L'ensemble a été conçu spécifiquement pour être universel. Le jonc plat rigide peut être légèrement resserré par pression douce sur les rebords, et la tresse ainsi que la chaîne serpent disposent d'une rallonge à mousqueton de 4 cm qui permet un ajustement ultra précis."
    },
    {
      id: "faq5",
      question: "Puis-je commander pour faire un cadeau ?",
      answer: "Oui ! Chaque commande du Bracelet Éclat est envoyée dans une magnifique pochette cadeau en coton élégant. C'est le présent idéal. Commandez simplement avec l'adresse du destinataire et son numéro de téléphone !"
    }
  ];

  const [openFaq, setOpenFaq] = useState<string | null>("faq1"); // First is opened by default

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-16 bg-white border-t border-stone-200/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <HelpCircle className="w-8 h-8 mx-auto text-[#a88147]" />
          <h2 className="text-3xl font-serif text-stone-900">
            Foire Aux Questions
          </h2>
          <p className="text-stone-500 text-sm">
            Vous avez des questions sur nos bijoux ou la livraison ? Trouvez vos réponses ici ou demandez-nous par téléphone lors de l'appel de confirmation de commande !
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4 max-w-3xl mx-auto text-left">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div 
                key={faq.id} 
                className="border border-stone-200 rounded-2xl overflow-hidden bg-[#faf8f5]/50 hover:bg-[#faf8f5] transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif text-[15px] font-medium text-stone-900 cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-200/40 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
