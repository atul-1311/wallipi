import "../css/SingleImg.css"

const SingleImg = () => {
    return (
        <>
            <div className="space h-44"></div>  
            <div className="hero container flex items-center justify-center">
                <div className="hero-s w-11/12 flex items-center justify-center">
                    <div className="hero-l w-2/3 flex items-center justify-center bg-neutral-700">
                        <div className="img-cont">
                            <img src="/images/img-3.jpg" className="" />
                        </div>
                    </div>
                    <div className="hero-r w-1/3 "></div>
                </div>
            </div>
        </>
    )
}

export default SingleImg;
