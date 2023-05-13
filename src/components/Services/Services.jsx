import "./Services.css";
import Button from "react-bootstrap/Button";
import Checkbox from "../../assets/green-checkbox.png";
import Stripe from "../../assets/stripe.png";
import Gusto1 from "../../assets/gusto1.png";
import Shopify1 from "../../assets/shopify1.png";
import BigCommerce from "../../assets/bigcommerce.png";
import Freshbooks from "../../assets/freshbooks.png";
import Square from "../../assets/square.png";

export default function Services() {
  return (
    <div className="services-container">
      <h2 className="services-header">Businesses we serve</h2>
      <h4 className="services-paragraph">
        We provide bookkeeping services with flat rate, no hourly rates or
        hidden fees. No surprises.
      </h4>
      <div className="services-cards">
        <div className="services-card">
          <div className="services-card-a">
            <h4>START UP</h4>
            <p>Bookkeeping powered by real humans</p>
            <h4>
              <span>$420</span> /mo
            </h4>
            <Button
              href="/book-a-call"
              variant="success"
              className="start-button"
            >
              Start free trial
            </Button>{" "}
          </div>
          <div className="services-card-b">
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>Account set up in QBO</p>
            </div>
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>
                Monthly recording, classifying and reconciling of up to 3
                bank/credit card accounts
              </p>
            </div>
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>Up to 125 transactions</p>
            </div>
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>
                3 monthly financial reports (given of you in terms that you
                understand)
              </p>
            </div>
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>Unlimited email support</p>
            </div>
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>Monthly video analysis of your financial reports</p>
            </div>
          </div>
        </div>
        <div className="services-card-popular">
          <h5 className="services-popular-sign">Most Popular</h5>
          <div className="services-card-popular-a">
            <h4>STANDARD</h4>
            <p>
              <bold>Bookkeeping and CFO analysis done for you</bold>
            </p>
            <h4>
              <span>$630</span> /mo
            </h4>
            <Button
              href="/book-a-call"
              variant="success"
              className="start-button"
            >
              Start free trial
            </Button>{" "}
          </div>
          <div className="services-card-b">
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>Account set up in QBO</p>
            </div>
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>
                Monthly recording, classifying and reconciling of up to 4
                bank/credit card accounts
              </p>
            </div>
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>Up to 250 transactions</p>
            </div>
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>
                3 monthly financial reports (explained in layman's terms for
                clarity)
              </p>
            </div>
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>Unlimited email support</p>
            </div>
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>Monthly video analysis of your financial reports</p>
            </div>
          </div>
        </div>
        <div className="services-card">
          <div className="services-card-a">
            <h4>PREMIUM</h4>
            <p>Hire Us, Worry Less And Thrive More!</p>
            <h4>
              <span>$1050</span> /mo
            </h4>
            <Button
              href="/book-a-call"
              variant="success"
              className="start-button"
            >
              Start free trial
            </Button>{" "}
          </div>
          <div className="services-card-b">
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>Account set up in QBO</p>
            </div>
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>
                Monthly recording, classifying and reconciling of up to 6
                bank/credit card accounts
              </p>
            </div>
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>Up to 500 transactions</p>
            </div>
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>
                3 monthly financial reports (explained in layman's terms for
                clarity)
              </p>
            </div>
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>Unlimited email support</p>
            </div>
            <div className="services-card-box">
              <img alt="check" src={Checkbox} />
              <p>Monthly video analysis of your financial reports</p>
            </div>
          </div>
        </div>
      </div>
      <div className="services-cards-small">
        <div className="services-card-small reveal">
          <h5>Clean up services</h5>
          <p className="services-card-small-paragraph">
            Clean up process is when your previous bookkeeper or you were trying
            to run the bookkeeping, and made a mess. We are here to fix it.
          </p>
          <p>Book a call for custom pricing and packages</p>
          <Button href="/book-a-call" variant="success" className="book-button">
            Book
          </Button>{" "}
        </div>
        <div className="services-card-small reveal">
          <h5>Catch up services</h5>
          <p className="services-card-small-paragraph">
            When you came to us in July (example) and you didn't do bookkeeping
            till July, we need to "catch up" with the bookkeeping you left
            behind. It's extra work that will give your a clear picture of your
            business finance.
          </p>
          <p>Book a call for custom pricing and packages</p>
          <Button href="/book-a-call" variant="success" className="book-button">
            Book
          </Button>{" "}
        </div>
      </div>
      <h3 className="services-partner-header reveal">
        We partner with the world's best
      </h3>
      <div className="services-second reveal">
        <img alt="services" src={BigCommerce} />
        <img alt="services" src={Stripe} />
        <img alt="services" src={Freshbooks} />
        <img alt="services" src={Shopify1} />
        <img alt="services" src={Gusto1} />
        <img alt="services" src={Square} />
      </div>
    </div>
  );
}
