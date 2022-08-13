import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';
import Logo from '../../assets/logo.png';
import Twitter from '../../assets/twitter.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Phone from '../../assets/phone.png';


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
          <a href="/contact">Contact</a>
          <a href="/about">About us</a>
        </div>
        <div className='footer-row'>
          <p className='g-txt'>Our Services</p>
          <a href="/">Bookkeeping </a>
          <a href="/">Payroll</a>
          <a href="/">Tax</a>   
        </div>
        <div className='footer-row'>
          <p className='g-txt'>Cases</p>
          <a href="/">Small business</a>
          <a href="/">Medium business</a>
          <a href="/">Large business</a>
        </div>
        {/* <div>
          <p>Our Offices</p>
          <p>1 Liberty St #226,<br/>
          New York, NY 10006
          </p>
          </div> */}
      </div>
      <div className='footer-container-third'>
        <div className='fotter-container-icons'>
          <a href='/'><img alt="icons" src={Twitter}/></a>
          <a href='/'><img alt="icons" src={Facebook}/></a>
          <a href='/'><img alt="icons" src={Instagram}/></a>
        </div>
        <a href="tel:917-200-7609">+1-917-200-7609</a>
        <a href="mailto:go4profit@gmail.com">go4profit@gmail.com</a>
        {/* <div>Ⓒ Go4profit 2022 All rights are reserved </div> */}
      </div>
    </div>
  );
}
