import './Home.css'
import Button from 'react-bootstrap/Button';
import MainPic from '../../assets/home-main.png';
import SecondPic from '../../assets/home-second.png'
import Bag from '../../assets/bag.png';

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
      <div>3</div>
    </div>
  )
}