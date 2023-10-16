import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='lg:w-4/12 w-3/4 mx-auto text-center mb-4 lg:mb-12'>
            <p className='text-[#D99904] lg:mb-4'>---{subHeading}---</p>
            <h3 className='text-2xl lg:text-4xl border-y-4 py-3'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;