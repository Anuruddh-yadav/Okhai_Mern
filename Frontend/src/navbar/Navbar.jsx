import { Link } from "react-router-dom";

import NavbarSlider from './NavbarSlider.jsx';
import clsx from "clsx";

import React, { useState, useRef, useEffect } from "react";

import Logo from './navbar_assets/okhai_logo.png';
import Heart from './navbar_assets/heart.png';
import Search from './navbar_assets/search.png';
import User from './navbar_assets/user.png';
import Cart from './navbar_assets/cart.png';

// Kurta menu Image 
import kurtaMenuImg1 from "./navbar_assets/kurta/kurtaMenuImg1.png"
import kurtaMenuImg2 from "./navbar_assets/kurta/kurtaMenuImg2.png"
import kurtaMenuImg3 from "./navbar_assets/kurta/kurtaMenuImg3.png"
import kurtaMenuImg4 from "./navbar_assets/kurta/kurtaMenuImg4.png"
import kurtaMenuImg5 from "./navbar_assets/kurta/kurtaMenuImg5.png"
//  Saree menu Image 
import SareeMenuImg1 from "./navbar_assets/Saree/SareeMenuImg1.png"
import SareeMenuImg2 from "./navbar_assets/Saree/SareeMenuImg2.png"
import SareeMenuImg3 from "./navbar_assets/Saree/SareeMenuImg3.png"
import SareeMenuImg4 from "./navbar_assets/Saree/SareeMenuImg4.png"
import SareeMenuImg5 from "./navbar_assets/Saree/SareeMenuImg5.png"

// Gifting Menu img   /GiftingMenuImg MenuImg2

import ChristmasMenuImg1 from "./navbar_assets/Gifting/GiftingMenuImg1.png"
import ChristmasMenuImg2 from "./navbar_assets/Gifting/GiftingMenuImg2.png"
import ChristmasMenuImg3 from "./navbar_assets/Gifting/GiftingMenuImg3.png"
import ChristmasMenuImg4 from "./navbar_assets/Gifting/GiftingMenuImg4.png"
import ChristmasMenuImg5 from "./navbar_assets/Gifting/GiftingMenuImg5.png"

// Accesories Menu Img

import AccessoriesMenuImg1 from "./navbar_assets/Accessary/accessory1.png";
import AccessoriesMenuImg2 from "./navbar_assets/Accessary/accessory2.png";

// Home Menu Img
import HomeMenuImg1 from "./navbar_assets/Home/HomeMenuImg1.png"
import HomeMenuImg2 from "./navbar_assets/Home/HomeMenuImg2.png"

//Artisans Menu Img 
import ArtisansMenuImg1 from "./navbar_assets/Artisans/ArtisansMemuImg1.png"
import ArtisansMenuImg2 from "./navbar_assets/Artisans/ArtisansMemuImg2.png"

//Clothing Menu Img
import Cloth1 from "./navbar_assets/Clothing/clothing1.png"
import Cloth2 from "./navbar_assets/Clothing/clothing2.png"

//see All 
import SeeImage1  from "./navbar_assets/SellAll/seeAll1.png"
import SeeImage2  from "./navbar_assets/SellAll/seeAll2.png"

