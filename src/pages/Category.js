import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../css/Category.css';
import RecForYou from "../components/category/RecForYou"
import Travel from "../components/category/Travel"
import Fashion from "../components/category/Fashion"
import Plants from "../components/category/Plants"
import Learn from "../components/category/Learn"
import Outlet1 from "../components/category/Outlet1"
import Outlet2 from "../components/category/Outlet2"
import { useRef } from 'react'

const Category = () => {
    window.scrollTo(0,0);

    const firstItemRef = useRef(null);

    return (
        <>
            <Helmet>
                <title>Wallipi - Category</title>
            </Helmet>
            <div className='main-space h-44'></div>
            <div className="nav-2 container mx-auto flex items-center justify-center">
                <div className="w-1/2 flex items-center justify-center h-20">
                    <ul className="flex items-center">
                        <Link to="/">
                            <li id="secondary-nav" className="text-zinc-500 tracking-widest font-bold ">HOME</li>
                        </Link>    
                            <li id="secondary-nav" className="sec-nav text-zinc-300 tracking-widest font-bold border-b-2 border-zinc-200">CATEGORY</li>
                            <li id="secondary-nav" className="sec-nav text-zinc-500 tracking-widest font-bold">VISIT</li>
                            <li onClick={() => firstItemRef.current.scrollIntoView()} id="secondary-nav" className="sec-nav text-zinc-500 tracking-widest font-bold">ABOUT</li>
                    </ul>
                </div>
            </div>
            <div className='space h-16'></div>
            <RecForYou />
            <div className='space h-20'></div>
            <Travel />
            <div className='space h-20'></div>
            <Fashion />
            <div className='space h-20'></div>
            <Plants />
            <div className='space h-20'></div>
            <Learn />
            <div className='space h-20'></div>
            <Outlet1 />
            <div className='space h-20'></div>
            <Outlet2 />

            <div ref={firstItemRef}></div>
            
        </>
    )
}

export default Category;
