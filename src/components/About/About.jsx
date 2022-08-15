import './About.css';
import Button from 'react-bootstrap/Button';

export default function About() {
  return(
    <div className='about-container'>
      <div className='about-first'>
        <h2>About Go4Profit</h2>
        <p className='about-first-paragraph'>
          We make business world better 
          by making business owners more 
          educated in their finances. We 
          turn numbers into words and show 
          the history behind the numbers. 
          Our vision is to ensure sustainable 
          business growth with decisions based 
          on insights and analytics. We provide 
          business owners with a platform where 
          they can learn the financial aspect of 
          their business beyond numbers in easy 
          language to help them to make well-informed 
          future choices.
        </p>
        <div className='learn-main-button'>
          <Button variant="success" className="learn-more-button">Get in touch</Button>{''}
        </div>
        <h1> About go4profit</h1>
      </div>
    </div>
  )
}