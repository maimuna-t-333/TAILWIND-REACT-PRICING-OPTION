import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
      <p className='flex mt-8'><CircleCheckBig className='mr-4'></CircleCheckBig> {feature}</p>
    );
};

export default PricingFeatures;