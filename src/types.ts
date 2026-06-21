/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface OrderInput {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  quantity: number; // 1, 2, or 3 sets
  deliveryNotes?: string;
}

export interface Order {
  id: string;
  fullName: string;
  phone: string;
  address: string;
  city: string;
  quantity: number;
  totalPrice: number;
  deliveryNotes?: string;
  status: 'pending' | 'preparing' | 'shipped' | 'delivered';
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number; // 1 to 5
  comment: string;
  date: string;
  city: string;
  verifiedPurchase: boolean;
  image?: string; // Opt photo attached
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
