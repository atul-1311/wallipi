import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet'
import Wallipi from "../components/Wallipi";
import API_KEY from "../apiKeys";
import "../css/wallipi.css"
import PageNav from "../components/PageNavigation"
import Shimmer from "../components/ImageShimmer"


const Wallipis = () => { 

    const [wallipis, setWallipis] = useState([]);
    const [words, setWords] = useState([]);
    const [orientation, setOrientation] = useState("all");
    const [order, setOrder] = useState("popular")
    const [page, setPage] = useState(1);
    const [Load, setLoad] = useState(false);
    
    const numOfWords = 15;
    const numOfImages = 20;

    var query = "";
    let params = useParams();

    if(params.query === ""){
        query = "nature";
    }else{
        query=params.query;
    }

    const history = useHistory();

    function keyword(value){
        history.push(`${value}`)
    }

    const pageNum = (page) =>{
        setPage(page);
        console.log(page);
    }

    let url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&per_page=200&editors_choice=true&orientation=${orientation}&order=${order}&page=${page}`
    console.log(url);

    useEffect(() =>{
            window.scrollTo(0,0)
            setLoad(true)
            fetch(url)
            .then(response => response.json())
            .then(wallipis => {
                const hits = wallipis.hits;
                let words = [];
                let wordsArray="";
                hits.forEach(element => {
                    words.push(element.tags);
                });
                for(let i=0;i<words.length;i++){
                    wordsArray = wordsArray + ", " + words[i];
                }
                let dics = wordsArray.split(', ');
                dics.shift();
                let uniqueDics = [...new Set(dics)];
                setWallipis(wallipis.hits);
                setWords(uniqueDics);
                setLoad(false);
            })
    }, [query, orientation, order, page]);
    
    return (
        <>
            <Helmet>
                <title>Wallipi - Wallipis</title>
            </Helmet>
            <div className="wallipi-space h-32"></div>
            <div className="keywords ">
                <div className="key-layout py-8 border-b border-neutral-600">
                    <i className="fas fa-object-group text-neutral-500 font-bold"></i>
                    {
                        Load && [...Array(numOfWords)].map((e,i)=> 
                            <button key={i} className="wordShimmer py-4 px-12 border border-neutral-500 rounded-md ml-3"></button>
                            )    
                    }
                    {
                        !Load && words.map((value,index) => {
                            return <button key={index} onClick={()=> keyword(value)} className="word py-1 px-4 border border-neutral-500 rounded-md text-neutral-500 ml-3 bg-neutral-800
                            drop-shadow-lg hover:bg-neutral-700">{value}</button>
                        })
                    }
                </div>
            </div>
            <div className="filters py-8">
                <div className="filter-hero">
                    <div className="orientation">
                        <i id="ori-word-i" className="fas fa-sync-alt text-neutral-500 font-bold"></i>
                        <button onClick={()=> setOrientation("horizontal")} className="ori-word py-1 px-4 border border-neutral-500 rounded-md text-neutral-500 bg-neutral-800 ml-3 hover:bg-neutral-700">Horizontal</button>
                        <button onClick={()=> setOrientation("vertical")} className="ori-word py-1 px-4 border border-neutral-500 rounded-md text-neutral-500 bg-neutral-800 ml-3 hover:bg-neutral-700">Vertical</button>
                    </div>
                    <div className="order">
                        <i className="fab fa-first-order-alt text-neutral-500 font-bold"></i>
                        <button onClick={()=> setOrder("popular")} className="ord-word py-1 px-4 border border-neutral-500 rounded-md text-neutral-500 bg-neutral-800 ml-3 hover:bg-neutral-700">Popular</button>
                        <button onClick={()=> setOrder("latest")} className="ord-word py-1 px-4 border border-neutral-500 rounded-md text-neutral-500 bg-neutral-800 ml-3 hover:bg-neutral-700">Latest</button>
                    </div>
                </div>
            </div>
            <section className='queryCollection flex items-center justify-center'>
                <div className="wallipi-layout py-8">
                    {
                        Load && [...Array(numOfImages)].map((e,i) => <Shimmer key={i} />)
                    }
                    {
                        !Load && wallipis.map(wallipi => <Wallipi key={wallipi.id} wallipi={wallipi} />)
                    }
                </div> 
            </section>
            {/* <PageNav pageNum={pageNum} /> */}
        </>
    )
}

export default Wallipis;
