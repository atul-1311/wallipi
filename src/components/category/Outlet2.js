import { useHistory } from 'react-router-dom';

const Outlet2 = () => {

    const history = useHistory();

    function city(){
        history.push(`/search/city`);
    }
    function music(){
        history.push(`/search/music`);
    }
    function halloween(){
        history.push(`/search/halloween`);
    }
    function autumn(){
        history.push(`/search/autumn`);
    }


    return (
        <>
            <div className='rec container mx-auto flex items-center justify-center'>
                <div className='rec-s w-11/12 flex'>
                    <div onClick={()=> city()} className='rec-1-outlet flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/city-1.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/city-4.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/city-3.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/city-2.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/city-5.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>City</h1>
                            <i className="rec-heading fas fa-city text-zinc-500"></i>
                        </div>
                    </div>
                    <div onClick={()=> music()} className='rec-1-outlet flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/mu-2.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/mu-4.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/mu-3.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/mu-1.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/mu-5.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>Music</h1>
                            <i className="rec-heading fas fa-music text-zinc-500"></i>
                        </div>
                    </div>
                    <div onClick={()=> halloween()} className='rec-1-outlet flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/hal-2.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/hal-4.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/hal-3.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/hal-1.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/hal-5.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>Halloween</h1>
                            <i className="rec-heading fas fa-ghost text-zinc-500"></i>
                        </div>
                    </div>
                    <div  onClick={()=> autumn()} className='rec-1-outlet flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/aut-3.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/aut-6.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/aut-4.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/aut-1.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/aut-5.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>Autumn</h1>
                            <i className="rec-heading fas fa-cloud-sun text-zinc-500"></i>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Outlet2;
