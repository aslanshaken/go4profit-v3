import './Home.css'
import Button from 'react-bootstrap/Button';
import MainPic from '../../assets/home-main.png';
import SecondPic from '../../assets/home-second.png'
import Bag from '../../assets/bag.png';
import Talk from '../../assets/talk.png';
import Money from '../../assets/grow-money.png';
import Team from '../../assets/team.png';


export default function Home(){
  return(
    <div className='home-container'>
      <div className='home-first'>
        <div className='home-first-a'>
          <p className='home-header'>We know what is best for turning your business into a legacy</p>
          <p className='home-paragraph'>Minimize bookkeeping, maximize profit</p>
          <div className='home-bullet-points'>
            <img alt='rd-img' src={Bag}/>
            <p>Dedicated accountant for your business </p>
          </div>
          <div className='home-bullet-points'>
            <img alt='rd-img' src={Bag}/>
            <p>Provides services both in the USA and Globally </p>
          </div>
          <div className='home-bullet-points'>
            <img alt='rd-img' src={Bag}/>
            <p>For Russian and English Speaking Business Owners</p>
          </div>
          <div className='home-bullet-points'>
            <img alt='rd-img' src={Bag}/>
            <p>CFO services for better financial strategy</p>
          </div>
          <div className='quote-button-main'>
            <Button variant="success" className="quote-button">Get an instant quote</Button>{' '}
          </div>
        </div>
        <div className='home-first-b'>
          <img className='main-image' alt='rd-img' src={MainPic} />
        </div>
      </div>
      <div className='home-second'>
        <div className='home-second-a'>
          <img className='second-image' alt='rd-img' src={SecondPic} />
        </div>
        <div className='home-second-b'>
          <p className='home-header'>We Ensure Your Business Has All The Financial Support It Needs</p>
          <p className='home-paragraph'>Make Better Financial Decisions With Our Expert Advise</p>
        </div>
      </div>
      <p className='home-header'>What Sets Go4Profit Apart?</p>
      <div className='home-third'>
        <div>
          <img alt='rd-img' src={Talk} />
          <p className='home-paragraph' >No to language barriers</p>
          <p className='home-paragraph' >One of our missions is to streamline 
            business operations by facilitating
            through language barriers among businesses.
             We cater
            to the needs of Russian-speaking 
            and English-speaking business 
            communities around the world.
          </p>
        </div>
        <div>
        <img alt='rd-img' src={Money} />
          <p className='home-paragraph' >Our dutes - your money</p>
          <p className='home-paragraph' >Ever changing legislation and 
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
          <p className='home-paragraph' >Information first</p>
          <p className='home-paragraph'>Go4Profit is your go-to company for better 
            finances and flawless books. We aim at making 
            our English and especially Russian-speaking 
            clients well-informed on the strong and weak 
            points of their businesses in the same package. 
          </p>
        </div>
      </div>
    </div>
  )
}