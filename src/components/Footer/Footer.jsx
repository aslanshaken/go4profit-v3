import './Footer.css';
import Logo from '../../assets/logo.png';
import Twitter from '../../assets/twitter.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';


export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-container-first'>
        <img alt="logo" src={Logo} className="fotter-logo-img" />
        <p>Financial solutions and online accounting excellence </p>
      </div>
      <div className='footer-container-second'>
        <div className='footer-row'>
          <p className='g-txt'>Our Company</p>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/book-a-call">Contact</a>
          <a href="/">About us</a>
        </div>
        <div className='footer-row'>
          <p className='g-txt'>Our Services</p>
          <a href="/services">Bookkeeping </a>
          <a href="/services">CFO</a>
          <a href="/services">Tax strategy advices</a>   
        </div>
        <div className='footer-row'>
          <p className='g-txt'>Our Office</p>
          <a href="/join-us">1 Liberty St #226</a>
          <a href="/join-us">New York, NY 10006</a>
          <a href="tel:917-200-7609">+1-917-200-7609</a>
        </div>
      </div>
      <div className='footer-container-third'>
        <div className='fotter-container-icons'>
          <a href='/' target="_blank"><img alt="icons" src={Twitter}/></a>
          <a href='/' target="_blank"><img alt="icons" src={Facebook}/></a>
          <a href='https://www.instagram.com/ainura.finance/' target="_blank"  rel="noreferrer"><img alt="icons" src={Instagram}/></a>
        </div>
        <a href="mailto:go4profit@gmail.com">info@go4profit.us</a>
        <p>Ⓒ Go4profit 2022 All rights are reserved </p>
      </div>
    </div>
  );
}