const Navbar = () => {

    const [active, setActive] = useState();
    const dropdownRef = useRef(null);
    // Close dropdown when clicking outside

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActive(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const women = [{ id: "1", title: "All Clothing" },
    { id: "2", title: "New Arrivals" },
    { id: "3", title: "Kurtas" },
    { id: "4", title: "Kurtas & Kurta Sets" },
    { id: "5", title: "Tops & Blouses" },
    { id: "6", title: "Jackets & Blazers" },
    { id: "7", title: "Kaftans" },
    { id: "8", title: "Bottom Wear" },
    { id: "9", title: "Dupattas, Scarfs & Stoles" },
    { id: "10", title: "Night Suits" },
    ]
    const Men = [
        { id: "1", title: "Kurta" },
        { id: "2", title: "Shirts" },
        { id: "3", title: "Ties" },
        { id: "4", title: "Shorts" },
    ]
    const Kids = [
        { id: "1", title: "Kids Clothing" },
        { id: "2", title: "Furnishing" },
        { id: "3", title: "Kids Winterwear" },
    ]
    const Crafts = [
        { id: "1", title: "Mirror Work" },
        { id: "2", title: "Applique" },
        { id: "3", title: "Hand Embroidered" },
        { id: "4", title: "Ikat" },
        { id: "5", title: "Suf Embroidery" },
        { id: "6", title: "Ajrakh" },
        { id: "7", title: "Neela - Indigo" },
        { id: "8", title: "Tie & Dye" },
        { id: "9", title: "Mukaish" },
        { id: "10", title: "Handblock Print" },
        { id: "11", title: "Hand Painted - Apparel" },
        { id: "12", title: "Gota Patti" },
        { id: "13", title: "Kalamkari" },
        { id: "14", title: "Jamdani" },
        { id: "15", title: "Karzobi" },
        { id: "16", title: "Crochet" },
        { id: "17", title: "Noor - Chikankari" },
        { id: "18", title: "Aari Work" },
        { id: "19", title: "One of a Kind - Samples" },
        { id: "20", title: "Best seller" },
    ]
    const Kurtas = [
        { id: "1", title: "Hand Painted Kurta" },
        { id: "2", title: "Straight Kurta" },
        { id: "3", title: "Hand Printed Kurtas & Sets" },
        { id: "4", title: "Sleeveless Kurtas & Sets" },
    ]
    const Saree = [
        { id: "1", title: "Ajrakh" },
        { id: "2", title: "Hand Painted" },
        { id: "3", title: "Handblock Printed" },
        { id: "4", title: "Handwoven" },
        { id: "5", title: "Chikankari" },

    ]

    const Accessary_Fashion_Jewellery = [
        { id: "1", title: "Earrings" },
        { id: "2", title: "Neckpieces" },
        { id: "3", title: "Bracelets, Anklets & Rings" },
        { id: "4", title: "All Jewellery" },
    ]
    const Accessary_Bags = [

        { id: "1", title: "Total Bags" },
        { id: "2", title: "Beach Bags" },
        { id: "3", title: "Laptop Bags" },
        { id: "4", title: "Pouches" },
        { id: "5", title: "Handbags" },
        { id: "6", title: "Clutches and Potlis" },
        { id: "7", title: "Bucket Bags" },
    ]
    const Accessary_Silver_Jewellery = [
        { id: "1", title: "Earrings" },
        { id: "2", title: "Silver Neckpieces" },
        { id: "3", title: "Silver Bracelets, Anklets & Rings" },
    ]
    const Accessary_Collections = [
        { id: "1", title: "Hand Embroidery" },
        { id: "2", title: "Chrochet" },
        { id: "3", title: "Dokra" },
        { id: "4", title: "Black Pottery" },
        { id: "5", title: "Upcycling and Recycling" },
    ]
    const Accessary_Other_accessories = [
        { id: "1", title: "Key chains" },
        { id: "2", title: "Aprons" },
        { id: "3", title: "Dupattas" },
        { id: "4", title: "Hair Accessories" },
        { id: "5", title: "Hats" },
        { id: "6", title: "Footwear" },
        { id: "7", title: "Masks" },
        { id: "8", title: "Stoles" },
        { id: "9", title: "Winter Accessories" },
    ]
    // Home 
    const Home_decors = [
        { id: "1", title: "Lightings" },
        { id: "2", title: "Planters & vases" },
        { id: "3", title: "Seating" },
        { id: "4", title: "Storage" },
        { id: "5", title: "Table Tops" },
    ]
    const Home_collections = [
        { id: "1", title: "Hand Embroidery" },
        { id: "2", title: "Basketry" },
        { id: "3", title: "Handblock Print" },
        { id: "4", title: "Macrame Home" },
        { id: "5", title: "Crochet Home" },
        { id: "6", title: "Hand Painting - Home" },
        { id: "7", title: "Blue Pottery - Home" },
        { id: "8", title: "Metal Craft - Home" },
    ]
    const Home_decor = [
        { id: "1", title: "Hoops" },
        { id: "2", title: "Wall Hanging" },
        { id: "3", title: "Wall Plates" },
    ]
    const Home_Furnishing = [
        { id: "1", title: "Basket" },
        { id: "2", title: "Bed Covers" },
        { id: "3", title: "Curtains" },
        { id: "4", title: "Cushion Covers" },
        { id: "5", title: "Rugs & Mats" },
        { id: "6", title: "Throws And Quilts" },
        { id: "7", title: "Utility Bags & Puches" }
    ]

    const Kitchen_Dinning = [
        { id: "1", title: "Apron" },
        { id: "2", title: "Drinkware" },
        { id: "3", title: "Kitchenware" },
        { id: "4", title: "Serveware" },
        { id: "5", title: "Table Linen" },
        { id: "6", title: "Trays and Platters" },
        { id: "7", title: "Bath" },
    ]

    // Gifting

    const Gifting_Artisanal = [
        { id: "1", title: "Ajrakh" },
        { id: "2", title: "Hand Painted" },
        { id: "3", title: "Handblock Printed" },
        { id: "4", title: "Handwoven" },
        { id: "5", title: "Chikankari" },
    ]
    const Gifting_Embroidery = [
        { id: "1", title: "Okhai" },
        { id: "2", title: "Shrujan" },
        { id: "3", title: "Porgai" },
        { id: "4", title: "Urmul" },
        { id: "5", title: "Bebaak" },
        { id: "6", title: "Onset Homes" },
        { id: "7", title: "Dhaga HandCraft" },
        { id: "8", title: "Sadhna" },
        { id: "9", title: "Whitewater Kids" },
        { id: "10", title: "Rangsutra" },
        { id: "11", title: "Leera" },
        { id: "12", title: "Chambray" },
        { id: "13", title: "Soleilclo" },
        { id: "14", title: "Samuday Craft" },

    ]
    const Gifting_Metal_Craft = [
        { id: "1", title: "Studio Coppre" },
        { id: "2", title: "Anantaya Decor" },
    ]
    const Gifting_ChikanKari = [
        { id: "1", title: "Phae" },
        { id: "2", title: "Shwet" },
    ]
    const Gifting_Basketry = [
        { id: "1", title: "Skadam Haat" },
        { id: "2", title: "Kraftribe" },
        { id: "3", title: "Pine Cone" },
    ]
    const Gifting_Eco_printing = [
        { id: "1", title: "Mulya" },
        { id: "2", title: "Bageeya" }
    ]
    const Gifting_Handblock_Printing = [
        { id: "1", title: "Sooti Syahi" },
        { id: "2", title: "Creative Bee" },
        { id: "3", title: "Kirgiti" },
        { id: "4", title: "Shuddhi" },
        { id: "5", title: "Dharan" },
        { id: "6", title: "Poddar Export" },
        { id: "7", title: "Ektara" },
        { id: "8", title: "Inkriti" },
    ]
    const Gifting_Ajrakh = [
        { id: "1", title: "Tenrao by Riyaz Khatri" },
        { id: "2", title: "Jahagir Khatri" },
        { id: "3", title: "Jabbar khatri" },
        { id: "4", title: "Okhai" },
    ]
    const Gifting_Upcycling_Recycling = [
        { id: "1", title: "Lukka Chuppi" },
        { id: "2", title: "Whe by Abira" },
        { id: "3", title: "Patch over Patch" },
        { id: "4", title: "The Good Doll" },
        { id: "5", title: "Swatanya" },
        { id: "6", title: "Nimmit Creations" },

    ]
    const Gifting_Terracotta = [
        { id: "1", title: "Terracotta by sachi" },
        { id: "2", title: "Antarang" },
    ]
    const Gifting_games = [
        { id: "1", title: "Forggmag" },
        { id: "2", title: "Potli" }
    ]
    const Gifting_Hand_Weaving = [
        { id: "1", title: "Sirohi" },
        { id: "2", title: "Handweave India" },
        { id: "3", title: "Craftoons" },
        { id: "4", title: "Avani Kumaon" },
        { id: "5", title: "Punarjeevana" },
        { id: "6", title: "India Craft House" },
        { id: "7", title: "Moralfibre" },
        { id: "8", title: "VWas" },
        { id: "9", title: "Sikki Grass" },
        { id: "10", title: "Dharini" },
        { id: "11", title: "Senses Play" },
        { id: "12", title: "Looms of Ladakh" },
        { id: "13", title: "Bunkar Bihar" },
        { id: "14", title: "Gramya" },
        { id: "15", title: "Myraa" },
        { id: "16", title: "Fifth Origins" },
    ]
    const Gifting_Blue_Pottery = [
        { id: "1", title: "Gopal Saini" },
    ]
    const Gifting_Ceramics = [
        { id: "1", title: "Ikai Asai" },
    ]
    const Gifting_Tie_Die = [
        { id: "1", title: "Murva Colective" },
    ]
    const Gifting_Candles_and_Perfumes = [
        { id: "1", title: "Boond Fragrances" },
    ]

    // SEE  all 
    const see_all =[
      {id:"1" , title:"Sale - Kurtas"},
      {id:"2" , title:"Sale - Kurta Pant Sets"},
      {id:"3" , title:"Sale - Dresses"},
      {id:"4" , title:"Sale - Cushion Covers"},
      {id:"5" , title:"Sale - Bomber Jacket"},
      {id:"6" , title:"Sale - Tops"},
      {id:"7" , title:"Sale - Basketry"},
      {id:"8" , title:"Sale All Apparles"},
      {id:"9" , title:"Rescue"},
      {id:"10" , title:"Sample Sale"},
    ]

    return (
        <>

            <div
                className="w-full bg-white  relative top-0 left-0 z-50 shadow-md  mt-10"
                ref={dropdownRef}
            >
                <div className="w-full flex justify-between items-center px-4 md:px-10 ">
                    <div className="flex items-center">
                        <Link to="/">
                            <img
                                src={Logo}
                                alt="Okhai Logo"
                                className="px-8 h-22 py-2 cursor-pointer"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center px-10 py-6">
                        <img
                            src={Search}
                            alt="Search"
                            className="px-1 h-9 cursor-pointer py-2"
                        />
                        <img
                            src={User}
                            alt="User"
                            className="px-1 h-9 cursor-pointer  py-2"
                        />
                        <img
                            src={Heart}
                            alt="Wishlist"
                            className="px-1 h-9  cursor-pointer py-2"
                        />
                        <img
                            src={Cart}
                            alt="Cart"
                            className="px-1 h-9  cursor-pointer py-2"
                        />
                    </div>

                    <div className="md:hidden flex items-center pr-4">
                        <span className="text-2xl font-bold">☰</span>
                    </div>
                </div>

                <div className="hidden md:flex w-auto  gap-19 py-3 justify-between text-sm tracking-wide font-medium px-22">
                    <button>
                        <span
                            className={clsx(
                                "cursor-pointer",
                                active === "CLOTHING" ? "text-orange-400" : "text-[#0F0F0F]"
                            )}
                            onClick={() => setActive(active === "CLOTHING" ? null : "CLOTHING")}
                        >
                            CLOTHING {active === "CLOTHING" ? "▲" : "▼"}
                        </span>
                    </button>

                    <button>
                        <span
                            className={clsx(
                                "cursor-pointer",
                                active === "KURTAS" ? "text-orange-400 " : "text-[#0F0F0F]"
                            )}
                            onClick={() => setActive(active === "KURTAS" ? null : "KURTAS")}
                        >
                            KURTAS {active === "KURTAS" ? "▲" : "▼"}
                        </span>
                    </button>

                    <button>
                        <span
                            className={clsx(
                                "cursor-pointer",
                                active === "SAREES" ? "text-orange-400 " : "text-[#0F0F0F]"
                            )}
                            onClick={() => setActive(active === "SAREES" ? null : "SAREES")}
                        >
                            SAREES {active === "SAREES" ? "▲" : "▼"}
                        </span>
                    </button>

                    <button>
                        <span
                            className={clsx(
                                "cursor-pointer",
                                active === "ACCESSORIES" ? "text-orange-400 " : "text-[#0F0F0F]"
                            )}
                            onClick={() => setActive(active === "ACCESSORIES" ? null : "ACCESSORIES")}
                        >
                            ACCESSORIES {active === "ACCESSORIES" ? "▲" : "▼"}
                        </span>
                    </button>

                    <button>
                        <span
                            className={clsx(
                                "cursor-pointer",
                                active === "HOME" ? "text-orange-400 " : "text-[#0F0F0F]"
                            )}
                            onClick={() => setActive(active === "HOME" ? null : "HOME")}
                        >
                            HOME {active === "HOME" ? "▲" : "▼"}
                        </span>
                    </button>

                    <button>
                        <span
                            className={clsx(
                                "cursor-pointer",
                                active === "GIFTING" ? "text-orange-400 " : "text-[#0F0F0F]"
                            )}
                            onClick={() => setActive(active === "GIFTING" ? null : "GIFTING")}
                        >
                            GIFTING {active === "GIFTING" ? "▲" : "▼"}
                        </span>
                    </button>

                    <button>
                        <span
                            className={clsx(
                                "cursor-pointer",
                                active === "ARTISANS" ? "text-orange-400 " : "text-[#0F0F0F]"
                            )}
                            onClick={() => setActive(active === "ARTISANS" ? null : "ARTISANS")}
                        >
                            ARTISANS {active === "ARTISANS" ? "▲" : "▼"}
                        </span>
                    </button>
                    <button>
                        <span
                            className={clsx(
                                "cursor-pointer",
                                active === "SALE ALL" ? "text-red-600 " : "text-red-600"
                            )}
                            onClick={() => setActive(active === "SALE ALL" ? null : "SALE ALL")}
                        >
                            SALE ALL  {active === "SALE ALL" ? "▲" : "▼"}
                        </span>
                    </button>


                </div>

                {/* Dropdown menu */}
                {/*   Clothing MegaMenu  Clothing MegaMenu     Clothing MegaMenu     Clothing MegaMenu  */}


                {active === "CLOTHING" && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-300 bg-white shadow-lg max-h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent scrollbar-thumb-rounded-full">
                        <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-6 gap-5">

                            {/* ---------- WOMEN ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3 font-Lato">Women</h2>
                                <ul className="space-y-1 text-sm font-Inter">
                                    {women.map(menu => (
                                        <li id={menu.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`collections/${menu.title}`}
                                                className="hover:text-orange-500"
                                            >
                                                {menu.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* ---------- MEN ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3">Men</h2>
                                <ul className="space-y-1 text-sm">
                                    {Men.map(menu => (
                                        <li id={menu.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`collections/${menu.title}`}
                                                className="hover:text-orange-500"
                                            >
                                                {menu.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* ---------- KIDS ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3">Kids</h2>
                                <ul className="space-y-1 text-sm">
                                    {Kids.map(menu => (
                                        <li id={menu.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`collections/${menu.title}`}
                                                className="hover:text-orange-500"
                                            >
                                                {menu.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* ---------- CRAFTS ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3">Crafts</h2>
                                <ul className="space-y-1 text-sm">
                                    {Crafts.map(menu => (
                                        <li id={menu.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`collections/${menu.title}`}
                                                className="hover:text-orange-500"
                                            >
                                                {menu.title}
                                            </Link>
                                        </li>
                                    ))}</ul>
                            </div>

                            {/* ---------- RIGHT IMAGES ---------- */}
                            <div className="flex flex-col" onClick={() => setActive(false)} >
                                <Link to="collections/tops-blouses" >
                                    <img src={Cloth1} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif">Artisanal Tops</p>
                                </Link>
                            </div>

                            <div className="flex flex-col" onClick={() => setActive(false)} >
                                <Link to="collections/artisanal-dresses">
                                    <img src={Cloth2} alt="Artisanal Dresses" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif">Artisanal Dresses</p>
                                </Link>
                            </div>

                        </div>
                        <button
                            onClick={() => setActive(null)}
                            className="absolute top-3 right-3 text-xl text-gray-700 hover:text-black"
                        >
                            ✕
                        </button>
                    </div>

                )}
                {/* Kurtas Mega menu  Kurtas Mega menu    Kurtas Mega menu    Kurtas Mega menu  Kurtas Mega menu  */}

                {active === "KURTAS" && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-300 bg-white shadow-lg max-h-96">
                        <button
                            onClick={() => setActive(null)}
                            className="absolute top-3 right-3 text-xl text-gray-700 hover:text-black"
                        >
                            ✕
                        </button>
                        <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-6 gap-5">

                            {/* ---------- All the product   ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3 ">Kurtas</h2>
                                <ul className="space-y-1 text-sm font-Inter ">
                                    {
                                        Kurtas.map(item => (
                                            <li key={item.id}>
                                                <Link
                                                    onClick={() => setActive(false)}
                                                    to={`collections/${item.title}`}
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>

                            {/* ---------- Img 1 ---------- */}
                            <div className="flex flex-col" onClick={() => setActive(false)} >
                                <Link to="/collections/kurta-sets">
                                    <img src={kurtaMenuImg1} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif ">Kurta sets</p>
                                </Link>
                            </div>


                            {/* ---------- IMg 2  ---------- */}
                            <div className="flex flex-col" onClick={() => setActive(false)} >
                                <Link to="/collections/straight-kurtas">
                                    <img src={kurtaMenuImg2} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif">Straight Kurtas</p>
                                </Link>
                            </div>


                            {/* ---------- Img 3 ---------- */}
                            <div className="flex flex-col" onClick={() => setActive(false)} >
                                <Link to="/collections/embroidered-kurtas">
                                    <img src={kurtaMenuImg3} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif">Embroidered Kurtas </p>
                                </Link>
                            </div>

                            {/* ---------- Img 4 ---------- */}
                            <div className="flex flex-col" onClick={() => setActive(false)} >
                                <Link to="/collections/handpainted-kurtas">
                                    <img src={kurtaMenuImg4} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif">Handpainted Kurtas </p>
                                </Link>
                            </div>

                            <div className="flex flex-col" onClick={() => setActive(false)} >
                                <Link to="/collections/workwear-kurtas">
                                    <img src={kurtaMenuImg5} alt="Artisanal Dresses" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif">Workwear Kurtas </p>
                                </Link>
                            </div>

                        </div>
                    </div>
                )}

                {/* Sarees Mega menu  Sarees Mega menu      Sarees Mega menu      Sarees Mega menu    Sarees Mega menu   */}

                {active === "SAREES" && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-300 bg-white shadow-lg max-h-96">
                        <button
                            onClick={() => setActive(null)}
                            className="absolute top-3 right-3 text-xl text-gray-700 hover:text-black"
                        >
                            ✕
                        </button>
                        <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-6 gap-5">

                            {/* ---------- All the product   ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3 ">  Artisanal Sarees </h2>
                                <ul className="space-y-1 text-sm font-Inter ">
                                    {
                                        Saree.map(item => (
                                            <li key={item.id}>
                                                <Link
                                                    onClick={() => setActive(false)}
                                                    to={`/collections/${item.title}`}
                                                    className="hover:text-orange-500"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}

                                </ul>
                            </div>

                            {/* ---------- Img 1 ---------- */}
                            <div className="flex flex-col" onClick={() => setActive(false)} >
                                <Link to="/collections/handwoven-sarees">
                                    <img src={SareeMenuImg1} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif ">Handwoven Sarees</p>
                                </Link>
                            </div>


                            {/* ---------- IMg 2  ---------- */}
                            <div className="flex flex-col" onClick={() => setActive(false)} >
                                <Link to="/collections/ajrakh-sarees">
                                    <img src={SareeMenuImg2} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif">Ajrakh Saarees</p>
                                </Link>
                            </div>


                            {/* ---------- Img 3 ---------- */}
                            <div className="flex flex-col" onClick={() => setActive(false)} >
                                <Link to="/collections/madubani-sarees">
                                    <img src={SareeMenuImg3} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif">Madubani Sarees</p>
                                </Link>
                            </div>

                            {/* ---------- Img 4 ---------- */}
                            <div className="flex flex-col" onClick={() => setActive(false)} >
                                <Link to="/collections/banarasi-silk-sarees">
                                    <img src={SareeMenuImg4} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif">Banarasi Silk Saree</p>
                                </Link>
                            </div>

                            <div className="flex flex-col" onClick={() => setActive(false)} >
                                <Link to="/collections/handprinted-sarees">
                                    <img src={SareeMenuImg5} alt="Artisanal Dresses" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif">Handprinted Sarees </p>
                                </Link>
                            </div>

                        </div>
                    </div>
                )}

                {/*   ACCESSORIES MegaMenu  ACCESSORIES MegaMenu     ACCESSORIES MegaMenu     ACCESSORIES MegaMenu  */}

                {active === "ACCESSORIES" && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-300 bg-white shadow-lg max-h-96 overflow-y-auto">
                        <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-6 gap-5">

                            {/* ---------- Fashion Jewelerrey And Bags  ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3 font-Lato" to="/collections/jwellery">Fashion Jewellery</h2>
                                <ul className="space-y-1 text-sm font-Inter">
                                    {Accessary_Fashion_Jewellery.map(item => (
                                        <li key={item.id} >
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="hover:text-orange-500"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}



                                    <h2 className="font-semibold text-base mb-3 mt-2 font-Lato">Bags </h2>
                                    {
                                        Accessary_Bags.map(item => (
                                            <li key={item.id}>
                                                <Link
                                                    onClick={() => setActive(false)}
                                                    to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="hover:text-orange-500"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>

                            {/* ---------- Silver Jewellery and Collections  ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3 font-Lato">Silver Jewellery</h2>
                                <ul className="space-y-1 text-sm font-Inter">
                                    {
                                        Accessary_Silver_Jewellery.map(item => (
                                            <li key={item.id}>
                                                <Link
                                                    onClick={() => setActive(false)}
                                                    to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))
                                    }


                                    <h2 className="font-semibold text-base mt-3  mb-3 font-Lato">Collection </h2>
                                    {
                                        Accessary_Collections.map(item => (
                                            <li key={item.id}>
                                                <Link
                                                    onClick={() => setActive(false)}
                                                    to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>


                            {/* ---------- Other Accessory ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3">Other Accessory </h2>
                                <ul className="space-y-1 text-sm">
                                    {
                                        Accessary_Other_accessories.map(item => (
                                            <li key={item.id}>
                                                <Link
                                                    onClick={() => setActive(false)}
                                                    to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))
                                    }


                                </ul>
                            </div>

                            {/* ---------- CRAFTS ---------- */}
                            <div>

                                <ul className="space-y-3 text-sm">
                                    <li><Link onClick={() => setActive(false)} to="/collections/jewellery-under-1500" className="hover:text-gray-500 mb-3 font-Inter">Jewellery Under 1500</Link></li>
                                    <li><Link onClick={() => setActive(false)} to="/collections/accessories-under-1500" className="hover:text-gray-500 mb-3 font-Inter">Accessories  Under 1500</Link></li>

                                    <li><Link onClick={() => setActive(false)} to="/collections/gifts-under-1500" className="hover:text-gray-500 mb-3 font-Inter">Gifts Under 1500 </Link></li>
                                </ul>
                            </div>

                            {/* ---------- RIGHT IMAGES ---------- */}
                            <div className="flex flex-col">
                                <div>
                                    <Link onClick={() => setActive(false)} to="/collections/jewellery">
                                        <img src={AccessoriesMenuImg1} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    </Link>
                                    <p className="mt-3"><Link onClick={() => setActive(false)} to="/collections/jewellery" className="font-semibold text-sm mt-4 cursor-pointer font-serif"> Jewellery </Link></p>

                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div>
                                    <Link onClick={() => setActive(false)} to="/collections/bags">
                                        <img src={AccessoriesMenuImg2} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    </Link>
                                    <p className="mt-3"><Link onClick={() => setActive(false)} to="/collections/bags" className="font-semibold text-sm mt-4 cursor-pointer font-serif"> Handcrafted Bags </Link></p>

                                </div>
                            </div>

                        </div>
                        <button
                            onClick={() => setActive(null)}
                            className="absolute top-3 right-3 text-xl text-gray-700 hover:text-black"
                        >
                            ✕
                        </button>
                    </div>

                )}

                {/*   HOME MegaMenu  HOME MegaMenu     HOME MegaMenu     HOME MegaMenu  */}

                {active === "HOME" && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-300 bg-white shadow-lg max-h-96 overflow-y-auto">
                        <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-6 gap-5">

                            {/* ---------- Home Decor    ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3 font-Lato">Home Decor </h2>
                                <ul className="space-y-1 text-sm font-Inter">
                                    {Home_decors.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="hover:text-orange-400"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                    <Link to="/collections/Collection" onClick={() => setActive(false)} >
                                        <span className="font-semibold text-base mb-3 font-Lato" >Collection </span>
                                    </Link>
                                    {
                                        Home_collections.map(item => (
                                            <li key={item.id}>
                                                <Link
                                                    onClick={() => setActive(false)}
                                                    to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="hover:text-orange-400"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>

                            {/* ---------- Wall Decor   ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3 font-Lato">Wall Decor </h2>
                                <ul className="space-y-1 text-sm font-Inter">
                                    {Home_decor.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="hover:text-orange-500"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}

                                </ul>
                            </div>


                            {/* ---------- Home Furnishing  ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3">Home Furnishing </h2>
                                <ul className="space-y-1 text-sm">
                                    {
                                        Home_Furnishing.map(item => (
                                            <li key={item.id}>
                                                <Link
                                                    onClick={() => setActive(false)}
                                                    to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="hover:text-orange-500"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))

                                    }

                                </ul>
                            </div>

                            {/* ---------- Kitchen Dinning  ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3">Kitchen Dinning </h2>
                                <ul className="space-y-1 text-sm">
                                    {
                                        Kitchen_Dinning.map(item => (
                                            <li key={item.id}>
                                                <Link
                                                    onClick={() => setActive(false)}
                                                    to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="hover:text-orange-500"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))

                                    }
                                </ul>
                            </div>


                            {/* ---------- RIGHT IMAGES ---------- */}
                            <div className="flex flex-col">
                                <div>
                                    <Link onClick={() => setActive(false)} to="/collections/handmade-cushions">
                                        <img src={HomeMenuImg1} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    </Link>
                                    <p className="mt-3"><Link onClick={() => setActive(false)} to="/collections/handmade-cushions" className=" text-sm mt-4 cursor-pointer font-serif"> Handmade Cushoins  </Link></p>

                                </div>
                            </div>
                            {/* ---------- RIGHT IMAGES ---------- */}

                            <div className="flex flex-col">
                                <div>
                                    <Link onClick={() => setActive(false)} to="/collections/bags">
                                        <img src={HomeMenuImg2} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    </Link>
                                    <p className="mt-3"><Link onClick={() => setActive(false)} to="/collections/bags" className=" text-sm mt-4 cursor-pointer font-serif"> Home Decor  </Link></p>

                                </div>
                            </div>

                        </div>
                        <button
                            onClick={() => setActive(null)}
                            className="absolute top-3 right-3 text-xl text-gray-700 hover:text-black"
                        >
                            ✕
                        </button>
                    </div>

                )}


                {/* GIFTING Mega menu  GIFTING Mega menu      GIFTING Mega menu      GIFTING Mega menu    GIFTING Mega menu   */}

                {active === "GIFTING" && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-300 mx-h-96 bg-white shadow-lg">
                        <button
                            onClick={() => setActive(null)}
                            className="absolute top-3 right-3 text-xl text-gray-700 hover:text-black"
                        >
                            ✕
                        </button>
                        <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-6 gap-5">

                            {/* ---------- All the product   ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3 ">  Artisanal Sarees </h2>
                                <ul className="space-y-1 text-sm font-Inter ">
                                    {
                                        Gifting_Artisanal.map(item => (
                                            <li key={item.id}>
                                                <Link
                                                    onClick={() => setActive(false)}
                                                    to={`collections/${item.title}`}
                                                    className="hover:text-orange-500"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))

                                    }


                                </ul>
                            </div>

                            {/* ---------- Img 1 ---------- */}
                            <div className="flex flex-col">
                                <Link onClick={() => setActive(false)} to="/collections/gifts-for-her">
                                    <img src={ChristmasMenuImg1} alt="Artisanal Gifts" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif ">Artisanal Gifts</p>
                                </Link >
                            </div>


                            {/* ---------- IMg 2  ---------- */}
                            <div className="flex flex-col">
                                <Link onClick={() => setActive(false)} to="/collections/gift-cards">
                                    <img src={ChristmasMenuImg2} alt="Gift Cards" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif">Gift Cards</p>
                                </Link>
                            </div>


                            {/* ---------- Img 3 ---------- */}
                            <div className="flex flex-col">
                                <Link onClick={() => setActive(false)} to="/collections/sustainable-toys">
                                    <img src={ChristmasMenuImg3} alt="Sustainable Toys" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif">Sustainable Toys </p>
                                </Link>
                            </div>

                            {/* ---------- Img 4 ---------- */}
                            <div className="flex flex-col">
                                <Link onClick={() => setActive(false)} to="/collections/charms">
                                    <img src={ChristmasMenuImg4} alt="Charms" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif">Charms</p>
                                </Link>
                            </div>
                            {/* ---------- Img 5 ---------- */}
                            <div className="flex flex-col">
                                <Link to="/collections/festive-gifting" onClick={() => setActive(false)} >
                                    <img src={ChristmasMenuImg5} alt="Artisanal Dresses" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif">Festive Gifting</p>
                                </Link>
                            </div>

                        </div>
                    </div>
                )}

                {/*   ACCESSORIES MegaMenu  ACCESSORIES MegaMenu     ACCESSORIES MegaMenu     ACCESSORIES MegaMenu  */}

                {active === "ARTISANS" && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-300 bg-white shadow-lg max-h-96 overflow-y-auto">
                        <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-6 gap-5">

                            {/* ---------- Embroidery  ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3 font-Lato">Embroidery</h2>
                                <ul className="space-y-1 text-sm font-Inter">
                                    {
                                        Gifting_Embroidery.map(item => (
                                            <li key={item.id}>
                                                <Link
                                                    onClick={() => setActive(false)}
                                                    to={`/collections//${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="hover:text-orange-500"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))

                                    }

                                    <h2 className="font-semibold text-base mb-3 mt-3 font-Lato">Metal Craft</h2>

                                    {
                                        Gifting_Metal_Craft.map(item => (
                                            <li key={item.id}>
                                                <Link
                                                    onClick={() => setActive(false)}
                                                    to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="hover:text-orange-500"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))

                                    }
                                    <h2 className="font-semibold text-base mb-3 mt-3 font-Lato">Chikankari</h2>

                                    {
                                        Gifting_ChikanKari.map(item => (
                                            <li key={item.id}>
                                                <Link
                                                    onClick={() => setActive(false)}
                                                    to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="hover:text-orange-500"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))

                                    }

                                    <h2 className="font-semibold text-base mb-3 mt-3 font-Lato">Basketry</h2>
                                    {Gifting_Basketry.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="hover:text-orange-500"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                    }

                                    <h2 className="font-semibold text-base mb-3 mt-3 font-Lato">Eco Printing </h2>
                                    {Gifting_Eco_printing.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="hover:text-orange-500"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                    }

                                </ul>
                            </div>

                            {/* ---------- Handblock Printing   ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3 font-Lato">Handblock Printing</h2>
                                <ul className="space-y-1 text-sm font-Inter">
                                    {Gifting_Handblock_Printing.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="hover:text-orange-500"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                    }

                                    <h2 className="font-semibold text-base mt-3  mb-3 font-Lato">Ajrakh  </h2>

                                    {Gifting_Ajrakh.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="hover:text-orange-500"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                    }

                                    <h2 className="font-semibold text-base mt-3  mb-3 font-Lato">Upcycling and Recycling   </h2>
                                    {Gifting_Upcycling_Recycling.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="hover:text-orange-500"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                    }

                                    <h2 className="font-semibold text-base mt-3  mb-3 font-Lato">Terracotta  </h2>
                                    {Gifting_Terracotta.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="hover:text-orange-500"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                    }

                                    <h2 className="font-semibold text-base mt-3  mb-3 font-Lato">Games   </h2>
                                    {Gifting_games.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="hover:text-orange-500"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                    }

                                </ul>
                            </div>


                            {/* ---------- Hand Weaving ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3">Hand Weaving </h2>
                                <ul className="space-y-1 text-sm">
                                    {Gifting_Hand_Weaving.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="hover:text-orange-500"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                    }

                                    <h2 className="font-semibold text-base mb-3">Blue Pottery  </h2>
                                    {Gifting_Blue_Pottery.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="hover:text-orange-500"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                    }


                                    <h2 className="font-semibold text-base mb-3">Ceramics   </h2>
                                    {Gifting_Ceramics.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="hover:text-orange-500"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                    }

                                    <h2 className="font-semibold text-base mb-3">Tie & Die    </h2>
                                    {Gifting_Tie_Die.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="hover:text-orange-500"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                    }

                                    <h2 className="font-semibold text-base mb-3">Candles and Perfumes  </h2>
                                    {Gifting_Candles_and_Perfumes.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                onClick={() => setActive(false)}
                                                to={`/collections/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="hover:text-orange-500"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                    }

                                </ul>
                            </div>

                            {/* ---------- Chrochet ----------  Chrochet se karna hai muje */}
                            <div>

                                <ul className="space-y-1 text-sm">
                                    <li><Link onClick={() => setActive(false)} to="/collections/jwellery" className="hover:text-gray-500 mb-3 font-semibold text-base">Jewellery Under 1500</Link></li>
                                    <li><Link onClick={() => setActive(false)} to="/collections/accessories" className="hover:text-gray-500 mb-3 font-semibold text-base">Accessories  Under 1500</Link></li>
                                    <li><Link onClick={() => setActive(false)} to="/collections/gifts" className="hover:text-gray-500 mb-3 font-semibold text-base">Gifts Under 1500 </Link></li>
                                </ul>
                            </div>

                            {/* ---------- RIGHT IMAGES ---------- */}
                            <div className="flex flex-col">
                                <div>
                                    <Link onClick={() => setActive(false)} to="/collections/serveware">
                                        <img src={ArtisansMenuImg1} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    </Link>
                                    <p className="mt-3"><Link onClick={() => setActive(false)} to="/collections/serveware" className=" text-base mt-4 cursor-pointer font-serif"> Serveware </Link></p>

                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div>
                                    <Link onClick={() => setActive(false)} to="/collections/bags">
                                        <img src={ArtisansMenuImg2} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    </Link>
                                    <p className="mt-3"><Link onClick={() => setActive(false)} to="/collections/bags" className=" text-base mt-4 cursor-pointer font-serif">Baskets </Link></p>

                                </div>
                            </div>

                        </div>
                        <button
                            onClick={() => setActive(null)}
                            className="absolute top-3 right-3 text-xl text-gray-700 hover:text-black"
                        >
                            ✕
                        </button>
                    </div>

                )}

                {active === "SALE ALL" && (
                    <div className="absolute right-10 top-full w-auto bg-white shadow-lg max-h-96 overflow-auto px-10">

                        <div className="w-full px-10 py-8 grid grid-cols-3 gap-3">


                            {/* ---------- Embroidery  ---------- */}
                            <div>
                                <h2 className="font-semibold text-base mb-3 font-Lato">Embroidery</h2>
                                <ul className="space-y-1 text-sm font-Inter">
                                    {
                                        see_all.map(item => (
                                            <li key={item.id}>
                                                <Link
                                                    onClick={() => setActive(false)}
                                                    to={`/collections//${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="hover:text-orange-500"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))

                                    }

                                    

                                </ul>
                            </div>

                            {/* ---------- Image 1   ---------- */}
                            <div className="flex flex-col">
                                <div>
                                    <Link onClick={() => setActive(false)} to="/collections/artisan-apparel">
                                        <img src={SeeImage1} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    </Link>
                                    <p className="mt-3"><Link onClick={() => setActive(false)} to="/collections/artisan-apparel" className="text-base mt-4 cursor-pointer font-serif">Artisan Apparel </Link></p>

                                </div>
                            </div>

                            {/* ----------Images 2 ---------- */}
                            <div className="flex flex-col">
                                <div>
                                    <Link onClick={() => setActive(false)} to="/collections/home-furnishings">
                                        <img src={SeeImage2} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    </Link>
                                    <p className="mt-3"><Link onClick={() => setActive(false)} to="/collections/home-furnishings" className=" text-base mt-4 cursor-pointer font-serif"> Home Furnsishing </Link></p>

                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setActive(null)}
                            className="absolute top-3 right-3 text-xl text-gray-700 hover:text-black"
                        >
                            ✕
                        </button>
                    </div>

                )}



            </div>
        </>

    );
};
export default Navbar;  