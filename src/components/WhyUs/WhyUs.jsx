import './WhyUs.css';
import Partnerships from '../../assets/partnerships.png';
import S1 from '../../assets/s1.png';
import Calculator from '../../assets/calculator.png';
import Illustration from '../../assets/Illustration.png';
import Vec18 from '../../assets/Frame-18.png';
import Img1 from '../../assets/1.png';
import Img2 from '../../assets/2.png';
import Img3 from '../../assets/3.png';
import Img4 from '../../assets/4.png';
import Img5 from '../../assets/5.png';
import Img6 from '../../assets/6.png';
import Communication from '../../assets/Communication.png';
import Grow from '../../assets/Grow.png';
import Communitty from '../../assets/Communitty.png';
import Trust from '../../assets/Trust.png';
import Money from '../../assets/Money.png';
import Application from '../../assets/application.png';
import Sign from '../../assets/sign.png';
import Launch from '../../assets/launch.png';
import Alumni from '../../assets/alumni.png';
import BBL from '../../assets/BBL-badge.png';
import Financial from '../../assets/Financial-analysis.png';
import QBOAdvanced from '../../assets/QBO-Advanced.png';
import QBO from '../../assets/QBO.png';
import Shopify from '../../assets/Gold-certification.png';
import Gusto from '../../assets/Gusto.png';
import Hand from '../../assets/hand.png';
import Card from 'react-bootstrap/Card';



