import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Wallipi from "../components/Wallipi";
import API_KEY from "../apiKeys";
import '../css/wallipi.css';
import PageNav from "../components/PageNavigation";


const Home = () => {
    window.scrollTo(0,0);

    const [wallipis, setWallipis] = useState([]);

    useEffect(() =>{
        // console.log("component mounted.......");
        fetch(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&editors_choice=true`)
        .then(response => response.json())
        .then(wallipis => {
            setWallipis(wallipis.hits);
        }) 
    }, []);

    return(
        <>
            <div className="home-space h-24"></div>
            <div className="container-1 container mx-auto flex items-center py-8 justify-center">
                <div className="container-1-1 w-1/2 flex flex-col justify-center items-center h-96 ">
                    <div className="container-1-1-1 w-2/3">
                        <h2 className="text-zinc-400 font-extrabold text-4xl tracking-wide">Picture it what you think !</h2>
                        <div className="border-l-4 border-zinc-400 rounded-lg pl-6 mt-12">
                            <p className="text-zinc-500 tracking-wider">Lorem ipsum dolor sit amet, consectetur adipis <br></br>
                               sed do eiusmod tempor incididunt ut labore <br></br>
                               magna aliqua. Nunc sed augue lacus viverra  <br></br>
                               eu consequat.</p>
                        </div>
                    </div>
                </div>
                <div className="container-1-2 w-1/2 mt-24">
                    <img id="hero-img" className="" src="/images/hero1.svg" alt="hero" />
                </div>
            </div>
            <div className="container-2 container mx-auto flex items-center justify-between">
                <div className="container-2-1 w-1/2 flex items-center justify-center">
                    <img id="hero-img" src="/images/hero20.svg" alt="hero" />
                    {/* className="animate__animated animate__flash animate__infinite animate__slow" */}
                </div>
                <div className="container-2-2 w-1/2 justify-end">
                    <div className="container-2-2-1 w-2/3 ml-16 mt-24">
                        <h2 className="text-zinc-400 font-extrabold text-4xl tracking-wide">Search.. Visit.. Download !</h2>
                        <div className="border-r-4 border-zinc-400 rounded-lg mt-12">
                            <p className="text-zinc-500 tracking-wider">Lorem ipsum dolor sit amet, consectetur adipis <br></br>
                               sed do eiusmod tempor incididunt ut labore <br></br>
                               magna aliqua. Nunc sed augue lacus viverra  <br></br>
                               eu consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mid-space border-b-2 border-zinc-500 h-44"></div>
            <div className="nav-2 container mx-auto flex items-center justify-center">
                <div className="w-1/2 flex items-center justify-center h-20">
                    <ul className="flex items-center">
                        <li id="secondary-nav" className="text-zinc-300 tracking-widest font-bold text-2xl border-b-2 border-zinc-200">HOME</li>
                        <Link to="/category">
                            <li id="secondary-nav" className="sec-nav text-zinc-500 tracking-widest font-bold text-2xl ml-10">CATEGORY</li>
                        </Link>
                        <li id="secondary-nav" className="sec-nav text-zinc-500 tracking-widest font-bold text-2xl ml-10">VISIT</li>
                        <li id="secondary-nav" className="sec-nav text-zinc-500 tracking-widest font-bold text-2xl ml-10">ABOUT</li>
                    </ul>
                </div>
            </div>
            <section className='collections flex items-center justify-center'>
                <div className="wallipi-layout py-16">
                {
                wallipis.map(wallipi => <Wallipi key={wallipi.id} wallipi={wallipi} />)
                }
                </div> 
            </section>
            {/* <PageNav /> */}
        </>
    )
}

export default Home;