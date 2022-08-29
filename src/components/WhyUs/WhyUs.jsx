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
import Checkbox from '../../assets/checkbox.png';
import Pen from '../../assets/pen.png';
import Sign from '../../assets/sign.png';
import Flag from '../../assets/finish.png';
import Launch from '../../assets/launch.png';
import Done from '../../assets/done.png';
import Alumni from '../../assets/alumni.png';



export default function WhyUs() {
  return(
    <div className='whyus-container'>
      <h4 className='whyus-header-h4'>Why Choose Our Online Accountancy Services?</h4>
      <br/>
      <h5 className='whyus-header-h5'>
         We are devoted to providing you with an outstanding level of financial
         solutions and online accounting excellence
      </h5>
      <div className='whyus-first'>
        <div className='whyus-first-child'>
          <img alt='partnerships' src={Partnerships} />
          <p>Peace Of Mind</p>
          <p className='whyus-first-p'>
            Our professional bookkeepers are 
            trained in error-free data entry,
            so you can be confident in the 
            figures they produce.
          </p>
        </div>
        <div className='whyus-first-child'>
          <img alt='partnerships' src={S1} />
          <p>We Are Remote But We Don’t Outsource</p>
          <p className='whyus-first-p'>
          We are your trusted remote advisors committed 
          to your financial needs. We don’t outsource 
          our work, rather we source talent from around
          the globe to hire the best team who are 100%
          under control.
          </p>
        </div>
        <div className='whyus-first-child'>
          <img alt='partnerships' src={Illustration} />
          <p>Accurate Financial Reporting</p>
          <p className='whyus-first-p'>
            We produce accurate figures & provide financial 
            advice that enables you to make insightful
            business decisions and thrive. 
          </p>
        </div>
        <div className='whyus-first-child'>
          <img alt='partnerships' src={Calculator} />
          <p>Cost-Effective</p>
          <p className='whyus-first-p'>
            Our packages will provide you with more efficient
            and profitable results than accounting services 
            with billable hours. 
          </p>
        </div>

      </div>
      <h4 className='whyus-easy-header'>Easy Process</h4>
      <div className='whyus-second'>
        <div className='whyus-second-child'>
          <div className='whyus-second-child-a'>
            <img className='whyus-second-child-a-img2' alt='vec' src={Vec18} />
            <img className='whyus-second-child-a-img1' alt='1' src={Img1}/>
          </div>
          <div className='whyus-second-child-b'>
            <p>Virtual Meeting</p>
            <p>
              Our CEO will set up a meeting 
              with you to better understand 
              your needs and business 
              requirements.
            </p>
          </div>
        </div>
        <div className='whyus-second-child'>
          <div className='whyus-second-child-a'>
            <img className='whyus-second-child-a-img2' alt='vec' src={Communication} />
            <img className='whyus-second-child-a-img1' alt='1' src={Img2}/>
          </div>
          <div className='whyus-second-child-b'>
            <p>Free Consultation</p>
            <p>
              After reviewing your books we will advise 
              you with the best financial solutions 
              tailored specifically according to your
              business needs.
            </p>
          </div>
        </div>
        <div className='whyus-second-child'>
          <div className='whyus-second-child-a'>
            <img className='whyus-second-child-a-img2' alt='vec' src={Money} />
            <img className='whyus-second-child-a-img1' alt='1' src={Img3}/>
          </div>
          <div className='whyus-second-child-b'>
            <p>Pricing</p>
            <p>
             You deserve to know what you are paying
             for and we will make sure to educate 
             you on which services your business 
             requires and which do not.
            </p>
          </div>
        </div>
        <div className='whyus-second-child'>
          <div className='whyus-second-child-a'>
            <img className='whyus-second-child-a-img2' alt='vec' src={Trust} />
            <img className='whyus-second-child-a-img1' alt='1' src={Img4}/>
          </div>
          <div className='whyus-second-child-b'>
            <p>Approval</p>
            <p>
              On the approval of our proposal and 
              signing the contract, we will ask you 
              to provide us with the requisite 
              documents and information.
            </p>
          </div>
        </div>
        <div className='whyus-second-child'>
          <div className='whyus-second-child-a'>
            <img className='whyus-second-child-a-img2' alt='vec' src={Communitty} />
            <img className='whyus-second-child-a-img1' alt='1' src={Img5}/>
          </div>
          <div className='whyus-second-child-b'>
            <p>Dedicated Team</p>
            <p>
              Our CEO will set up a meeting 
              with you to better understand 
              your needs and business 
              requirements.
            </p>
          </div>
        </div>
        <div className='whyus-second-child'>
          <div className='whyus-second-child-a'>
            <img className='whyus-second-child-a-img2' alt='vec' src={Grow} />
            <img className='whyus-second-child-a-img1' alt='1' src={Img6}/>
          </div>
          <div className='whyus-second-child-b'>
            <p>Long-Term Planning</p>
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
      <h4 className='whyus-header-h5'>
      We have created a streamlined & startup-friendly process to get a quote fast and easy!
      </h4>
      <div className='whyus-third'>
        <div className='whyus-third-child'>
          <img alt='application' src={Application} />
          <p className='whyus-third-child-w'>1 week</p>
          <div className='whyus-third-child-box'>
            <img alt='someimg' src={Checkbox} />
            <p>Application</p>
          </div>
          <p className='whyus-third-child-p'>Diligance & Selection</p>
        </div>
        <div className='whyus-third-border'></div>
        <div className='whyus-third-child'>
          <img alt='application' src={Sign} />
          <p className='whyus-third-child-w'>3-6 weeks</p>
          <div className='whyus-third-child-box'>
            <img alt='someimg' src={Pen} />
            <p>Compaign agreement is signed</p>
          </div>
          <p className='whyus-third-child-p'>Onboarding</p>
        </div>
        <div className='whyus-third-border'></div>
        <div className='whyus-third-child'>
          <img alt='application' src={Launch} />
          <p className='whyus-third-child-w'>2-3 month</p>
          <div className='whyus-third-child-box'>
            <img alt='someimg' src={Flag} />
            <p>Form C filed & compaign launches</p>
          </div>
          <p className='whyus-third-child-p'>Compaign live</p>
        </div>
        <div className='whyus-third-border'></div>
        <div className='whyus-third-child'>
          <img alt='application' src={Alumni} />
          <p className='whyus-third-child-w'>Until Exit</p>
          <div className='whyus-third-child-box'>
            <img alt='someimg' src={Done} />
            <p>Alumni community</p>
          </div>
          <p className='whyus-third-child-p'>Support</p>
        </div>
      </div>
    </div>
  )
}