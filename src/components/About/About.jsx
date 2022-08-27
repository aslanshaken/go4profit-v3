import './About.css';
import Button from 'react-bootstrap/Button';
import Eclipse from '../../assets/ecliplse.png';
import FirstImage from '../../assets/about1.png';

export default function About() {
  return(
    <div className='about-container'>
      <div className='about-first'>
        <img className='about-first-img' alt='eclipse' src={Eclipse} />
        <h1>About Go4Profit</h1>
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
        <div className='get-in-touch-main-button'>
          <Button variant="success" className="get-in-touch-button">Get in touch</Button>{''}
        </div>
        <p className='about-first-overflow-txt'>ABOUT GO4PROFIT</p>
      </div>
      <div className='about-space'></div>
      <div className='about-second'>
        <div className='about-second-a'>
        <h3>Why us ?</h3>
        <p>Skilled bookkeeping experts</p>
        <p>It’s hard enough to find a good bookkeeper, 
          let alone ones who understand your product and 
          market. We bring qualified bookkeeping experts 
          to the table who can hit every angle—technical 
          datasheets, innovative white papers, 
          TechCrunch-worthy articles, snappy ad copy, 
          and more. We excel in turning complex ideas 
          into concrete, lead-generating content pieces.
        </p>
        </div>
        <img alt='ima' src={FirstImage}/>
      </div>
    </div>
  )
}