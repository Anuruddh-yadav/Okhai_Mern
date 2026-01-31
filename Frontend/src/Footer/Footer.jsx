import React from 'react'
import '../global.css';
import footerImage1 from '../assets/company/firstPageimgs/footer_img1.webp';
import footerImage2 from '../assets/company/firstPageimgs/odop.avif';

const Footer = () => {
    return (
        <>
            <footer className='footer h-130 px-20 mt-8'>
                <div className='flex flex-row items-center justify-center gap-4 p-2 pt-10'>
                    <div className='font-serif text-white'>Stay in touch with us</div>
                    <div className='border-dashed border p-1.25 border-white'>
                        <div className='flex flex-row p-2 bg-white h-10 w-60 justify-between items-center'>
                            <div className='flex-1 text-center text-gray-500 font-sans text-lg'>SIGN UP</div>
                            <div className='flex-none text-amber-400 text-[30px] hover:cursor-pointer'>&#8594;</div>
                        </div>
                    </div>
                </div>
                <div className='footer-2 mt-5'>
                    <div className='flex flex-row justify-between text-gray-400 font-serif font-thin'>
                        <div>
                            <ul>
                                <li>Explore</li>
                                <li>
                                    <ul className='mt-5 text-xs space-y-1'>
                                        <li className='cursor-pointer hover:text-amber-400'>About us</li>
                                        <li className='cursor-pointer hover:text-amber-400'>Partner onboarding</li>
                                        <li className='cursor-pointer hover:text-amber-400'>News and events</li>
                                        <li className='cursor-pointer hover:text-amber-400'>Work with us</li>
                                        <li className='cursor-pointer hover:text-amber-400'>Bulk Order</li>
                                        <li className='cursor-pointer hover:text-amber-400'>Return Order</li>
                                        <li className='cursor-pointer hover:text-amber-400'>Blogs</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Help</li>
                                <li>
                                    <ul className='mt-5 text-xs space-y-1'>
                                        <li className='cursor-pointer hover:text-amber-400'>Privacy and terms of use</li>
                                        <li className='cursor-pointer hover:text-amber-400'>Shipping and cancellation</li>
                                        <li className='cursor-pointer hover:text-amber-400'>FAQ's</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Connect with us</li>
                                <li>
                                    <ul className='mt-5 text-xs space-y-1'>
                                        <li className='cursor-pointer hover:text-amber-400'>Contact us</li>
                                        <li className='cursor-pointer hover:text-amber-400'>079-66131721</li>
                                        <li className='cursor-pointer hover:text-amber-400'>+91 6359 021 222</li>
                                        <li className='cursor-pointer hover:text-amber-400'>okhaicfe@okhai.org</li>
                                        <li className='cursor-pointer hover:text-amber-400'>Store locator</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Categories</li>
                                <li>
                                    <ul className='mt-5 text-xs space-y-1'>
                                        <li className='cursor-pointer  hover:text-amber-400'>Apparel</li>
                                        <li className='cursor-pointer hover:text-amber-400'>Home decor</li>
                                        <li className='cursor-pointer hover:text-amber-400'>Accessories</li>
                                        <li className='cursor-pointer hover:text-amber-400'>Gift and toys</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-row justify-between mt-10'>
                            <figure>
                                <img className='h-20 cursor-pointer' src={footerImage1} alt="Footer Image 1" />
                            </figure>
                            <figure>
                                <img className='ml-4 h-20 cursor-pointer' src={footerImage2} alt="Footer Image 2" />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className='flex flex-cols justify-between mt-3 text-white'>
                    <div>2024 Okhai.org | OKHAI is a non-profit Organisation.</div>
                    <div className='flex flex-cols gap-4 mt-2'>
                        <a href="https://www.facebook.com/OkhaiIndia/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 18 18">
                                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z" fill='currentColor'></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/okhai_org/" target="_blank" rel="noopener noreferrer">
                            <svg aria-hidden="true" focusable="false" class="icon icon-instagram" viewBox="0 0 18 18">
                                <path fill="currentColor" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"></path>
                                <path fill="currentColor" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z">
                                </path>
                            </svg>
                        </a>
                        <a href="https://in.pinterest.com/okhaicfeorg/" target="_blank" rel="noopener noreferrer">
                            <svg aria-hidden="true" focusable="false" class="icon icon-pinterest" viewBox="0 0 17 18">
                                <path fill="currentColor" d="M8.48.58a8.42 8.42 0 015.9 2.45 8.42 8.42 0 011.33 10.08 8.28 8.28 0 01-7.23 4.16 8.5 8.5 0 01-2.37-.32c.42-.68.7-1.29.85-1.8l.59-2.29c.14.28.41.52.8.73.4.2.8.31 1.24.31.87 0 1.65-.25 2.34-.75a4.87 4.87 0 001.6-2.05 7.3 7.3 0 00.56-2.93c0-1.3-.5-2.41-1.49-3.36a5.27 5.27 0 00-3.8-1.43c-.93 0-1.8.16-2.58.48A5.23 5.23 0 002.85 8.6c0 .75.14 1.41.43 1.98.28.56.7.96 1.27 1.2.1.04.19.04.26 0 .07-.03.12-.1.15-.2l.18-.68c.05-.15.02-.3-.11-.45a2.35 2.35 0 01-.57-1.63A3.96 3.96 0 018.6 4.8c1.09 0 1.94.3 2.54.89.61.6.92 1.37.92 2.32 0 .8-.11 1.54-.33 2.21a3.97 3.97 0 01-.93 1.62c-.4.4-.87.6-1.4.6-.43 0-.78-.15-1.06-.47-.27-.32-.36-.7-.26-1.13a111.14 111.14 0 01.47-1.6l.18-.73c.06-.26.09-.47.09-.65 0-.36-.1-.66-.28-.89-.2-.23-.47-.35-.83-.35-.45 0-.83.2-1.13.62-.3.41-.46.93-.46 1.56a4.1 4.1 0 00.18 1.15l.06.15c-.6 2.58-.95 4.1-1.08 4.54-.12.55-.16 1.2-.13 1.94a8.4 8.4 0 01-5-7.65c0-2.3.81-4.28 2.44-5.9A8.04 8.04 0 018.48.57z">
                                </path>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/@okhai_org" target="_blank" rel="noopener noreferrer">
                            <svg aria-hidden="true" focusable="false" class="icon icon-youtube" viewBox="0 0 100 70">
                                <path d="M98 11c2 7.7 2 24 2 24s0 16.3-2 24a12.5 12.5 0 01-9 9c-7.7 2-39 2-39 2s-31.3 0-39-2a12.5 12.5 0 01-9-9c-2-7.7-2-24-2-24s0-16.3 2-24c1.2-4.4 4.6-7.8 9-9 7.7-2 39-2 39-2s31.3 0 39 2c4.4 1.2 7.8 4.6 9 9zM40 50l26-15-26-15v30z" fill="currentColor">
                                </path>
                            </svg>
                        </a> 
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;