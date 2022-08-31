import './Services.css';
import Button from 'react-bootstrap/Button';
import Checkbox from '../../assets/green-checkbox.png';

export default function Services() {
  return(
    <div className='services-container'>
      <h4 className='services-header'>Businesses we serve</h4>
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
          <h5 className='services-header'>Clean up services</h5>
          <p>Request quote</p>
          <p>Book a call for custom pricing and packages</p>
          <Button variant="success" className="book-button">Book</Button>{' '}
        </div>
        <div className='services-first-small-child'>
          <h5 className='services-header'>Catch up services</h5>
          <p>Request quote</p>
          <p>Book a call for custom pricing and packages</p>
          <Button variant="success" className="book-button">Book</Button>{' '}
        </div>
      </div>
    </div>
  )
}