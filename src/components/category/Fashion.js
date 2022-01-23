
const Fashion = () => {
    return (
        <>
            <div className='rec-head w-full flex items-center justify-center mb-4'>
                <div className='w-11/12'>
                    <h1 className='text-zinc-400 tracking-wider font-semibold'>Fashion and Styles</h1>
                </div>
            </div>
            <div className='rec container mx-auto flex items-center justify-center'>
                <div className='rec-s w-11/12 flex'>
                    <div className='rec-1 flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/fs-2.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/fs-4.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/fs-1.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/fs-3.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/fs-5.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>Women Fashion</h1>
                            <i className="rec-heading fas fa-vest text-zinc-500"></i>
                        </div>
                    </div>
                    <div className='rec-1 flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/fs-6.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/fs-7.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/fs-8.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/fs-9.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/fs-10.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>LifeStyle</h1>
                            <i className="rec-heading fas fa-mortar-pestle text-zinc-500"></i>
                        </div>
                    </div>
                    <div className='rec-1 flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/fs-13.jpeg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/fs-12.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/fs-14.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/fs-16.jpeg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/fs-15.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>Women HairStyle</h1>
                            <i className="rec-heading fas fa-hand-scissors text-zinc-500"></i>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Fashion;
