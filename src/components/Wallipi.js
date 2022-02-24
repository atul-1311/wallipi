import '../css/wallipi.css';
import { Link } from 'react-router-dom';

const wallipis = (props) => {
    const { wallipi } = props;
    return (
        <>
            <div className="card">
                <div className='user flex items-center'>
                    <img src={wallipi.userImageURL} alt="" />
                    <a href={`https://pixabay.com/users/${wallipi.user}-${wallipi.user_id}`} >
                       <h1 className='text-zinc-400 ml-2 card-info-text '>{wallipi.user}</h1>
                    </a>
                </div>
                <img src={wallipi.webformatURL} alt='img' className='top-0 left-0 object-cover h-full' />
                   
                <a href={`${wallipi.fullHDURL}`} target="_blank" >
                    <div className='overlay'></div>
                </a>
                <div className='card-info flex w-full'>
                    <div className='likes flex w-1/3 items-center justify-center'>
                        <i className="fas fa-thumbs-up card-info-text text-zinc-400"></i>
                        {/* <span className='ml-2 card-info-text text-zinc-400'>{wallipi.likes}</span> */}
                        {
                            wallipi.likes>1000 && 
                            <span className='ml-2 text-zinc-400 card-info-text'>{Math.floor(wallipi.likes/1000)+"k"}</span>
                        }
                        {
                            wallipi.likes<1000 && 
                            <span className='ml-2 text-zinc-400 card-info-text'>{wallipi.likes}</span>
                        }
                    </div>
                    <div className='views flex w-1/3 items-center justify-center'>
                        <i className="fas fa-eye text-zinc-400 card-info-text"></i>
                        {
                            wallipi.views>1000 && 
                            <span className='ml-2 text-zinc-400 card-info-text'>{Math.floor(wallipi.views/1000)+"k"}</span>
                        }
                        {
                            wallipi.views<1000 && 
                            <span className='ml-2 text-zinc-400 card-info-text'>{wallipi.views}</span>
                        }
                    </div>
                    <div className='downloads flex w-1/3 items-center justify-center'>
                        <i className="fas fa-arrow-alt-circle-down text-zinc-400 card-info-text"></i>
                        {/* <span className='ml-2 text-xs text-zinc-400'>{wallipi.downloads}</span> */}
                        {
                            wallipi.downloads>1000 &&
                            <span className='ml-2 text-zinc-400 card-info-text'>{Math.floor(wallipi.downloads/1000)+"k"}</span>
                        }
                        {
                            wallipi.downloads<1000 &&
                            <span className='ml-2 text-zinc-400 card-info-text'>{wallipi.downloads}</span>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default wallipis;
