"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AnimatedButton from '../Button/Button';

export default function SpecialInstructionsCard() {
    const [instructions, setInstructions] = useState('');
    const cartItems = useSelector((state) => state.cart.items);


    const totalCart = cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

    return (
        <div className="w-full bg-white p-6 rounded-lg shadow-sm">

            <div className="mb-6">
                <label
                    htmlFor="special-instructions"
                    className="block text-gray-800 font-medium mb-3"
                >
                    Order special instructions
                </label>
                <textarea
                    id="special-instructions"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    className="w-full h-24 px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    placeholder=""
                />
            </div>

            <div className="flex justify-between items-center mb-2">
                <span className="text-gray-800 font-medium text-lg">Total</span>
                <span className="text-gray-800 font-semibold text-lg">${totalCart.toFixed(2)}</span>
            </div>


            <p className="text-sm text-gray-600 mb-6">
                Taxes and <span className="text-blue-600 underline cursor-pointer">shipping</span> calculated at checkout
            </p>


            <Link href={"/checkout"}>
                <AnimatedButton
                    text='CHECKOUT'
                    bgColor='bg-black'
                    textColor='text-white'
                    height='h-12'
                    padding=''
                    rounded='rounded-lg'
                    className='w-full mb-3'
                />
            </Link>

            <div className="text-center">
                <p className="text-sm text-gray-600 mb-3">We accept</p>
                <div className="w-full h-12 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-gray-400 text-sm"><img src="/ThemePictures/paymentcards.avif" alt="" /></span>
                </div>
            </div>
        </div>
    );
}