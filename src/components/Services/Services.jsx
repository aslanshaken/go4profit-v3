import './Services.css';
import Button from 'react-bootstrap/Button';
import Checkbox from '../../assets/green-checkbox.png';
import Stripe from '../../assets/stripe.png';
import Gusto1 from '../../assets/gusto1.png';
import Shopify1 from '../../assets/shopify1.png';
import BigCommerce from '../../assets/bigcommerce.png';
import Freshbooks from '../../assets/freshbooks.png';
import Square from '../../assets/square.png';
import Accordion from 'react-bootstrap/Accordion';

export default function Services() {
  return(
    <div className='services-container'>
      <h2 className='services-header'>Businesses we serve</h2>
      <h4 className='services-paragraph'>We have a big team of professionals who have 10+ experience 
        in each industry. Each of them can do several types of 
        financial analysis such as benchmarking, ratio, trend etc.
      </h4>
      <div className='services-cards'>
        <div className='services-card'>
          <div className='services-card-a'>
            <h4>START UP</h4>
            <p>Bookkeeping powered by real humans</p>
            <h4><span>$420</span> /mo</h4>
            <Button href="/book-a-call" variant="success" className="start-button">Start free trial</Button>{' '}
          </div>
          <div className='services-card-b'>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>Account set up in QBO</p>
            </div>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>Monthly recording, classifying and reconciling of up to 3 bank/credit card accounts</p>
            </div>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>Up to 125 transactions</p>
            </div>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>3 monthly financial reports (given of you in terms that you understand)</p>
            </div>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>Unlimited email support</p>
            </div>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>Monthly video analysis of your financial reports</p>
            </div>
          </div>
        </div>
        <div className='services-card-popular'>
          <h5 className='services-popular-sign'>Most Popular</h5>
          <div className='services-card-popular-a'>
            <h4>STANDARD</h4>
            <p><bold>Bookkeeping and CFO analysis done for you</bold></p>
            <h4><span>$630</span> /mo</h4>
            <Button href="/book-a-call" variant="success" className="start-button">Start free trial</Button>{' '}
          </div>
          <div className='services-card-b'>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>Account set up in QBO</p>
            </div>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>Monthly recording, classifying and reconciling of up to 4 bank/credit card accounts</p>
            </div>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>Up to 250 transactions</p>
            </div>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>3 monthly financial reports (explained in layman's terms for clarity)</p>
            </div>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>Unlimited email support</p>
            </div>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>Monthly video analysis of your financial reports</p>
            </div>
          </div>
        </div>
        <div className='services-card'>
          <div className='services-card-a'>
            <h4>PREMIUM</h4>
            <p>Hire Us, Worry Less And Thrive More!</p>
            <h4><span>$1050</span> /mo</h4>
            <Button href="/book-a-call" variant="success" className="start-button">Start free trial</Button>{' '}
          </div>
          <div className='services-card-b'>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>Account set up in QBO</p>
            </div>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>Monthly recording, classifying and reconciling of up to 6 bank/credit card accounts</p>
            </div>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>Up to 500 transactions</p>
            </div>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>3 monthly financial reports (explained in layman's terms for clarity)</p>
            </div>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>Unlimited email support</p>
            </div>
            <div className='services-card-box'>
              <img alt='check' src={Checkbox} />
              <p>Monthly video analysis of your financial reports</p>
            </div>
          </div>
        </div>
      </div>
      <div className='services-cards-small'>
        <div className='services-card-small reveal'>
            <h5>Clean up services</h5>
            <p className='services-card-small-paragraph'>Clean up process is when your previous bookkeeper or you were trying to run the bookkeeping, and made a mess. We are here to fix it.</p>
            <p>Book a call for custom pricing and packages</p>
            <Button href="/book-a-call" variant="success" className="book-button">Book</Button>{' '}
        </div>
        <div className='services-card-small reveal'>
            <h5>Catch up services</h5>
            <p className='services-card-small-paragraph'>When you came to us in July (example) and you didn't 
              do bookkeeping till July, we need to "catch up" with 
              the bookkeeping you left behind. It's extra work that
              will give your a clear picture of your business 
              finance.
            </p>
            <p>Book a call for custom pricing and packages</p>
            <Button href="/book-a-call" variant="success" className="book-button">Book</Button>{' '}
        </div>
      </div>
      <h3 className='services-partner-header reveal'>We partner with the world’s best</h3>
      <div className='services-second reveal'>
        <img alt='services' src={BigCommerce} />
        <img alt='services' src={Stripe} />
        <img alt='services' src={Freshbooks} />
        <img alt='services' src={Shopify1} />
        <img alt='services' src={Gusto1} />
        <img alt='services' src={Square} />
      </div>
      <div className='services-third'>
        <div className='services-third-a reveal'>
          <h3>Frequently Asked Questions</h3>
          <p>More FAQs</p>
        </div>
        <Accordion className='reveal'>
          <Accordion.Item className='services-third-item' eventKey="0">
            <Accordion.Header>Will Go4Profit file my personal taxes?</Accordion.Header>
            <Accordion.Body>
              No, we only provide bookkeeping services with the advice of a
              Financial Analyst. We always help our clients by "informing" 
              them about what kind of Tax Strategies are there, but we don't
              file the taxes themselves. We are more focused on Growing your 
              business by helping you to make the right Financial Decisions. 
              We are leaving all paperwork to CPAs. 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className='services-third-item' eventKey="1">
            <Accordion.Header>Do we have to meet in person?</Accordion.Header>
            <Accordion.Body>
              I would love to meet with you in person, but the whole process is 100% online.
              But it doesn't mean that it's not secure. We care about our brand name and we 
              never let our clients be ignored. There's 24/7 support and we are always open 
              for meetings. 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className='services-third-item' eventKey="2">
            <Accordion.Header>If I don't see my option in your three packages, what do I do?</Accordion.Header>
            <Accordion.Body>
             if you don't see your option it doesn't mean that your business doesn't fit us. 
             We always provide a Free Consultation where we do a Diagnostic review of your bookkeeping. 
             Make a call and let us help you!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}