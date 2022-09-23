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
import Ava from '../../assets/ainur-ava.png';


export default function About() {
  return(
    <div className='about-container'>
      <div className='about-first'>
        <img className='about-first-img' alt='eclipse' src={Eclipse} />
        <h1>About Go<span>4</span>Profit</h1>
        <p className='about-first-paragraph'>
          <span>W</span>e make business world better 
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
        <Button variant="success" className="get-in-touch-button">Get in touch</Button>{''}
      </div>
      <div className='about-second'>
        <div className='about-second-a'>
        <h3>Skilled Bookkeeping Experts</h3>
        <br/>
        <p><span>It’s hard enough to find a good bookkeeper, 
          let alone ones who understand your product and 
          market.</span> 
          <br/>
          <br/>
          We bring qualified bookkeeping experts 
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
        <div className='about-third-a'>
        <h2>Industry and technical expertise</h2>
        <p>Deep expertise in the bookkeeping technology market</p>
        </div>
        <div className='about-third-b'>
          <div className='about-third-b-card'>
            <img alt='vector' src={Vector} />
            <p>Growth</p>
          </div>
          <div className='about-third-b-card'>
            <img alt='vector' src={Vector1} />
            <p>Personal</p>
          </div>
          <div className='about-third-b-card'>
            <img alt='vector' src={Vector3} />
            <p>Safety</p>
          </div>
          <div className='about-third-b-card'>
            <img alt='vector' src={Vector4} />
            <p>Dedicated team</p>
          </div>
          <div className='about-third-b-card'>
            <img alt='vector' src={Vector5} />
            <p>Cost-effective</p>
          </div>
          <div className='about-third-b-card'>
            <img alt='vector' src={Vector7} />
            <p>Hardware</p>
          </div>
        </div>
      </div>
      <div className='about-forth'>
        <div className='about-forth-a'>
        <h3 class="hr-text" data-content="Focused on growth"></h3>
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
      </div>
      <div className='about-space'></div>
      <div className='about-fifth'>
        <img alt='ava' src={Ava}/>
        <div className='about-fifth-b'>
          <p>I am thrilled that you found 
            my site! I'm Amy, CEO of Go4Profit
            Bookkeeping Services and the one 
            you'll be working closely with.
              I am a trusted partner to my 
              clients because I always treat
              their business as my own. 
          </p>
          <br/>
          <p>
          I know how hard it is for a business
           owner to carry all the weight and 
           perform multiple tasks at the same time. 
           You started your business because you are
            passionate about your customers, not
             managing your own books, so let me 
             do it for you. I not only want to 
             help you be more organized, but I 
             also want to help you and your business 
             grow and help gain control over your 
             finances.
          </p>
          <br/>
          <h4>We Make Your Business Easy And Your Live Easier.</h4>
          <br/>
          <div className='get-in-touch-main-button'>
          <Button variant="success" className="get-in-touch-button">Contact</Button>{''}
        </div>
        </div>
      </div>
    </div>
  )
}