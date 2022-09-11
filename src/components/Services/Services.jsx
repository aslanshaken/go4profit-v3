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
      <h3 className='services-header'>Businesses we serve</h3>
      <div className='services-first'>
        <div className='services-first-child'>
          <div className='services-first-popular'> Most Popular</div>
          <div className='services-first-child-a'>
            <h5>StartUP</h5>
            <p>Bookkeeping powered by real humans</p>
            <p><span>$310</span> /mo</p>
            <Button variant="success" className="start-button">Start free trial</Button>{' '}
          </div>
          <div className='services-first-child-b'>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>Account set up and monthly subscription in QBO</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>Monthly recording, classifying and reconciling of up to 3 bank/credit card accounts</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>Up to 125 transactions</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>3 monthly financial reports (given of you in terms that you understand)</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>Unlimited email support</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>Monthly video analysis of your financial reports</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>No contract (30 days notice required to cancel)</p>
            </div>
          </div>
        </div>
        <div className='services-first-child'>
          <div className='services-first-child-a'>
            <h5>Standard</h5>
            <p>Taxes and bookkeeping done for you.</p>
            <p><span>$460</span> /mo</p>
            <Button variant="success" className="start-button">Start free trial</Button>{' '}
          </div>
          <div className='services-first-child-b'>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>Account set up and monthly subscription in QBO</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>Monthly recording, classifying and reconciling of up to 4 bank/credit card accounts</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>Up to 250 transactions</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>3 monthly financial reports (explained in layman's terms for clarity)</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>Unlimited email support</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>Monthly video analysis of your financial reports</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>No contract (30 days notice required to cancel)</p>
            </div>
          </div>
        </div>
        <div className='services-first-child'>
          <div className='services-first-child-a'>
            <h5>Premium</h5>
            <p>Hire Us, Worry Less And Thrive More!</p>
            <p><span>$660</span> /mo</p>
            <Button variant="success" className="start-button">Start free trial</Button>{' '}
          </div>
          <div className='services-first-child-b'>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>Account set up and monthly subscription in QBO</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>Monthly recording, classifying and reconciling of up to 5 bank/credit card accounts</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>3 monthly financial reports (explained in layman's terms for clarity)</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>Unlimited email support</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>Monthly video analysis of your financial reports OR monthly video call to chat face-to-face</p>
            </div>
            <div className='services-first-child-box'>
              <img alt='check' src={Checkbox} />
              <p>No contract (30 days notice required to cancel)</p>
            </div>
          </div>
        </div>
        <div className='services-first-small-child'>
          <h5>Clean up services</h5>
          <p>Request quote</p>
          <p>Book a call for custom pricing and packages</p>
          <Button variant="success" className="book-button">Book</Button>{' '}
        </div>
        <div className='services-first-small-child'>
          <h5>Catch up services</h5>
          <p>Request quote</p>
          <p>Book a call for custom pricing and packages</p>
          <Button variant="success" className="book-button">Book</Button>{' '}
        </div>
      </div>
      <h3 className='services-partner-header'>We partner with the world’s best</h3>
      <div className='services-second'>
        <img alt='services' src={BigCommerce} />
        <img alt='services' src={Stripe} />
        <img alt='services' src={Freshbooks} />
        <img alt='services' src={Shopify1} />
        <img alt='services' src={Gusto1} />
        <img alt='services' src={Square} />
      </div>
      <div className='services-third'>
        <div className='services-third-a'>
          <h3>Frequently Asked Questions</h3>
          <p>More FAQs</p>
        </div>
        <Accordion>
          <Accordion.Item className='services-third-item' eventKey="0">
            <Accordion.Header>Will Go4Profit file my personal taxes?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What type of bookkeeping does Go4Profit offer?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How does Go4Profit do my business bookkeeping?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}