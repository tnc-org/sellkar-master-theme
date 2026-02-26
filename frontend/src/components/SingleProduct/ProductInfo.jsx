"use client";

import { useState } from "react";
import { addToCart } from "@/redux/cartSlice";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/Shadcn/Tooltip/tooltip";

import { Heart, Share2, FileText, Palette, HelpCircle, MapPin, Package, Undo2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import AnimatedButton from "../Button/Button";

export default function ProductInfo({ product, agreedToTerms = true }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: quantity,
      })
    );
    toast?.success(`${quantity} item(s) added to cart!`);
  };

  const handleBuyNow = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: quantity,
      })
    );
    router.push("/shoppingCart");
  };

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Product Title and Heart Icon */}
        <div className="flex items-start justify-between">
          <h1 className="text-3xl font-normal tracking-tight">
            {product.name}
          </h1>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <Heart className="w-6 h-6" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to wishlist</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-3">
          <span className="text-3xl font-normal text-red-500">${product.price}</span>
          {product.comparePrice && (
            <>
              <span className="text-lg text-gray-400 line-through">
                ${product.comparePrice}
              </span>
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                SAVE 50%
              </span>
            </>
          )}
        </div>

        {/* Product Description */}
        <p className="text-gray-500 leading-relaxed text-sm">
          {product.description || "Clear all your favorite rust and white team in one popping style with these red & white striped game bib overalls! Each pair is made of 100 percent cotton for a comfortable, breathable fit regardless of the weather and robust..."}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 text-sm">
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex items-center gap-2 text-gray-700 hover:text-black transition">
                <FileText className="w-4 h-4" />
                <span>Size Guide</span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View size chart</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex items-center gap-2 text-gray-700 hover:text-black transition">
                <Palette className="w-4 h-4" />
                <span>Compare Color</span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Compare with other colors</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex items-center gap-2 text-gray-700 hover:text-black transition">
                <HelpCircle className="w-4 h-4" />
                <span>Ask a Question</span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Contact us for help</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex items-center gap-2 text-gray-700 hover:text-black transition">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share this product</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <Separator />

        {/* Quantity and Add to Cart */}
        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="flex items-center border border-gray-300 rounded">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={handleDecrement}
                    className="px-4 py-2 hover:bg-gray-100 transition"
                  >
                    -
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Decrease quantity</p>
                </TooltipContent>
              </Tooltip>

              <input
                type="text"
                value={quantity}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 1;
                  if (val > 0) setQuantity(val);
                }}
                className="w-16 text-center border-x border-gray-300 py-2 focus:outline-none"
              />

              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={handleIncrement}
                    className="px-4 py-2 hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Increase quantity</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <AnimatedButton
              text="ADD TO CART"
              bgColor="bg-white"
              textColor="text-black"
              hoverBgColor="bg-black"
              hoverTextColor="text-white"
              height="h-11"
              rounded="rounded"
              border="border border-black"
              className="flex-1 text-sm font-medium tracking-wide"
              onClick={handleAddToCart}
              disabled={!agreedToTerms}
            />
          </div>

          <AnimatedButton
            text="BUY IT NOW"
            bgColor="bg-black"
            textColor="text-white"
            hoverTextColor="text-white"
            height="h-11"
            rounded="rounded"
            className="w-full text-sm font-medium tracking-wide"
            onClick={handleBuyNow}
            disabled={!agreedToTerms}
          />
        </div>

        {/* Store Pickup Info */}
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              <p>
                Pick-up available at <strong>Japan Store</strong>
              </p>
              <p className="text-gray-500">Usually ready in 24 hours</p>
              <button className="text-xs underline mt-1 hover:no-underline">
                CHECK AVAILABILITY AT OTHER STORES
              </button>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Package className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p className="text-gray-600">
              Estimate delivery times: <strong>12-26 days</strong> (International), <strong>3-6 days</strong> (United States)
            </p>
          </div>

          <div className="flex items-start gap-2">
            <Undo2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p className="text-gray-600">
              Return within <strong>45 days</strong> of purchase. Duties & taxes are non-refundable.
            </p>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}