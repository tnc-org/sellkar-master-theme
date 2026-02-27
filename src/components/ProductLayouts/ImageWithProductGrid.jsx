// "use client"
// import React from 'react'
// import ProductCardRowsForm from './ProductCardRowsForm'
// import AnimatedButton from '../Button/Button'

// const ImageWithProductGrid = ({
//     image,
//     title,
//     subtitle,
//     buttonProps,
//     products = [],
//     imagePosition = 'left', // 'left' or 'right'
//     contentAlignment = 'center', // 'top', 'center', 'bottom'
//     contentJustify = 'center', // 'start', 'center', 'end'
// }) => {
//     // Determine flex direction based on image position
//     const flexDirection = imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
    
//     // Content vertical alignment classes for image overlay
//     const alignmentClasses = {
//         top: 'justify-start',
//         center: 'justify-center',
//         bottom: 'justify-end'
//     }
    
//     // Content horizontal alignment classes for image overlay
//     const justifyClasses = {
//         start: 'items-start text-left',
//         center: 'items-center text-center',
//         end: 'items-end text-right'
//     }

//     return (
//         <div className="w-full px-4 py-15 ">
//             <div className={`flex flex-col-reverse  ${flexDirection} gap-8 items-stretch `}>
                
//                 {/* Image Section with Overlay Content */}
//                 <div className="w-full md:w-2/5 relative  h-[400px] md:h-[700px] overflow-hidden group">
//                     <img
//                         src={image}
//                         alt={title || "Product showcase"}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
//                     />
                    
//                     {/* Overlay Content (Title, Subtitle, Button) */}
//                     {(title || subtitle || buttonProps) && (
//                         <div className={`absolute inset-0 bg-black/30 flex flex-col ${alignmentClasses[contentAlignment]} ${justifyClasses[contentJustify]} p-6 md:p-8`}>
//                             <div className="space-y-4">
//                                 {title && (
//                                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white whitespace-pre-line">
//                                         {title}
//                                     </h2>
//                                 )}
//                                 {subtitle && (
//                                     <p className="text-xs md:text-sm font-semibold tracking-widest text-white/90 uppercase">
//                                         {subtitle}
//                                     </p>
//                                 )}
                                
//                                 {buttonProps && (
//                                     <div className="mt-4">
//                                         <AnimatedButton {...buttonProps} />
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Product Grid Section */}
//                 <div className="w-full md:w-4/5 flex items-center">
//                     {products.length > 0 && (
//                         <div className="w-full">
//                             <ProductCardRowsForm products={products} />
//                         </div>
//                     )}
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default ImageWithProductGrid

















"use client"
import React from 'react'
import ProductCardRowsForm from './ProductCardRowsForm'
import AnimatedButton from '../Button/Button'

const ImageWithProductGrid = ({
    image,
    title,
    subtitle,
    buttonProps,
    products = [],
    imagePosition = 'left', // 'left' or 'right'
    contentAlignment = 'center', // 'top', 'center', 'bottom'
    contentJustify = 'center', // 'start', 'center', 'end'
}) => {
    // Determine flex direction based on image position
    const flexDirection = imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
    
    // Content vertical alignment classes for image overlay
    const alignmentClasses = {
        top: 'justify-start',
        center: 'justify-center',
        bottom: 'justify-end'
    }
    
    // Content horizontal alignment classes for image overlay
    const justifyClasses = {
        start: 'items-start text-left',
        center: 'items-center text-center',
        end: 'items-end text-right'
    }

    return (
        <div className="w-full px-4 py-15">
            <div className={`flex flex-col-reverse md:flex-col-reverse ${flexDirection} gap-8 items-stretch`}>
                
                {/* Image Section with Overlay Content */}
                <div className="w-full md:w-1/3 relative h-[400px] md:h-[700px] overflow-hidden group">
                    <img
                        src={image}
                        alt={title || "Product showcase"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Overlay Content (Title, Subtitle, Button) */}
                    {(title || subtitle || buttonProps) && (
                        <div className={`absolute inset-0 bg-black/30 flex flex-col ${alignmentClasses[contentAlignment]} ${justifyClasses[contentJustify]} p-6 md:p-8`}>
                            <div className="space-y-4">
                                {title && (
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white whitespace-pre-line">
                                        {title}
                                    </h2>
                                )}
                                {subtitle && (
                                    <p className="text-xs md:text-sm font-semibold tracking-widest text-white/90 uppercase">
                                        {subtitle}
                                    </p>
                                )}
                                
                                {buttonProps && (
                                    <div className="mt-4">
                                        <AnimatedButton {...buttonProps} />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Product Grid Section */}
                <div className="w-full md:w-2/3 flex items-center">
                    {products.length > 0 && (
                        <div className="w-full">
                            <ProductCardRowsForm products={products} />
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default ImageWithProductGrid