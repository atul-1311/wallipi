import { useState } from "react";

const PageNavigation = ({pageNum}) => {
    const [page, setPage] = useState(1);

    function descPage(){
        setPage(page-1);
    }

    function ascPage(){
        setPage(page+1);
    }
    pageNum(page);
    
    return (
        <>
            <div className="py-4 bg-transparent container mx-auto flex items-center justify-center h-44">
                <div className="flex items-center justify-center h-44">
                    <ul className="flex items-center justify-center">
                        {
                            page>1 && 
                            <li onClick={() => descPage()} className="mr-2 text-zinc-400 py-2 px-4 border-neutral-400 border-2 rounded-lg hover:bg-stone-900 hover:rounded-lg cursor-pointer"><i className="fas fa-chevron-left text-zinc-400 mr-2"></i>
                            Prev</li>
                        }

                        <li className="text-zinc-100 px-3 py-1 rounded-lg">{page}</li>
                
                        {
                            page<3 &&
                            <li onClick={() => ascPage()} className=" ml-2 text-zinc-400 py-2 px-4 border-neutral-400 border-2 rounded-lg hover:bg-stone-900 hover:rounded-lg cursor-pointer">
                            Next<i className="fas fa-chevron-right text-zinc-400 ml-2"></i></li>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PageNavigation;
