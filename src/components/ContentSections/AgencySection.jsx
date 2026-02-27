import React from 'react';
import AnimatedButton from '../Button/Button';

const AgencySection = ({title, description, buttonText}) => {
  return (
    <div className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
          {/* Unique & Perfect We Are An Awesome Agency. */}
          {title}
        </h1>
        
        {/* Description Text */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-5xl">
          {/* Sum valde dispositus et motivatus professionalis Fashion Designer cum divitiis experientiae in range of photographic styles et officia. Modo percurre tuam Fashion Store, quae imago tui erit parum pudici et confidentis mulieris quae singulari suo stilo fulget. Propositum est facillime facillime efficere. Optima tibi glam et lasciva vestes offerimus, mente habita quae qualitates altae semper nimis pretiosae sunt. Propositum est ut quam facillime efficiamus, propterea fructus selectos cotidie addimus, et hoc nobis necessarium est. Sic cum temporibus stilo assequeris! Nos navem terrarum & spatium! */}
          {description}
        </p>
        
        {/* Button */}
       <AnimatedButton
       text={buttonText}
       textColor='text-black'
       bgColor='bg-white'
       onlyBottomBorder
       />
        
      </div>
    </div>
  );
};

export default AgencySection;