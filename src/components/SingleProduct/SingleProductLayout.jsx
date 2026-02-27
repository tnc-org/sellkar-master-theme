import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import ProductShowcase from "./ProductShowcase";
import ProductCarousel from "../ProductLayouts/ProductCarousel";
import EmailSubscription4 from "../EmailAndNewsSubscription/EmailSubscription4";
import { useTheme } from "@/provider/theme-provider";
import { GetProductsByTheme } from "../GetProductsByTheme/GetProductsByTheme";

export default function SingleProductLayout({ product }) {
  const { themeId, theme } = useTheme();
  const products = GetProductsByTheme(themeId)
  return (
    <section className="max-w-7xl mx-auto  py-12">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <ProductGallery image={product.image} />
        <ProductInfo product={product} />
      </div>

      <div className="mt-16">
        <ProductTabs product={product} />
      </div>

      <div className="mt-5">
        <ProductShowcase />
      </div>

      <div className="my-15">

        <ProductCarousel products={products.slice(0, 12)} title="You May Also Like" />
      </div>

      <div>
        <EmailSubscription4 />
      </div>

    </section>
  );
}