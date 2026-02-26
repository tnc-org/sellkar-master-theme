"use client";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "@/redux/cartSlice";
import { MinusIcon, PlusIcon, TrashIcon } from "@/lib/icons";
import SpecialInstructionsCard from "./SpecialInstructionCard";

export default function ShoppingCartTable() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalCart = cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">


      {/* Left: Table (2/3 width) */}
      <div className="lg:w-2/3 w-full">
        <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="text-left text-gray-500 uppercase text-sm">
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2 text-center">Quantity</th>
                <th className="px-4 py-2 text-right">Price</th>
                <th className="px-4 py-2 text-right">Total</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-6">
                    Your cart is empty
                  </td>
                </tr>
              ) : (
                cartItems.map((item) => (
                  <tr key={item.id} className="bg-white shadow-sm rounded-lg">
                    <td className="px-4 py-4 flex flex-col gap-1">
                      <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex flex-col">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-gray-400 text-sm">Title: Default Title</span>
                          {/* Trash icon directly below the Default Title */}
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="mt-1 text-red-600"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-center">
                      <div className="flex items-center justify-center gap-2 border  rounded px-2 py-1">
                        <button onClick={() => dispatch(decrementQuantity(item.id))}  ><MinusIcon  size={16} /></button>

                        <span>{item.quantity}</span>

                        <button onClick={() => dispatch(incrementQuantity(item.id))} ><PlusIcon size={16} /></button>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-right">${item.price.toFixed(2)}</td>
                    <td className="px-4 py-4 text-right">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))
              )}
            </tbody>

            {cartItems.length > 0 && (
              <tfoot>
                <tr className="bg-gray-100 font-semibold">
                  <td colSpan={2} className="px-4 py-4 text-right">Total:</td>
                  <td className="px-4 py-4 text-right">${totalCart.toFixed(2)}</td>
                  <td></td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>

     
      <div className="lg:w-1/3 w-full">
      <SpecialInstructionsCard />
      </div>
    </div>
  );
}


