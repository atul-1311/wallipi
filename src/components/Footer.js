import '../css/Footer.css'

const Footer = () => {
  return (
      <>
        <div className='footer-hero mt-4'>
            <div className='footer-logo'>
                <img style={{height:80}} src='/images/logo.png' alt='logo' />
            </div>
            <div className='footer-content'>
                <h2 className='text-neutral-500'>
                    Wallipi is a photography community developed to provide platform for the professional photographers to share skills.
                    It has been created in REACT and API has been used in it.<br></br><br></br>
                    Special Thanks to : &nbsp;
                    <b><a className='text-sm' href='https://pixabay.com/'>pixabay</a></b>
                    <br></br><br></br>
                    &copy; <b className='text-sm'>Developer Depository, 2022</b>
                </h2>
            </div>
            <div className='footer-links'>
                <div className='footer-links-panel'>
                    <a target="_blank" href="mailto: wallipi.devdepo@gmail.com"><button className='footer-mail flex items-center justify-center'><i class="fas fa-envelope text-black"></i></button></a>
                    <a target="_blank" href="https://github.com/atul-1311"><button className='footer-git flex items-center justify-center ml-5'><i class="fab fa-github text-black"></i></button></a>
                    <a target="_blank" href="https://www.instagram.com/developerdepository/"><button className='footer-insta flex items-center justify-center ml-5'><i class="fab fa-instagram-square text-black"></i></button></a>
                    <a target="_blank" href="https://play.google.com/store/apps/developer?id=Developer+Depository&hl=en_US"><button className='footer-gplay flex items-center justify-center ml-5'><i class="fab fa-google-play text-black"></i></button></a>
                    <a target="_blank" href="https://discord.gg/7KByyzAB"><button className='footer-discord flex items-center justify-center ml-5'><i class="fab fa-discord text-black"></i></button></a>
                </div>
            </div>
        </div>
      </>
  )
};

export default Footer;

