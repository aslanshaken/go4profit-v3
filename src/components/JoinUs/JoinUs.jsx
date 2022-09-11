import './JoinUs.css';
import Wallpaper from '../../assets/joinus.png';
import Step1 from '../../assets/step1.png';
import Step2 from '../../assets/step2.png';
import Step3 from '../../assets/step3.png';
import Dollar from '../../assets/dollar.png';
import Monitor from '../../assets/monitor-cellphone.png';
import Round from '../../assets/round-app-registration.png';
import Button from 'react-bootstrap/Button';

export default function JoinUs() {
  return(
    <div className='joinus-container'>
      <div className='joinus-first'>
        <div className='joinus-first-a'>
          <p className='joinus-first-workAtG4'>Work at Go<span>4</span>Profit</p>
          <p className='joinus-first-p'>
            If your goals are as bold as 
            ours then join us to become 
            the leader you want to be!
          </p>
          <p >
            We don’t just hire for skills,
            we hire those who can add value
            to our virtual world. Grab this
            opportunity to make a real
            impact in the world. Our 
            culture is fast-paced, 
            inclusive and fun. You’ll
            have all the tools, learning 
            experience and diversity in a
            truly exceptional work environment. 
          </p>
        </div>
        <img alt='Wallp' src={Wallpaper}/>
      </div>
      <p className='joinus-steps-header'>Joining us is as simple as 1, 2 and 3!</p>
      <div className='joinus-second'>
      <div className='joinus-second-child'>
        <img className='joinus-second-child-steps' alt='step' src={Step1} />
        <p className='joinus-second-p'>Register Yourself</p>
        <p>Fill out our online registration form</p>
        <img alt='round' src={Round} />
      </div>
      <div className='joinus-second-child'>
        <img className='joinus-second-child-steps' alt='step' src={Step2} />
        <p className='joinus-second-p'>Receive A Warm Welcome</p>
        <p>We’ll contact you and set up a video interview with you</p>
        <img alt='round' src={Monitor} />
      </div>
      <div className='joinus-second-child'>
        <img className='joinus-second-child-steps' alt='step' src={Step3} />
        <p className='joinus-second-p'>Trial & Hire!</p>
        <p>On successful completion of probation, we’ll hire you.</p>
        <img className='joinus-second-child-dollar' alt='round' src={Dollar} />
      </div>
      </div>
      <p className='joinus-simpler-header'>Bookkeeping becomes simpler with us</p>
      <Button variant="success" className="joinus-button">Join now</Button>{' '}
    </div>
  )
}