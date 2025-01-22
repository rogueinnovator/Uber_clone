import React from 'react';

const LocationPanel = () => {
    return (
        <div>
            {[
                "5Q94+58P, Tangi Rd, Razar, Chārsadda, Charsadda, Khyber Pakhtunkhwa, Pakistan",
                "1600 Amphitheatre Parkway, Mountain View, CA, USA",
                "1 Infinite Loop, Cupertino, CA, USA",
                "221B Baker Street, London, UK",
                "Eiffel Tower, Paris, France"
            ].map((address, index) => (
                <div key={index}>
                    <div className='flex justify-start items-center gap-2 text-xl pl-5 my-2 h-20'>
                        <i className="ri-map-pin-line bg-slate-100 p-2 rounded-full"></i>
                        <h2 className='font-normal px-3'>{address}</h2>
                    </div>
                    <hr className='bg-slate-100' />
                </div>
            ))}
        </div>
    );
};

export default LocationPanel;
