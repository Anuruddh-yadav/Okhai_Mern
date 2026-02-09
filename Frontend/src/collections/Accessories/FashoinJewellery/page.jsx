import React from 'react';
import FiltersSideBar from '../filters/filtersSideBar.jsx';

const FashoinJewellery = () => {
    
    return (
        <>
            <main className=''>
                <section>
                    <aside><FiltersSideBar /></aside>
                    <div>{allAccessoriesProducts.fashionJewelleryProduct.image}</div>
                </section>
            </main>
        </>
    );
}

export default FashoinJewellery;