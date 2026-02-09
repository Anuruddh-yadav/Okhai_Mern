import React from 'react';
import FiltersSideBar from '../filters/filtersSideBar.jsx';
import fashionJewelleryProduct from '../data/FashionJewelleryproduct.js';
import Collection from '../../../All_Products/AccessoriesCollections.jsx';

const FashoinJewellery = () => {
    
    return (
        <>
            <main className=''>
                <section>
                    {/* <aside><FiltersSideBar /></aside> */}
                    <Collection />
                </section>
            </main>
        </>
    );
}

export default FashoinJewellery;