"use client"

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CreditCard, MapPin } from 'lucide-react';

export default function CheckoutForm2() {
  const [deliveryMethod, setDeliveryMethod] = useState('ship');
  const [useSameAddress, setUseSameAddress] = useState(true);
  const [giftCard, setGiftCard] = useState('');
  
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  
  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => {
    return total + (Number(item.price) * Number(item.quantity));
  }, 0);
  
  const total = subtotal; // Add shipping costs here when calculated

  return (
    <div className="min-h-screen my-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Left Column - Form */}
        <div className="md:col-span-2 space-y-6">
          {/* Contact Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Contact</h2>
              <button className="text-blue-600 text-sm">Sign in</button>
            </div>
            <input
              type="text"
              placeholder="Email or mobile phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label className="flex items-center mt-3 text-sm">
              <input type="checkbox" className="mr-2" />
              Email me with news and offers
            </label>
          </div>

          {/* Delivery Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Delivery</h2>
            
            {/* Delivery Method Tabs */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => setDeliveryMethod('ship')}
                className={`flex items-center justify-center gap-2 px-4 py-3 border rounded-md ${
                  deliveryMethod === 'ship'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300'
                }`}
              >
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  deliveryMethod === 'ship' ? 'border-blue-600' : 'border-gray-400'
                }`}>
                  {deliveryMethod === 'ship' && (
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  )}
                </div>
                Ship
              </button>
              <button
                onClick={() => setDeliveryMethod('pickup')}
                className={`flex items-center justify-center gap-2 px-4 py-3 border rounded-md ${
                  deliveryMethod === 'pickup'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300'
                }`}
              >
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  deliveryMethod === 'pickup' ? 'border-blue-600' : 'border-gray-400'
                }`}>
                  {deliveryMethod === 'pickup' && (
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  )}
                </div>
                Pick up
              </button>
            </div>

            {/* Address Form */}
            <div className="space-y-4">
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>United States</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <MapPin className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>

              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>State</option>
                </select>
                <input
                  type="text"
                  placeholder="ZIP code"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Save this information for next time
              </label>
            </div>
          </div>

          {/* Shipping Method Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Shipping method</h2>
            <p className="text-sm text-gray-600">Enter your shipping address to view available shipping methods.</p>
          </div>

          {/* Payment Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Payment</h2>
            <p className="text-sm text-gray-600 mb-4">All transactions are secure and encrypted.</p>

            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className="flex items-center justify-between bg-blue-50 border-b border-blue-600 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-600 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  </div>
                  <span className="font-medium">Credit card</span>
                </div>
                <div className="flex gap-2">
                  <CreditCard className="w-5 h-5 text-gray-600" />
                </div>
              </div>

              <div className="p-4 space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Expiration date (MM / YY)"
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Security code"
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Name on card"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    checked={useSameAddress}
                    onChange={(e) => setUseSameAddress(e.target.checked)}
                    className="mr-2"
                  />
                  Use shipping address as billing address
                </label>
              </div>
            </div>
          </div>

          {/* Pay Now Button */}
          <button className="w-full bg-blue-600 text-white py-4 rounded-md font-semibold hover:bg-blue-700 transition-colors">
            Pay now
          </button>
        </div>

        {/* Right Column - Order Summary */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm sticky top-8">
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-sm text-center py-4">Your cart is empty</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative">
                      <img
                        src={item.image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop'}
                        alt={item.name || item.title}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name || item.title}</h3>
                      {item.category && (
                        <p className="text-xs text-gray-500">{item.category}</p>
                      )}
                    </div>
                    <div className="text-sm font-medium">
                      ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Gift Card Input */}
            <div className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Gift card"
                  value={giftCard}
                  onChange={(e) => setGiftCard(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
                  Apply
                </button>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-1">
                  Shipping
                  <span className="text-gray-400">ⓘ</span>
                </span>
                <span className="text-gray-500">Enter shipping address</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total</span>
              <div className="text-right">
                <span className="text-xs font-normal text-gray-500 mr-2">USD</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}