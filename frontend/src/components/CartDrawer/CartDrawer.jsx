"use client";

import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/Shadcn/Navbar1/sheet";
import { CartIcon, TrashIcon } from "@/lib/icons";
import { removeFromCart, incrementQuantity, decrementQuantity } from "@/redux/cartSlice";
import AnimatedButton from "../Button/Button";
import { useRouter } from "next/navigation";
import Toast from "../Toast/Toast";
import ScrollbarWrapper from "../ScrollbarWrapper/ScrollbarWrapper";
import EmptyCart from "../EmptyCart/EmptyCart";

export default function CartDrawer({ onOpenChange }) {  // ✅ Add onOpenChange prop
  const [open, setOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
  // Track previous cart length to detect NEW items only
  const prevCartLengthRef = useRef(cartItems.length);

  useEffect(() => {
    // Only show toast if a NEW item was added (length increased)
    if (cartItems.length > prevCartLengthRef.current) {
      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 1500);
      
      // Update the ref after showing toast
      prevCartLengthRef.current = cartItems.length;
      
      return () => clearTimeout(timer);
    } else {
      // Update ref for other changes (decrement, delete)
      prevCartLengthRef.current = cartItems.length;
    }
  }, [cartItems.length]); // Only depend on length, not the entire array

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const total = cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
    setTotal(total);
  }, [cartItems]);

  // ✅ Handle open state change and notify parent
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  return (
    <>
      {showToast && (
        <Toast
          message="Product added to cart successfully!"
          isVisible={showToast}
          duration={1200}
        />
      )}

      <Sheet open={open} onOpenChange={handleOpenChange}>  {/* ✅ Use handleOpenChange */}
        <SheetTrigger asChild>
          <div className="relative cursor-pointer">
            <CartIcon />
            {mounted && cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
                {cartItems.length}
              </span>
            )}
          </div>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[420px] max-w-full sm:w-[95vw] flex flex-col "
        >
          <SheetHeader>
            <SheetTitle className="text-lg">Shopping Cart</SheetTitle>
          </SheetHeader>

          <ScrollbarWrapper
            className="mt-3 pl-4 flex flex-col gap-3 pr-2"
            maxHeight="calc(100vh - 200px)"
          >

            {cartItems.length === 0 && <EmptyCart />}

            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3 border-b pb-3">
                {/* Image */}
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />

                {/* Info */}
                <div className="flex flex-col flex-1 text-sm">
                  <p className="font-semibold leading-tight line-clamp-1">{item.name}</p>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>

                  {/* Quantity and Trash in same row */}
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center border rounded px-2 py-0.5">
                      <button
                        className="px-1 text-lg"
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        −
                      </button>
                      <span className="px-2 font-medium">{item.quantity}</span>
                      <button
                        className="px-1 text-lg"
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        +
                      </button>
                    </div>

                    {/* Trash button at the end */}
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="flex-shrink-0 p-1 rounded hover:bg-red-50 transition"
                    >
                      <TrashIcon className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </ScrollbarWrapper>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className=" flex flex-col gap-3 px-4 mt-auto pb-4">
              <div className="flex items-center justify-between text-sm font-bold">
                <span>TOTAL</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="flex">
                <SheetClose asChild>
                  <button
                    onClick={() => router.push("/checkout")}
                    className="flex-1"
                  >
                    <AnimatedButton
                      text="Checkout"
                      bgColor="bg-black"
                      textColor="text-white"
                      rounded="rounded-md"
                      padding="px-6"
                    />
                  </button>
                </SheetClose>

                <SheetClose asChild>
                  <button
                    onClick={() => router.push("/shoppingCart")}
                    className="flex-1"
                  >
                    <AnimatedButton
                      text="View Cart"
                      bgColor="bg-white"
                      textColor="text-black"
                      hoverBgColor="bg-black"
                      hoverTextColor="text-white"
                      rounded="rounded-md"
                      padding="px-6"
                      border="border border-black"
                    />
                  </button>
                </SheetClose>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}