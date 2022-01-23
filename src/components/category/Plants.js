
const Plants = () => {
    return (
        <>
            <div className='rec-head w-full flex items-center justify-center mb-4'>
                <div className='w-11/12'>
                    <h1 className='text-zinc-400 tracking-wider font-semibold'>Plants Collection</h1>
                </div>
            </div>
            <div className='rec container mx-auto flex items-center justify-center'>
                <div className='rec-s w-11/12 flex'>
                    <div className='rec-1 w-1/3 flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/pl-3.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/pl-4.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/pl-1.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/pl-2.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/pl-5.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>Botany</h1>
                            <i className="rec-heading fab fa-pagelines text-zinc-500"></i>
                        </div>
                    </div>
                    <div className='rec-1 w-1/3 flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/pl-8.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/pl-7.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/pl-6.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/pl-9.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/pl-10.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>House Plants</h1>
                            <i className="rec-heading fas fa-spa text-zinc-500"></i>
                        </div>
                    </div>
                    <div className='rec-1 w-1/3 flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/pl-13.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/pl-12.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/pl-14.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/pl-11.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/pl-15.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>Nursery Plants</h1>
                            <i className="rec-heading fas fa-seedling text-zinc-500"></i>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Plants;
