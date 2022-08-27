import './About.css';
import Button from 'react-bootstrap/Button';
import Eclipse from '../../assets/ecliplse.png';
import FirstImage from '../../assets/about1.png';
import Vector from '../../assets/Vector.png';
import Vector1 from '../../assets/Vector-1.png';
import Vector7 from '../../assets/Vector7.png';
import Vector3 from '../../assets/Vector-3.png';
import Vector4 from '../../assets/Vector-4.png';
import Vector5 from '../../assets/Vector-5.png';
import Finance from '../../assets/finance-tutor-4.png';


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
        <h4>Skilled bookkeeping experts</h4>
        <br/>
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
      <div className='about-third'>
        <div>
        <h2>Industry and technical expertise</h2>
        <p>Deep expertise in the bookkeeping technology market</p>
        </div>
        <div className='about-third-c'>
          <div className='about-third-c-card'>
            <img alt='vector' src={Vector} />
            <p>Growth</p>
          </div>
          <div className='about-third-c-card'>
            <img alt='vector' src={Vector1} />
            <p>Personal</p>
          </div>
          <div className='about-third-c-card'>
            <img alt='vector' src={Vector3} />
            <p>Safety</p>
          </div>
          <div className='about-third-c-card'>
            <img alt='vector' src={Vector4} />
            <p>Dedicated team</p>
          </div>
          <div className='about-third-c-card'>
            <img alt='vector' src={Vector5} />
            <p>Cost-effective</p>
          </div>
          <div className='about-third-c-card'>
            <img alt='vector' src={Vector7} />
            <p>Hardware</p>
          </div>
        </div>
      </div>
      <div className='about-forth'>
        <img alt='ima' src={Finance}/>
        <div className='about-forth-a'>
        <h3>Focused on growth</h3>
        <br/>
        <p>We don’t believe in ad hoc marketing that can’t 
          deliver real results. Our approach to every project 
          is based on your big goals and milestones, from an 
          upcoming product launch to meeting investor 
          expectations before your next round of funding.
           If you don’t yet have the tools to measure the 
           success of your marketing campaigns, we’ll help 
           you put them in place.
        </p>
        </div>
        <p className='about-forth-overflow-txt'>LEADERSHIP</p>
      </div>
      <div className='about-forth-space'></div>
    </div>
  )
}