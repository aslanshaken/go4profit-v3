import './Home.css'
import Button from 'react-bootstrap/Button';
import MainPic from '../../assets/home-main.png'
import Bag from '../../assets/bag.png'

export default function Home(){
  return(
    <div className='home-container'>
      <div className='home-main-first'>
        <div className='home-first-child'>
          <p className='home-header'>We know what is best for turning your business into a legacy</p>
          <p className='home-paragraph'>Minimize bookkeeping, maximize profit</p>
          <div className='home-bullet-points'>
            <img alt='image' src={Bag}/>
            <p>Dedicated accountant for your business </p>
          </div>
          <div className='home-bullet-points'>
            <img alt='image' src={Bag}/>
            <p>Provides services both in the USA and Globally </p>
          </div>
          <div className='home-bullet-points'>
            <img alt='image' src={Bag}/>
            <p>For Russian and English Speaking Business Owners</p>
          </div>
          <div className='home-bullet-points'>
            <img alt='image' src={Bag}/>
            <p>CFO services for better financial strategy</p>
          </div>
          <Button variant="success" className="quote-button">Get an instant quote</Button>{' '}
        </div>
        <img className='main-image' alt='image' src={MainPic} />
      </div>
      <div>2</div>
      <div>3</div>
    </div>
  )
}