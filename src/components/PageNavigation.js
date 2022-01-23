
const pageNavigation = ({pageNum}) => {
    let pages = 1;
    function updatePage(page){
        pages = page;
        pageNum(pages);
    }
    return (
        <>
            <div className="py-4 bg-transparent container mx-auto flex items-center justify-center h-44">
                <div className="flex items-center justify-center h-44">
                    <ul className="flex items-center justify-center">
                        <li onClick={() => updatePage(1)} className="mr-2 text-zinc-100 px-3 py-1 bg-stone-900 rounded-lg">1</li>
                        <li onClick={() => updatePage(2)} className="mr-2 text-zinc-400 px-3 py-1 hover:bg-stone-900 hover:rounded-lg cursor-pointer">2</li>
                        <li onClick={() => updatePage(3)} className="mr-2 text-zinc-400 px-3 py-1 hover:bg-stone-900 hover:rounded-lg cursor-pointer">3</li>
                        <li onClick={() => updatePage(4)} className="mr-2 text-zinc-400 px-3 py-1 hover:bg-stone-900 hover:rounded-lg cursor-pointer">4</li>
                        <li onClick={() => updatePage(5)} className="mr-2 text-zinc-400 px-3 py-1 hover:bg-stone-900 hover:rounded-lg cursor-pointer">5</li>
                        <li onClick={() => updatePage(6)} className="mr-2 text-zinc-400 px-3 py-1 hover:bg-stone-900 hover:rounded-lg cursor-pointer">6</li>
                        <li onClick={() => updatePage(7)} className="mr-2 text-zinc-400 px-3 py-1 hover:bg-stone-900 hover:rounded-lg cursor-pointer">7</li>
                        <li onClick={() => updatePage(8)} className="mr-2 text-zinc-400 px-3 py-1 hover:bg-stone-900 hover:rounded-lg cursor-pointer">8</li>
                        <li onClick={() => updatePage(9)} className="mr-2 text-zinc-400 px-3 py-1 hover:bg-stone-900 hover:rounded-lg cursor-pointer">9</li>
                        <li onClick={() => updatePage(10)} className="mr-2 text-zinc-400 px-3 py-1 hover:bg-stone-900 hover:rounded-lg cursor-pointer">10</li>
                        <li className=" ml-2 text-zinc-400 py-2 px-4 border-neutral-400 border-2 rounded-lg hover:bg-stone-900 hover:rounded-lg cursor-pointer">
                            Next<i className="fas fa-chevron-right text-zinc-400 ml-2"></i></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default pageNavigation;
