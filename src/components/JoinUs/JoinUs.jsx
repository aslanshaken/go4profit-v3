import './JoinUs.css';
import Wallpaper from '../../assets/joinus.png';
import Step1 from '../../assets/step1.png';
import Step2 from '../../assets/step2.png';
import Step3 from '../../assets/step3.png';
import Dollar from '../../assets/dollar.png';
import Monitor from '../../assets/monitor-cellphone.png';
import Round from '../../assets/round-app-registration.png';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'

export default function JoinUs() {

  const [formData, setFormData] = useState(
    {
    name: '',
    email: '',
    message: ''
   }
  )

  const [received, setReceived] = useState(false)

  const { name, email, message } = formData

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => (
      {
        ...prevState,
        [name]: value
      }
    ))
  }

  const handleCreate = async (e) => {
    e.preventDefault();
    setReceived(true)
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }


  return(
    <div className='joinus-container'>
      <div className='joinus-first'>
        <div className='joinus-first-a'>
          <h1 className='joinus-first-workAtG4'>Work at Go<span>4</span>Profit</h1>
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
      <Button href="/book-a-call" variant="success" className="joinus-button">Join now</Button>{' '}
      <p className='joinus-perks-header'>Perks</p>
      <div className='joinus-perks'>
        <div className='joinus-perks-child'>
          <p>Flexible hours</p>
          <p>Night owl? Morning person? Work whenever. We judge on result, not presence.</p>
        </div>
        <div className='joinus-perks-child'>
          <p>Flexible PTO</p>
          <p>No limit on vacation. Just let us know in advance and disconnect.</p>
        </div>
        <div className='joinus-perks-child'>
          <p>Top insurance coverage</p>
          <p>100% coverage, no sacrifice. Medical, Dental, Vision — you name it, we got it.</p>
        </div>
        <div className='joinus-perks-child'>
          <p>Meals & Snacks</p>
          <p>We offer free lunches everyday and unlimited snacks to satiate any food craving.</p>
        </div>
      </div>
      <p className='joinus-contact-header'>Contact us</p>
      <p className='joinus-contact-paragraph'>Save money and grow exponentially by getting in touch right away!</p>
      <div className='joinus-contact-container'>
        <div className='joinus-location'>
          <div className='joinus-location-context'>
            <h4>We are Here</h4>
            <br/>
            <p>
              1 Liberty St #226,
            <br/>
              New York, NY 10006
            </p>
            <a href="tel:917-200-7609">+1-917-200-7609</a>
            <br/>
            <br/>
            <a href="mailto:go4profit@gmail.com">go4profit@gmail.com</a>
            <br/>
            <br/>
            <Button variant="success" className="joinus-open-map-button">Open map</Button>{' '}
          </div>
          <iframe 
            title='map'
            className='joinus-map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3765867065895!2d-74.01299488512723!3d40.70972564569264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17a49aaaab%3A0xe886b8404e5d82c7!2s1%20Liberty%20St%20%23226%2C%20New%20York%2C%20NY%2010005!5e0!3m2!1sen!2sus!4v1664123423158!5m2!1sen!2sus"
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
         </iframe>
        </div>
        <div className='joinus-contact-form'>
          <h3>Get in Touch</h3>
          <h5>Feel free to drop us a line below</h5>
          <form className='joinus-form' onSubmit={(e) => handleCreate(e)}>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={name}
              maxLength="50"
              required
              onChange={handleChange} 
            />
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              maxLength="50"
              required
              onChange={handleChange} 
            />
            <textarea
              className="input-message"
              type='text'
              placeholder='Message'
              name='message'
              value={message}
              required
              onChange={handleChange} 
            />
            <button className="joinus-form-button">Send</button>{' '}
          </form>
        </div>
      </div>
      {received && <h5>Thank you! We have received your information.</h5>}
    </div>
  )
}