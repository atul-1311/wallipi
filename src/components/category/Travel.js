import { useHistory } from 'react-router-dom';

const Health = () => {

    const history = useHistory();

    function travel(){
        history.push(`/search/travel`);
    }
    function india(){
        history.push(`/search/india`);
    }
    function snow(){
        history.push(`/search/snow`);
    }


    return (
        <>
            <div className='rec-head w-full flex items-center justify-center mb-4'>
                <div className='w-11/12'>
                    <h1 className='text-zinc-400 tracking-wider font-semibold'>Travel and Adventures</h1>
                </div>
            </div>
            <div className='rec container mx-auto flex items-center justify-center'>
                <div className='rec-s w-11/12 flex'>
                    <div onClick={()=> travel()} className='rec-1 flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/tr-1.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/tr-2.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/tr-3.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/tr-4.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/tr-5.png' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>Travel The World</h1>
                            <i className="rec-heading fas fa-map-marked-alt text-zinc-500"></i>
                        </div>
                    </div>
                    <div onClick={()=> india()} className='rec-1 flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/tr-10.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/tr-8.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/tr-6.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/tr-7.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/tr-9.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>Indian Collection</h1>
                            <i className="rec-heading fas fa-globe-americas text-zinc-500 "></i>
                        </div>
                    </div>
                    <div onClick={()=> snow()} className='rec-1 flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/tr-16.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/tr-12.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/tr-14.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/tr-15.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/tr-11.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>Snow Collection</h1>
                            <i className="rec-heading fas fa-snowflake text-zinc-500"></i>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Health;
