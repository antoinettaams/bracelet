/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquarePlus, Clock } from 'lucide-react';

const displayImage = "/images/gold_bracelets_display_1782043809762.jpg";
const wristImage = "/images/gold_bracelets_wrist_1782043825347.jpg";
import { Review } from '../types';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "rev1",
      author: "Adjoua K.",
      rating: 5,
      comment: "Absolument ravie de mon achat ! Les bracelets sont brillants, d'une grande finesse et se marient parfaitement. Je les porte tous les jours, la qualité est remarquable. Le paiement à la livraison est tellement simple et sécurisant.",
      date: "Il y a 2 jours",
      city: "Cotonou, Bénin",
      verifiedPurchase: true,
      image: wristImage
    },
    {
      id: "rev2",
      author: "Mariam B.",
      rating: 5,
      comment: "J'ai offert cet ensemble à ma sœur pour son anniversaire. Elle l'adore ! La pochette en coton et l'emballage sont magnifiques. Le jonc plat fait vraiment chic. Livraison rapide en 24h à Porto-Novo.",
      date: "Il y a 5 jours",
      city: "Porto-Novo, Bénin",
      verifiedPurchase: true,
      image: displayImage
    },
    {
      id: "rev3",
      author: "Syntiche G.",
      rating: 5,
      comment: "Qualité exceptionnelle pour le prix, c'est l'ensemble de 3 qui fait tout le style. Trés confortable, il s'ajuste bien à mon poignet fin. Je recommande !",
      date: "Il y a 1 semaine",
      city: "Abomey-Calavi, Bénin",
      verifiedPurchase: true
    },
    {
      id: "rev4",
      author: "Chantal S.",
      rating: 4,
      comment: "Commandé lundi, reçu Lundi après midi après confirmation de ma commande. Les finitions sont très propres. Le bracelet est agréable sur la peau.",
      date: "Il y a 2 semaines",
      city: "Parakou, Bénin",
      verifiedPurchase: true
    }
  ]);

  // Form states for creating a review
  const [showForm, setShowForm] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim() || !newCity.trim()) return;

    const userReview: Review = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      city: newCity,
      rating: newRating,
      comment: newComment,
      date: "À l'instant",
      verifiedPurchase: true
    };

    setReviews([userReview, ...reviews]);
    setNewAuthor('');
    setNewCity('');
    setNewRating(5);
    setNewComment('');
    setShowForm(false);
    setSuccessMsg('Merci ! Votre avis a été publié avec succès.');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  return (
    <section id="reviews" className="py-16 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#a88147] font-semibold">Témoignages réels</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-stone-900">
              Avis de nos Clientes
            </h2>
            <p className="text-stone-500 text-sm max-w-xl">
              Découvrez les retours d'expérience de celles et ceux qui ont adopté le Bracelet Éclat dans leur quotidien.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-2xl border border-stone-200/50 shadow-2xs">
            <div className="text-center md:text-left pr-4 md:border-r border-stone-200">
              <div className="text-3xl font-serif font-bold text-stone-950">4.9 / 5</div>
              <p className="text-[10px] text-stone-500 font-mono uppercase font-semibold">Note Globale</p>
            </div>
            <div className="space-y-1">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-stone-600 font-medium">99.2% de clientes satisfaites</p>
            </div>
          </div>
        </div>

        {/* Alerts & CTA */}
        {successMsg && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 text-amber-950 rounded-xl text-center text-sm font-medium animate-fade-in">
            {successMsg}
          </div>
        )}

        <div className="flex justify-end mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 text-xs bg-white border border-stone-300 hover:border-amber-600 text-stone-800 hover:text-[#a88147] py-2.5 px-4 font-medium rounded-xl shadow-2xs transition-all cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            {showForm ? "Masquer le formulaire" : "Laisser un avis client"}
          </button>
        </div>

        {/* Review Submission Form */}
        {showForm && (
          <form 
            onSubmit={handleSubmitReview}
            className="mb-10 p-6 bg-white border border-stone-200/60 rounded-2xl shadow-xs space-y-4 max-w-2xl mx-auto animate-fade-in"
          >
            <h3 className="font-serif text-lg text-stone-900 border-b border-stone-100 pb-2">Rédiger votre évaluation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Votre Prénom et Nom Initial *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex : Amina B."
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full px-3 py-2 bg-[#faf8f5] border border-stone-200 rounded-xl text-sm focus:outline-hidden focus:ring-1 focus:ring-amber-600"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Votre Ville, Pays *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex : Cotonou, Bénin"
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                  className="w-full px-3 py-2 bg-[#faf8f5] border border-stone-200 rounded-xl text-sm focus:outline-hidden focus:ring-1 focus:ring-amber-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Note de satisfaction</label>
              <div className="flex gap-1.5 py-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewRating(star)}
                    className="p-1 hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Star 
                      className={`w-7 h-7 ${
                        newRating >= star ? 'text-amber-500 fill-current' : 'text-stone-200'
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Commentaire détaillé *</label>
              <textarea
                required
                rows={3}
                placeholder="Partagez votre avis sur l'élégance, le poids et la qualité de ce trio de bracelets..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full px-3 py-2 bg-[#faf8f5] border border-stone-200 rounded-xl text-sm focus:outline-hidden focus:ring-1 focus:ring-amber-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#121212] hover:bg-neutral-800 text-white font-medium py-3 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Publier l'Avis
            </button>
          </form>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-6 rounded-2xl border border-stone-200/50 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow space-y-4"
            >
              <div className="space-y-3">
                {/* Stars and verified indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-stone-200" />
                    ))}
                  </div>
                  {review.verifiedPurchase && (
                    <span className="flex items-center gap-1 text-[10px] text-amber-900 font-semibold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100 uppercase tracking-widest font-mono">
                      <CheckCircle className="w-3 h-3 text-[#a88147]" />
                      Achat Vérifié
                    </span>
                  )}
                </div>

                {/* Comment */}
                <p className="text-stone-700 text-sm italic leading-relaxed font-light">
                  "{review.comment}"
                </p>

                {/* User attached visual review */}
                {review.image && (
                  <div className="relative w-28 h-28 rounded-xl overflow-hidden mt-2 border border-stone-100">
                    <img 
                      src={review.image} 
                      alt="Review Attached Photo" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/50 text-[8px] font-mono text-white px-1 py-0.2 rounded-md">
                      Photo cliente
                    </span>
                  </div>
                )}
              </div>

              {/* Author & date footer */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-100 text-xs">
                <div>
                  <h4 className="font-semibold text-stone-900">{review.author}</h4>
                  <p className="text-[10px] text-stone-400 font-medium">{review.city}</p>
                </div>
                <span className="text-stone-400 text-[10px] font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