export default function WhyUs() {
  return(
    <>
      <h4 className='whyus-header-h4 reveal'>Why Choose Our Online Accountancy Services?</h4>
      <br/>
      <h5 className='whyus-header-h5 reveal'>
         We are devoted to providing you with an outstanding level of financial
         solutions and online accounting excellence
      </h5>
      <div className='whyus-first'>
        <Card className='whyus-first-child reveal'>
          <Card.Img variant="top" src={Partnerships} />
          <Card.Body>
            <Card.Title>Peace Of Mind</Card.Title>
            <Card.Text>
            Our professional bookkeepers are 
            trained in error-free data entry,
            so you can be confident in the 
            figures they produce.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='whyus-first-child reveal'>
          <Card.Img variant="top" src={S1} />
          <Card.Body>
            <Card.Title>We Are Remote But We Don’t Outsource</Card.Title>
            <Card.Text>
            We are your trusted remote advisors committed 
          to your financial needs. We don’t outsource 
          our work, rather we source talent from around
          the globe to hire the best team who are 100%
          under control.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='whyus-first-child reveal'>
          <Card.Img variant="top" src={Illustration} />
          <Card.Body>
            <Card.Title>Accurate Financial Reporting</Card.Title>
            <Card.Text>
            We produce accurate figures & provide financial 
            advice that enables you to make insightful
            business decisions and thrive. 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='whyus-first-child reveal'>
          <Card.Img variant="top" src={Calculator} />
          <Card.Body>
            <Card.Title>Cost-Effective</Card.Title>
            <Card.Text>
            Our packages will provide you with more efficient
            and profitable results than accounting services 
            with billable hours. 
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <h4 className='whyus-easy-header reveal'>Easy Process</h4>
      <div className='whyus-second'>
        <div className='whyus-second-child reveal'>
          <div className='whyus-second-child-a'>
            <img className='whyus-second-child-a-img2' alt='vec' src={Vec18} />
            <img className='whyus-second-child-a-img1' alt='1' src={Img1}/>
          </div>
          <div className='whyus-second-child-b'>
            <p><strong>Virtual Meeting</strong></p>
            <p>
              Our CEO will set up a meeting 
              with you to better understand 
              your needs and business 
              requirements.
            </p>
          </div>
        </div>
        <div className='whyus-second-child reveal'>
          <div className='whyus-second-child-a'>
            <img className='whyus-second-child-a-img2' alt='vec' src={Communication} />
            <img className='whyus-second-child-a-img1' alt='1' src={Img2}/>
          </div>
          <div className='whyus-second-child-b'>
            <p><strong>Free Consultation</strong></p>
            <p>
              After reviewing your books we will advise 
              you with the best financial solutions 
              tailored specifically according to your
              business needs.
            </p>
          </div>
        </div>
        <div className='whyus-second-child reveal'>
          <div className='whyus-second-child-a'>
            <img className='whyus-second-child-a-img2' alt='vec' src={Money} />
            <img className='whyus-second-child-a-img1' alt='1' src={Img3}/>
          </div>
          <div className='whyus-second-child-b'>
            <p><strong>Pricing</strong></p>
            <p>
            You deserve to know what you are paying
            for and we will make sure to educate 
            you on which services your business 
            requires and which do not.
            </p>
          </div>
        </div>
        <div className='whyus-second-child reveal'>
          <div className='whyus-second-child-a'>
            <img className='whyus-second-child-a-img2' alt='vec' src={Trust} />
            <img className='whyus-second-child-a-img1' alt='1' src={Img4}/>
          </div>
          <div className='whyus-second-child-b'>
            <p><strong>Approval</strong></p>
            <p>
              On the approval of our proposal and 
              signing the contract, we will ask you 
              to provide us with the requisite 
              documents and information.
            </p>
          </div>
        </div>
        <div className='whyus-second-child reveal'>
          <div className='whyus-second-child-a'>
            <img className='whyus-second-child-a-img2' alt='vec' src={Communitty} />
            <img className='whyus-second-child-a-img1' alt='1' src={Img5}/>
          </div>
          <div className='whyus-second-child-b'>
            <p><strong>Dedicated Team</strong></p>
            <p>
              Our CEO will set up a meeting 
              with you to better understand 
              your needs and business 
              requirements.
            </p>
          </div>
        </div>
        <div className='whyus-second-child reveal'>
          <div className='whyus-second-child-a'>
            <img className='whyus-second-child-a-img2' alt='vec' src={Grow} />
            <img className='whyus-second-child-a-img1' alt='1' src={Img6}/>
          </div>
          <div className='whyus-second-child-b'>
            <p> <strong>Long-Term Planning</strong></p>
            <p>
              Your dedicated team, who are fully under 
              CEO’s control, will be responsible for
              bookkeeping, financial analysis and 
              explaining the financial insights of
              the business to you in easy language
              for future decisions.
            </p>
          </div>
        </div>
      </div>
      <h4 className='whyus-third-header reveal'>
      We have created a streamlined & startup-friendly process to get a quote fast and easy!
      </h4>
      <div className='whyus-third'>
        <div className='whyus-third-child reveal'>
          <img alt='application' src={Application} />
          <h4 className='whyus-third-child-w'>1. Application</h4>
          <h5 className='whyus-third-child-p'>Onboarding the client</h5>
        </div>
        <div className='whyus-third-border'></div>
        <div className='whyus-third-child reveal'>
          <img alt='application' src={Sign} />
          <h4 className='whyus-third-child-w'>2. Set up</h4>
          <h5 className='whyus-third-child-p'>Healthy accounting process</h5>
        </div>
        <div className='whyus-third-border'></div>
        <div className='whyus-third-child reveal'>
          <img alt='application' src={Launch} />
          <h4 className='whyus-third-child-w'>3. Habit</h4>
          <h5 className='whyus-third-child-p'>Recurring review meetings</h5>
        </div>
        <div className='whyus-third-border'></div>
        <div className='whyus-third-child reveal'>
          <img alt='application' src={Alumni} />
          <h4 className='whyus-third-child-w'>4. Support</h4>
          <h5 className='whyus-third-child-p'>CFO and Tax strategy advice</h5>
        </div>
      </div>
      <h4 className='whyus-easy-header reveal'>Certifications</h4>
      <div className='whyus-forth'>
        <div className='whyus-forth-a reveal'>
          <h4>You're in good hands</h4>
          <p>
            We are nationally certified financial advisors
            committed to your financial success. Go4Profit
            has a versatile team of qualified bookkeepers, 
            financial analysts and tax planners. When you 
            trust us with your accounts, you can have
            complete confidence that your information 
            is safe with us. Our experienced team have 
            a broad range of qualifications and accreditations 
            from trusted professional institutes.
          </p>
        </div>
        <div className='whyus-forth-b reveal'>
          <img alt='badge' src={Hand} />
        </div>
        <div className='whyus-forth-c reveal'>
          <img alt='badge' src={BBL} />
          <img alt='badge' src={Financial} />
          <img alt='badge' src={QBOAdvanced} />
          <img alt='badge' src={QBO} />
          <img alt='badge' src={Shopify} />
          <img alt='badge' src={Gusto} />
        </div>
      </div>
    </>
  )
}