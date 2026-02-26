import CategoryGrid from "./CategoryGrid";
import ImageWithProductGrid from "./ImageWithProductGrid";
import { LargeProductCarousel } from "./LargeProductCarousel";
import ProductBigPictureWithCarousel from "./ProductBigPictureWithCarousel";
import ProductCard from "./ProductCard";
import ProductCardRowsForm from "./ProductCardRowsForm";
import ProductCardWithHoverButton from "./ProductCardWithHoverButton";
import { ProductCardWithVideoWrapper } from "./ProductCardWithVideoWrapper";
import { ProductCardWithVideoWrapper2 } from "./ProductCardWithVideoWrapper2";
import ProductCarousel from "./ProductCarousel";
import ProductCarouselWithLiveTimer from "./ProductCarouselWithLiveTimer";
import ProductCategoryCircle from "./ProductCategoryCircle";
import ProductGridView from "./ProductGridView";
import ProductList from "./ProductList";
import ProductWithTitleAndQuantity from "./ProductWithTitleAndQuantity";
import ProductWithTitleAndSubtitle from "./ProductWithTitleAndSubtitle";
import ProductWithTitleOnly from "./ProductWithTitleOnly";
import { SmallProductCardWrapper } from "./SmallProductCardWrapper";

export const ProductLayoutsMap = {
    productCardRowsForm : ProductCardRowsForm,
    productCarousel : ProductCarousel,
    productGridView : ProductGridView,
    productList : ProductList,
    productCard : ProductCard,
    productCarouselWithLiveTimer : ProductCarouselWithLiveTimer,
    imageWithProductGrid: ImageWithProductGrid,
    largeProductCarousel: LargeProductCarousel,
    smallProductCard: SmallProductCardWrapper,
    productCardWithVideo: ProductCardWithVideoWrapper,
    productCardWithVideo2: ProductCardWithVideoWrapper2,
    productCardWithHoverButton: ProductCardWithHoverButton,
    categoryGrid: CategoryGrid,
    productWithTitleOnly: ProductWithTitleOnly,
    productWithTitleAndSubtitle: ProductWithTitleAndSubtitle,
    productCategoryCircle: ProductCategoryCircle,
    productBigPictureWithCarousel: ProductBigPictureWithCarousel,
    productWithTitleAndQuantity: ProductWithTitleAndQuantity
}