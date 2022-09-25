import './Home.css'
import Button from 'react-bootstrap/Button';
import MainPic from '../../assets/home-main.png';
import AccountIcon from '../../assets/icons8-accountant-64.png'
import GlobalIcon from '../../assets/icons8-global-64.png'
import LanguageIcon from '../../assets/icons8-language-50.png'
import GrowIcon from '../../assets/icons8-financial-dynamic-presentation-64.png'
import Talk from '../../assets/talk.png';
import Money from '../../assets/grow-money.png';
import Team from '../../assets/team.png';
import WhyUs from '../WhyUs/WhyUs';
import SecondPic from '../../assets/home-second.png'


export default function Home(){
  return(
    <div className='home-container'>
      <div className='home-first'>
        <div className='home-first-a'>
          <h1 className='home-header'>We know what is best for turning your business into a <span>legacy</span></h1>
          <h5 className='home-title'>Minimize bookkeeping, maximize profit</h5>
          <div className='home-bullet-points'>
            <img alt='rd-img' src={AccountIcon}/>
            <p>Dedicated accountant for your business </p>
          </div>
          <div className='home-bullet-points'>
            <img alt='rd-img' src={GlobalIcon}/>
            <p>Provides services both in the USA and Globally </p>
          </div>
          <div className='home-bullet-points'>
            <img alt='rd-img' src={LanguageIcon}/>
            <p>For Russian and English Speaking Business Owners</p>
          </div>
          <div className='home-bullet-points'>
            <img alt='rd-img' src={GrowIcon}/>
            <p>CFO services for better financial strategy</p>
          </div>
          <div className='quote-button-main'>
            <Button href="/book-a-call" variant="success" className="quote-button">Get an instant quote</Button>{' '}
          </div>
        </div>
        <div className='home-first-b'>
          <img className='main-image' alt='rd-img' src={MainPic} />
        </div>
      </div>
      <div className='home-second'>
        <h3 className='home-second-header'>We Ensure Your Business Has All The Financial Support It Needs</h3>
        <h4 className='home-second-paragraph'>Make Better Financial Decisions With Our Expert Advise</h4>
        <h4 className='home-second-paragraph-mobile'>Make Better Financial Decisions With Our Expert Advise</h4>
      </div>
      <img className='home-second-image' alt='rd-img' src={SecondPic} />
      <WhyUs/>
      <h4 className='home-third-header'>What Sets Go<span>4</span>Profit Apart?</h4>
      <div className='home-third'>
        <div>
          <img alt='rd-img' src={Talk} />
          <p className='home-third-title' >No to language barriers</p>
          <p>One of our missions is to streamline 
            business operations by facilitating
            through language barriers among businesses.
             We cater
            to the needs of Russian-speaking 
            and English-speaking business 
            communities.
          </p>
        </div>
        <div>
          <img alt='rd-img' src={Money} />
          <p className='home-third-title' >Our dutes - your money</p>
          <p>Ever changing legislation and 
            regulations demand an accountant
             who is both informed and vigilant. 
             Our business accountants work with 
             the clients to make sure their
              bookkeeping and other financial 
              needs are met on time.
          </p>
        </div>
        <div>
          <img alt='rd-img' src={Team} />
          <p className='home-third-title' >Information first</p>
          <p>Go4Profit is your go-to company for better 
            finances and flawless books. We aim at making 
            our English and especially Russian-speaking 
            clients well-informed on the strong and weak 
            points of their businesses in the same package. 
          </p>
        </div>
      </div>
      <Button href="/book-a-call" variant="success" className="home-contact-button">Contact now</Button>{' '}
    </div>
  )
}