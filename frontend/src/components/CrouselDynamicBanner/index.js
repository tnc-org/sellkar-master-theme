
// import { CarouselBanner } from '.';
// import StylishProductCarousel from './StylishProductCarousel';


// // Export the main component (most commonly used)
// export { default as CarouselBanner } from './CarouselBanner';

// // Export child components (if you need them separately)
// export { default as CategoryCard } from './CategoryCard';
// export { default as Breadcrumb } from './Breadcrumb';

// // Export data (if you need to access categories)
// export { categories } from './DataCategoriesWatch';

import CarouselBanner from './CarouselBanner';
import StylishProductCarousel from './StylishProductCarousel';


export const CarouselDynamicBannerMap = {
    carouselBanner: CarouselBanner,
    stylishProductCarousel: StylishProductCarousel,
}