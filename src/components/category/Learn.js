
const Learn = () => {
    return (
        <>
            <div className='rec-head w-full flex items-center justify-center mb-4'>
                <div className='w-11/12'>
                    <h1 className='text-zinc-400 tracking-wider font-semibold'>Animals Collection</h1>
                </div>
            </div>
            <div className='rec container mx-auto flex items-center justify-center'>
                <div className='rec-s w-11/12 flex'>
                    <div className='rec-1 flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/an-2.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/an-4.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/an-1.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/an-3.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/an-5.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>We Woof You</h1>
                            <i class="rec-heading fas fa-paw text-zinc-500"></i>
                        </div>
                    </div>
                    <div className='rec-1 flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/an-6.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/an-7.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/an-8.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/an-10.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/an-9.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>We Squeak You</h1>
                            <i class="rec-heading fas fa-otter text-zinc-500"></i>
                        </div>
                    </div>
                    <div className='rec-1 flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/an-15.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/an-12.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/an-14.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/an-11.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/an-13.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>We Neigh You</h1>
                            <i class="rec-heading fas fa-horse text-zinc-500"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Learn;
