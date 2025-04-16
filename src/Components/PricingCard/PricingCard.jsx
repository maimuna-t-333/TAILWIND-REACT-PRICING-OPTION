import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    const {name,price,description,features}=pricing
    return (
        <div className='flex flex-col border bg-gray-700 rounded-2xl p-10'>
            {/* card header */}
            <div>
                <h1 className='text-7xl'>{name}</h1>                
                <h4 className='text-3xl'>{price}</h4>                

            </div>
            {/* card body */}
            <div className='flex-1  bg-gray-500 p-4 mt-6 rounded-2xl'>
                <p>{description}</p>
            {
                features.map((feature,index) => <PricingFeatures
                key={index}
                feature={feature}></PricingFeatures>)
            }
            </div>
            <button className="btn w-full mt-4">Subscribe</button>
            
        </div>
    );
};

export default PricingCard;

