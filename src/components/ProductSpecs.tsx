/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Sparkles, Sliders, Gem } from 'lucide-react';

export default function ProductSpecs() {
  const pieces = [
    {
      name: "Le Jonc Plat Épuré",
      description: "Un bracelet rigide structuré doté d'une finition satinée haut de gamme. Bords polis lisses pour un confort optimal tout au long de la journée.",
      thickness: "4.0 mm d'épaisseur",
      style: "Moderne & Architectural"
    },
    {
      name: "La Tresse Torsadée",
      description: "Une élégante maille torsadée d'allure vintage qui renvoie le reflet de la lumière sous tous les angles. Apporte du rythme et du relief au set.",
      thickness: "2.5 mm d'épaisseur",
      style: "Romantique & Classique"
    },
    {
      name: "La Chaîne Serpent Noeudh",
      description: "Une maille chevron ultra-flexible qui s'enroule délicatement autour du poignet. Une fluidité et une brillance miroitante exceptionnelles.",
      thickness: "1.8 mm d'épaisseur",
      style: "Ultra-fluide & Sophistiqué"
    }
  ];

  return (
    <section id="features" className="py-16 bg-white border-y border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#a88147] font-semibold">Un Savoir-Faire Épuré</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-stone-900">
            Détail des 3 Bracelets de l'Ensemble
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed">
            Chaque bracelet possède sa propre ligne épurée, façonnée pour composer l'harmonie parfaite lorsqu'ils sont assemblés, ou pour briller subtilement de façon isolée.
          </p>
        </div>

        {/* 3 Pieces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pieces.map((piece, i) => (
            <div 
              key={i} 
              className="p-6 rounded-2xl bg-[#faf8f5] border border-stone-200/40 relative shadow-xs hover:shadow-md hover:border-amber-600/30 transition-all duration-300 group"
            >
              <div className="absolute top-4 right-4 text-xs font-mono font-bold text-stone-300 group-hover:text-amber-600/50 transition-colors">
                PC0{i + 1}
              </div>
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-stone-200/50 shadow-xs mb-5 text-[#a88147]">
                {i === 0 ? <Gem className="w-5 h-5" /> : i === 1 ? <Sparkles className="w-5 h-5" /> : <Sliders className="w-5 h-5" />}
              </div>
              <h3 className="text-lg font-serif font-medium text-stone-900 mb-2">
                {piece.name}
              </h3>
              <p className="text-stone-600 text-[13px] leading-relaxed mb-4">
                {piece.description}
              </p>
              <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span>{piece.thickness}</span>
                <span className="text-[#a88147]">{piece.style}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Material & Durability Stats */}
        <div className="bg-[#faf8f5] rounded-3xl p-8 border border-stone-200/50 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-serif font-normal text-stone-900">
              Métal d’une Durabilité Absolue
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Fini les bijoux qui s'oxydent après quelques jours. Le Bracelet Éclat utilise une base solide d'acier inoxydable poli de qualité supérieure, revêtue d'une double couche dorée d'un éclat remarquable. Ce procédé confère une longévité de confiance et rend le métal respectueux pour votre peau au quotidien.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-stone-700">
                <div className="w-5 h-5 rounded-full bg-stone-200 text-stone-850 flex items-center justify-center font-semibold text-[10px]">✓</div>
                <span>Convient à <strong>100% aux peaux sensibles</strong> (sans nickel, plomb ni cadmium)</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-stone-700">
                <div className="w-5 h-5 rounded-full bg-stone-200 text-stone-850 flex items-center justify-center font-semibold text-[10px]">✓</div>
                <span>Résistant aux huiles cutanées, au chlore marin et aux gels douche</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-stone-200/40 text-center space-y-1 shadow-2xs">
              <div className="text-[#a88147] font-serif text-3xl font-bold">18 Carats</div>
              <p className="text-xs font-semibold text-stone-800">Or Jaune Véritable</p>
              <p className="text-[10px] text-stone-500 font-light font-mono">Plaquage sous vide breveté</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/40 text-center space-y-1 shadow-2xs">
              <div className="text-[#a88147] font-serif text-3xl font-bold">100%</div>
              <p className="text-xs font-semibold text-stone-800">Étanche & Inaltérable</p>
              <p className="text-[10px] text-stone-500 font-light font-mono">Usage quotidien garanti</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/40 text-center space-y-1 shadow-2xs col-span-2">
              <div className="flex items-center justify-center gap-2 text-[#a88147]">
                <Shield className="w-5 h-5" />
                <span className="text-lg font-serif font-bold">Garantie 3 Ans</span>
              </div>
              <p className="text-xs text-stone-700 font-semibold pt-1">Remplacement Intégral en cas d'oxydation</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
