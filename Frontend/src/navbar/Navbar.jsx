import { Link } from "react-router-dom";

import NavbarSlider from './NavbarSlider.jsx';
import clsx from "clsx";

import React, { useState, useRef, useEffect } from "react";
import { useCart } from "../hooks/useCart";

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
import SeeImage1 from "./navbar_assets/SellAll/seeAll1.png"
import SeeImage2 from "./navbar_assets/SellAll/seeAll2.png"

const Navbar = ({ onCartClick }) => {

    const { getTotalItems } = useCart();
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


    const women = [
        { id: "1", title: "All Clothing", l_url:"all-clothing" },
        { id: "2", title: "New Arrivals", l_url: "new-arrival" },
        { id: "3", title: "Kurtas", l_url: "kurtas" },
        { id: "4", title: "Kurtas & Kurta Sets", l_url: "kurtas-kurta-sets" },
        { id: "5", title: "Tops & Blouses", l_url: "tops-blouses" },
        { id: "6", title: "Jackets & Blazers", l_url: "jackets-blazers" },
        { id: "7", title: "Kaftans", l_url: "kaftans" },
        { id: "8", title: "Bottom Wear", l_url: "bottom-wear" },
        { id: "9", title: "Dupattas, Scarfs & Stoles", l_url: "dupattas-scarfs-stoles" },
        { id: "10", title: "Night Suits", l_url: "night-suits" },
    ]
    const Men = [
        { id: "1", title: "Kurta" , l_url: "kurta" },
        { id: "2", title: "Shirts", l_url: "shirts" },
        { id: "3", title: "Ties", l_url: "ties" },
        { id: "4", title: "Shorts", l_url: "shorts" },
    ]
    const Kids = [
        { id: "1", title: "Kids Clothing", l_url: "kids-clothing" },
        { id: "2", title: "Furnishing", l_url: "furnishing" },
        { id: "3", title: "Kids Winterwear", l_url: "kids-winterwear" },
    ]
    const Crafts = [
        { id: "1", title: "Mirror Work" , l_url: "mirror-work" },
        { id: "2", title: "Applique", l_url: "applique" },
        { id: "3", title: "Hand Embroidered", l_url: "hand-embroidered" },
        { id: "4", title: "Ikat", l_url: "ikat" },
        { id: "5", title: "Suf Embroidery", l_url: "suf-embroidery" },
        { id: "6", title: "Ajrakh", l_url: "ajrakh" },
        { id: "7", title: "Neela - Indigo", l_url: "neela-indigo" },
        { id: "8", title: "Tie & Dye", l_url: "tie-dye" },
        { id: "9", title: "Mukaish", l_url: "mukaish" },
        { id: "10", title: "Handblock Print", l_url: "handblock-print" },
        { id: "11", title: "Hand Painted - Apparel", l_url: "hand-painted-apparel" },
        { id: "12", title: "Gota Patti", l_url: "gota-patti" },
        { id: "13", title: "Kalamkari", l_url: "kalamkari" },
        { id: "14", title: "Jamdani", l_url: "jamdani" },
        { id: "15", title: "Karzobi", l_url: "karzobi" },
        { id: "16", title: "Crochet", l_url:"crochet" },
        { id: "17", title: "Noor - Chikankari", l_url: "noor-chikankari" },
        { id: "18", title: "Aari Work", l_url: "aari-work" },
        { id: "19", title: "One of a Kind - Samples", l_url: "one-of-a-kind-samples" },
        { id: "20", title: "Best seller", l_url: "best-seller" },
    ]
    const Kurtas = [
        { id: "1", title: "Hand Painted Kurta", l_url: "hand-painted-kurta" },
        { id: "2", title: "Straight Kurta", l_url: "straight-kurta" },
        { id: "3", title: "Hand Printed Kurtas & Sets", l_url: "hand-printed-kurtas-sets" },
        { id: "4", title: "Sleeveless Kurtas & Sets", l_url: "sleeveless-kurtas-sets" },
    ]
    const Saree = [
        { id: "1", title: "Ajrakh", l_url: "ajrakh" },
        { id: "2", title: "Hand Painted", l_url: "hand-painted" },
        { id: "3", title: "Handblock Printed", l_url: "handblock-printed" },
        { id: "4", title: "Handwoven", l_url: "handwoven" },
        { id: "5", title: "Chikankari", l_url: "chikankari" },

    ]

    const Accessary_Fashion_Jewellery = [
        { id: "1", title: "Earrings", l_url: "earrings" },
        { id: "2", title: "Neckpieces", l_url: "neckpieces" },
        { id: "3", title: "Bracelets, Anklets & Rings", l_url: "bracelets-anklets-rings" },
        { id: "4", title: "All Jewellery", l_url: "all-jewellery" },
    ]
    const Accessary_Bags = [

        { id: "1", title: "Total Bags", l_url: "total-bags" },
        { id: "2", title: "Beach Bags", l_url: "beach-bags" },
        { id: "3", title: "Laptop Bags", l_url: "laptop-bags" },
        { id: "4", title: "Pouches", l_url: "pouches" },
        { id: "5", title: "Handbags", l_url: "handbags" },
        { id: "6", title: "Clutches and Potlis", l_url: "clutches-and-potlis" },
        { id: "7", title: "Bucket Bags", l_url: "bucket-bags" },
    ]
    const Accessary_Silver_Jewellery = [
        { id: "1", title: "Earrings", l_url: "earrings" },
        { id: "2", title: "Silver Neckpieces", l_url: "silver-neckpieces" },
        { id: "3", title: "Silver Bracelets, Anklets & Rings", l_url: "silver-bracelets-anklets-rings" },
    ]
    const Accessary_Collections = [
        { id: "1", title: "Hand Embroidery" , l_url: "hand-embroidery" },
        { id: "2", title: "Chrochet", l_url: "crochet" ,},
        { id: "3", title: "Dokra", l_url: "dokra" },
        { id: "4", title: "Black Pottery", l_url: "black-pottery" },
        { id: "5", title: "Upcycling and Recycling", l_url: "upcycling-and-recycling" },
    ]
    const Accessary_Other_accessories = [
        { id: "1", title: "Key chains", l_url: "key-chains" },
        { id: "2", title: "Aprons", l_url: "aprons" },
        { id: "3", title: "Dupattas", l_url: "dupattas" },
        { id: "4", title: "Hair Accessories" , l_url: "hair-accessories" },
        { id: "5", title: "Hats"    , l_url: "hats" },
        { id: "6", title: "Footwear", l_url: "footwear" },
        { id: "7", title: "Masks", l_url: "masks" },
        { id: "8", title: "Stoles", l_url: "stoles" },
        { id: "9", title: "Winter Accessories", l_url: "winter-accessories" },
    ]
    // Home 
    const Home_decors = [
        { id: "1", title: "Lightings", l_url: "lightings" },
        { id: "2", title: "Planters & vases", l_url: "planters-vases" },
        { id: "3", title: "Seating", l_url: "seating" },
        { id: "4", title: "Storage", l_url: "storage" },
        { id: "5", title: "Table Tops", l_url: "table-tops" },
    ]
    const Home_collections = [
        { id: "1", title: "Hand Embroidery", l_url: "hand-embroidery" },
        { id: "2", title: "Basketry", l_url: "basketry" },
        { id: "3", title: "Handblock Print", l_url: "handblock-print" },
        { id: "4", title: "Macrame Home", l_url: "macrame-home" },
        { id: "5", title: "Crochet Home", l_url: "crochet-home" },
        { id: "6", title: "Hand Painting - Home", l_url: "hand-painting-home" },
        { id: "7", title: "Blue Pottery - Home", l_url: "blue-pottery-home" },
        { id: "8", title: "Metal Craft - Home", l_url: "metal-craft-home" },
    ]
    const Home_decor = [
        { id: "1", title: "Hoops" , l_url: "hoops" },
        { id: "2", title: "Wall Hanging"   ,l_url: "wall-hanging" },
        { id: "3", title: "Wall Plates"  , l_url: "wall-plates" },
    ]
    const Home_Furnishing = [
        { id: "1", title: "Basket" , l_url: "basket" },
        { id: "2", title: "Bed Covers" , l_url: "bed-covers" },
        { id: "3", title: "Curtains" , l_url: "curtains" },
        { id: "4", title: "Cushion Covers" , l_url: "cushion-covers" },
        { id: "5", title: "Rugs & Mats" , l_url: "rugs-mats" },
        { id: "6", title: "Throws And Quilts" , l_url: "throws-quilts" },
        { id: "7", title: "Utility Bags & Puches", l_url: "utility-bags-pouches" },
    ]

    const Kitchen_Dinning = [
        { id: "1", title: "Apron", l_url: "apron" },
        { id: "2", title: "Drinkware", l_url: "drinkware" },
        { id: "3", title: "Kitchenware", l_url: "kitchenware" },
        { id: "4", title: "Serveware", l_url: "serveware" },
        { id: "5", title: "Table Linen", l_url: "table-linen" },
        { id: "6", title: "Trays and Platters", l_url: "trays-platters" },
        { id: "7", title: "Bath" , l_url: "bath" },
    ]

    // Gifting

    const Gifting_Artisanal = [
        { id: "1", title: "Ajrakh" , l_url: "ajrakh" },
        { id: "2", title: "Hand Painted", l_url: "hand-painted" },
        { id: "3", title: "Handblock Printed", l_url: "handblock-printed" },
        { id: "4", title: "Handwoven", l_url: "handwoven" },
        { id: "5", title: "Chikankari", l_url: "chikankari" },
    ]
    const Gifting_Embroidery = [
        { id: "1", title: "Okhai", l_url: "okhai" },
        { id: "2", title: "Shrujan", l_url: "shrujan" },
        { id: "3", title: "Porgai", l_url: "porgai" },
        { id: "4", title: "Urmul", l_url: "urmul" },
        { id: "5", title: "Bebaak", l_url: "bebaak" },
        { id: "6", title: "Onset Homes", l_url: "onset-homes" },
        { id: "7", title: "Dhaga HandCraft", l_url: "dhaga-handcraft" },
        { id: "8", title: "Sadhna", l_url: "sadhna" },
        { id: "9", title: "Whitewater Kids" , l_url: "whitewater-kids" },
        { id: "10", title: "Rangsutra", l_url: "rangsutra" },
        { id: "11", title: "Leera", l_url: "leera" },
        { id: "12", title: "Chambray", l_url: "chambray" },
        { id: "13", title: "Soleilclo", l_url: "soleilclo" },
        { id: "14", title: "Samuday Craft", l_url: "samuday-craft" },

    ]
    const Gifting_Metal_Craft = [
        { id: "1", title: "Studio Coppre", l_url: "studio-coppre" },
        { id: "2", title: "Anantaya Decor", l_url: "anantaya-decor" },
    ]
    const Gifting_ChikanKari = [
        { id: "1", title: "Phae", l_url: "phae" },
        { id: "2", title: "Shwet", l_url: "shwet" },
    ]
    const Gifting_Basketry = [
        { id: "1", title: "Skadam Haat", l_url: "skadam-haat" },
        { id: "2", title: "Kraftribe", l_url: "kraftribe" },
        { id: "3", title: "Pine Cone", l_url: "pine-cone" },
    ]
    const Gifting_Eco_printing = [
        { id: "1", title: "Mulya", l_url: "mulya" },
        { id: "2", title: "Bageeya", l_url: "bageeya" }
    ]
    const Gifting_Handblock_Printing = [
        { id: "1", title: "Sooti Syahi", l_url: "sooti-syahi" },
        { id: "2", title: "Creative Bee", l_url: "creative-bee" },
        { id: "3", title: "Kirgiti", l_url: "kirgiti" },
        { id: "4", title: "Shuddhi", l_url: "shuddhi" },
        { id: "5", title: "Dharan", l_url: "dharan" },
        { id: "6", title: "Poddar Export", l_url: "poddar-export" },
        { id: "7", title: "Ektara", l_url: "ektara" },
        { id: "8", title: "Inkriti", l_url: "inkriti" },
    ]
    const Gifting_Ajrakh = [
        { id: "1", title: "Tenrao by Riyaz Khatri", l_url: "tenrao-by-riyaz-khatri" },
        { id: "2", title: "Jahagir Khatri", l_url: "jahagir-khatri" },
        { id: "3", title: "Jabbar khatri", l_url: "jabbar-khatri" },
        { id: "4", title: "Okhai", l_url: "okhai" },
    ]
    const Gifting_Upcycling_Recycling = [
        { id: "1", title: "Lukka Chuppi", l_url: "lukka-chuppi" },
        { id: "2", title: "Whe by Abira", l_url: "whe-by-abira" },
        { id: "3", title: "Patch over Patch", l_url: "patch-over-patch" },
        { id: "4", title: "The Good Doll", l_url: "the-good-doll" },
        { id: "5", title: "Swatanya", l_url: "swatanya" },
        { id: "6", title: "Nimmit Creations", l_url: "nimmit-creations" },

    ]
    const Gifting_Terracotta = [
        { id: "1", title: "Terracotta by sachi", l_url: "terracotta-by-sachi" },
        { id: "2", title: "Antarang", l_url: "antarang" },
    ]
    const Gifting_games = [
        { id: "1", title: "Forggmag", l_url: "forggmag" },
        { id: "2", title: "Potli", l_url: "potli" }
    ]
    const Gifting_Hand_Weaving = [
        { id: "1", title: "Sirohi", l_url: "sirohi" },
        { id: "2", title: "Handweave India", l_url: "handweave-india" },
        { id: "3", title: "Craftoons", l_url: "craftoons" },
        { id: "4", title: "Avani Kumaon", l_url: "avani-kumaon" },
        { id: "5", title: "Punarjeevana", l_url: "punarjeevana" },
        { id: "6", title: "India Craft House", l_url: "india-craft-house" },
        { id: "7", title: "Moralfibre", l_url: "moralfibre" },
        { id: "8", title: "VWas", l_url: "vwas" },
        { id: "9", title: "Sikki Grass", l_url: "sikki-grass" },
        { id: "10", title: "Dharini", l_url: "dharini" },
        { id: "11", title: "Senses Play", l_url: "senses-play" },
        { id: "12", title: "Looms of Ladakh", l_url: "looms-of-ladakh" },
        { id: "13", title: "Bunkar Bihar", l_url: "bunkar-bihar" },
        { id: "14", title: "Gramya", l_url: "gramya" },
        { id: "15", title: "Myraa", l_url: "myraa" },
        { id: "16", title: "Fifth Origins", l_url:"fifth-origins" },
    ]
    const Gifting_Blue_Pottery = [
        { id: "1", title: "Gopal Saini", l_url: "gopal-saini" },
    ]
    const Gifting_Ceramics = [
        { id: "1", title: "Ikai Asai", l_url: "ikai-asai" },
    ]
    const Gifting_Tie_Die = [
        { id: "1", title: "Murva Colective", l_url: "murva-colective" },
    ]
    const Gifting_Candles_and_Perfumes = [
        { id: "1", title: "Boond Fragrances", l_url: "boond-fragrances" },
    ]

    // SEE  all 
    const see_all = [
        { id: "1", title: "Sale - Kurtas", l_url: "sale-kurtas" },
        { id: "2", title: "Sale - Kurta Pant Sets", l_url: "sale-kurta-pant-sets" },
        { id: "3", title: "Sale - Dresses", l_url: "sale-dresses" },
        { id: "4", title: "Sale - Cushion Covers", l_url: "sale-cushion-covers" },
        { id: "5", title: "Sale - Bomber Jacket", l_url: "sale-bomber-jacket" },
        { id: "6", title: "Sale - Tops", l_url: "sale-tops" },
        { id: "7", title: "Sale - Basketry", l_url: "sale-basketry" },
        { id: "8", title: "Sale All Apparles", l_url: "sale-all-apparles" },
        { id: "9", title: "Rescue", l_url: "rescue" },
        { id: "10", title: "Sample Sale", l_url: "sample-sale" },
    ];


    //Cart View Pop Up logic
    // 1. Accept the prop

    // ... existing logic

    <div className="flex items-center gap-4">
        {/* ... other icons like User, Search ... */}

        {/* UPDATE THE CART ICON SECTION */}
        {/* If it was a Link, change it to a button or div */}
        <div
            className="cursor-pointer relative"
            onClick={onCartClick} // <--- Trigger the popup
        >
            <img src={Cart} alt="Cart" className="w-5 min-w-5" />
            <p className="w-4 absolute bottom-[-4px] right-[-4px] ...">0</p>
        </div>

        {/* ... */}
    </div>



    return (
        <>

            <div
                className="w-full bg-white fixed top-0 left-0 z-50 shadow-md  mt-8"
                ref={dropdownRef}
            >
                <div className="w-full flex justify-between items-center px-4 md:px-10 ">
                    <div className="flex items-center">
                        <Link to="/">
                            <img
                                src={Logo}
                                alt="Okhai Logo"
                                className="px-8 h-16 py-2 cursor-pointer ml-20"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center px-10 py-6 mr-8">
                        <img
                            src={Search}
                            alt="Search"
                            className="px-1 h-9 cursor-pointer py-2"
                        />
                        <Link to="create-account">
                            <img
                                src={User}
                                alt="User"
                                className="px-1 h-9 cursor-pointer  py-2"
                            />
                        </Link>
                        <img
                            src={Heart}
                            alt="Wishlist"
                            className="px-1 h-9  cursor-pointer py-2"
                        />
                        <div className="cursor-pointer relative" onClick={onCartClick}>
                            <img
                                src={Cart}
                                alt="Cart"
                                className="px-1 h-9 cursor-pointer py-2"
                            />
                            {getTotalItems() > 0 && (
                                <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                    {getTotalItems()}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="md:hidden flex items-center pr-4">
                        <span className="text-2xl font-bold">☰</span>
                    </div>
                </div>

                <div className="hidden md:flex w-345 max-w-8xl mx-auto gap-14 py-3 justify-between text-[13.5px] tracking-widest (0.1em) font-thin font-serif uppercase px-22 pt-0">
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
                                                to={`collections/${menu.l_url}`}
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
                                                to={`collections/${menu.l_url}`}
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
                                                to={`collections/${menu.l_url}`}
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
                                                to={`collections/${menu.l_url}`}
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
                                                    to={`collections/${item.l_url}`}
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
                                                    to={`/collections/${item.l_url}`}
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
                                <Link to="/collections/ajrakh">
                                    <img src={SareeMenuImg2} alt="Artisanal Tops" className="w-full h-auto object-cover cursor-pointer rounded" />
                                    <p className="text-center text-sm mt-2 cursor-pointer font-serif">Ajrakh Saarees</p>
                                </Link>
                            </div>


                            {/* ---------- Img 3 ---------- */}
                            <div className="flex flex-col" onClick={() => setActive(false)} >
                                <Link to="/collections/madubani">
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
                                                to={`/collections/${item.l_url}`}
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
                                                    to={`/collections/${item.l_url}`}
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
                                                    to={`/collections/${item.l_url}`}
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
                                                    to={`/collections/${item.l_url}`}
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
                                                    to={`/collections/${item.l_url}`}
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
                                                to={`/collections/${item.l_url}`}
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
                                                    to={`/collections/${item.l_url}`}
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
                                                to={`/collections/${item.l_url}`}
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
                                                    to={`/collections/${item.l_url}`}
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
                                                    to={`/collections/${item.l_url}`}
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
                                                    to={`/collections/${item.l_url}`}
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
                                                    to={`/collections/${item.l_url}`}
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
                                                    to={`/collections/${item.l_url}`}
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
                                                to={`/collections/${item.l_url}`}
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
                                                to={`/collections/${item.l_url}`}
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
                                                to={`/collections/${item.l_url}`}
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
                                                to={`/collections/${item.l_url}`}
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
                                                to={`/collections/${item.l_url}`}
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
                                                to={`/collections/${item.l_url}`}
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
                                                to={`/collections/${item.l_url}`}
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
                                                to={`/collections/${item.l_url}`}
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
                                                to={`/collections/${item.l_url}`}
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
                                                to={`/collections/${item.l_url}`}
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
                                                to={`/collections/${item.l_url}`}
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
                                                to={`/collections/${item.l_url}`}
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
                                                    to={`/collections/${item.l_url}`}
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