import React from 'react';

const ServiceFeatures = () => {
  return (
    <section className="pt-4 bg-white">
      <div className="container mx-auto px-8 items-center">
        <div className="flex flex-row mt-10 md:text-justify">
          <div className="w-full md:w-1/2 md:px-12 py-6">
            <p className="text-gray-700 text-xl md:text-2xl">
              Wilson & Farr Cleaning Solutions provides quality cleaning services that focus on the
              fine details. We offer flexible scheduling, eco-friendly products, and effective
              cleaning procedures. We are the perfect choice for your home or business!
            </p>
          </div>
          <div className="hidden md:w-1/2 md:flex flex-row font-semibold text-gray-800">
            <div className="w-1/2 p-6 ">
              <ul  style={{ listStyleType: `'✅'` }}>
                <li className='p-1'> Quality-Focused Services </li>
                <li className='p-1'> Insured </li>
                <li className='p-1'> Vaccinated Staff</li>
                <li className='p-1'> Move In/Move Out Services </li>
                <li className='p-1'> Locally Owned and Operated</li>
                <li className='p-1'> Staff Background Checks</li>
                <li className='p-1'> Office Cleaning Service</li>
              </ul>
            </div>
            <div className="w-1/2 p-6">
              <ul  style={{ listStyleType: `'✅'` }}>
                <li className='p-1'>Professional & Devoted Teams</li>
                <li className='p-1'>Detail-Oriented</li>
                <li className='p-1'>Sanitizing Services</li>
                <li className='p-1'>Deep Cleaning Service</li>
                <li className='p-1'>Interior & Exterior Window Cleaning</li>
                <li className='p-1'>Special Requests</li>
                <li className='p-1'>Eco-Friendly & Green Products</li>
                <li className='p-1'>Recurring Cleaning Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
