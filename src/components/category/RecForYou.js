import "../../css/Category.css"
import { useHistory } from 'react-router-dom';

const RecForYou = () => {

    const history = useHistory();

    function camera(){
        history.push(`/search/camera`);
    }
    function nature(){
        history.push(`/search/nature`);
    }
    function artculture(){
        history.push(`/search/art+culture`);
    }

    return (
        <>
            <div className='rec-head w-full flex items-center justify-center mb-4'>
                <div className='w-11/12'>
                    <h1 className='text-zinc-400 tracking-wider font-semibold'>Reccomended For You</h1>
                </div>
            </div>
            <div className='rec container mx-auto flex items-center justify-center'>
                <div className='rec-s w-11/12 flex'>
                    <div onClick={()=> camera()} className='rec-1 flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/cat-3.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/cat-4.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/cat-2.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/cat-1.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/cat-5.jpeg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>Behind The Camera</h1>
                            <i className="rec-heading fas fa-camera text-zinc-500"></i>
                        </div>
                    </div>
                    <div onClick={()=> nature()} className='rec-1 flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/cat-10.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/cat-7.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/cat-6.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/cat-8.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/cat-9.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>Nature Photography</h1>
                            <i className="rec-heading fab fa-canadian-maple-leaf text-zinc-500"></i>
                        </div>
                    </div>
                    <div onClick={()=> artculture()} className='rec-1 flex flex-col p-2'>
                        <div className='w-full border border-zinc-400'>
                            <img src='/images/cat-14.jpg' className='' alt="img" />
                        </div>
                        <div className='w-full h-20 grid grid-cols-4 gap-1 mt-1'>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/cat-11.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/cat-13.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/cat-12.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                            <div className='relative border border-zinc-400'>
                                <img src='/images/cat-15.jpg' className='absolute top-0 left-0 object-cover h-full' alt="img" />
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-16'>
                            <h1 className='rec-heading text-zinc-500 font-semibold'>Art and Culture</h1>
                            <i className="rec-heading fas fa-palette text-zinc-500"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecForYou;
