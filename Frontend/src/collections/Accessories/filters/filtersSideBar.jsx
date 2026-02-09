import React from 'react';
const FiltersSideBar = () => {
    return (
        <>
            <aside className='mt-4 flex flex-col gap-6 p-4'>
                <h3 className='text-orange-400'>FILTERS</h3>
                <div className='flex flex-col gap-6'>
                    <div>
                        <div>PRICE</div>
                        <input type="range" min={350} max={108395} name="pricerange" id="" />
                        <div className='pricerange2' aria-valuenow={''} aria-valuemin={350} aria-valuemax={108395} aria-orientation='horizontal' tabIndex={0} role='slider'></div>
                    </div>
                    <div>PRODUCT TYPE</div>
                    <div>CRAFT</div>
                    <div>MATERIAL</div>
                    <div>GENDER</div>
                    <div>COLOR</div>
                </div>
            </aside>
        </>
    );
}
export default FiltersSideBar;