import "./Home.css";
import Button from "react-bootstrap/Button";
import AccountIcon from "../../assets/icons8-accountant-64.png";
import GlobalIcon from "../../assets/icons8-global-64.png";
import LanguageIcon from "../../assets/icons8-language-50.png";
import GrowIcon from "../../assets/icons8-financial-dynamic-presentation-64.png";
import Talk from "../../assets/talk.png";
import Money from "../../assets/grow-money.png";
import Team from "../../assets/team.png";
import WhyUs from "../WhyUs/WhyUs";
import Accordion from "react-bootstrap/Accordion";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-first">
        <div className="home-first-a">
          <h1 className="home-header">
            We help Business Owners to understand their <span>Finance</span>{" "}
          </h1>
          <h5 className="home-title">Minimize bookkeeping, maximize profit</h5>
          <div className="home-bullet-points">
            <img alt="rd-img" src={AccountIcon} />
            <h5>Dedicated accountant for your business </h5>
          </div>
          <div className="home-bullet-points">
            <img alt="rd-img" src={GlobalIcon} />
            <h5>Provides services both in the USA and Globally </h5>
          </div>
          <div className="home-bullet-points">
            <img alt="rd-img" src={LanguageIcon} />
            <h5>For Russian and English Speaking Business Owners</h5>
          </div>
          <div className="home-bullet-points">
            <img alt="rd-img" src={GrowIcon} />
            <h5>CFO services for better financial strategy</h5>
          </div>
          <Button
            href="/book-a-call"
            variant="success"
            className="quote-button-home"
          >
            Start for Free
          </Button>{" "}
        </div>
        <div className="home-first-b">
          {/* <img className='main-image' alt='rd-img' src={MainPic} /> */}
          <div className="main-video">
            <iframe
              loading="lazy"
              src="https://www.youtube.com/embed/Yr1IJaJK_ow?controls=0&rel=0&modestbranding=1&showinfo=0&fs=0"
              frameBorder={0}
              width={'100%'}
              height={'100%'}
            ></iframe>
          </div>
        </div>
      </div>
      <div className="home-second">
        <h4 className="vs-header reveal">
          Go4Profit <span className="vs">vs</span> Traditional Accounting Firm
        </h4>
        <table className="text-center home-second-table reveal">
          <thead>
            <tr>
              <td className="go-four">
                <h5>Go4Profit</h5>
              </td>
              <td>
                <h5>Traditional Accounting Firm</h5>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="go-four">Transparent Billing</td>
              <td>Indefinite hourly charges</td>
            </tr>
            <tr>
              <td className="go-four">Personalized Service</td>
              <td>General Service</td>
            </tr>
            <tr>
              <td className="go-four">Experts from different industries</td>
              <td>General knowledge</td>
            </tr>
            <tr>
              <td className="go-four">Specialized Team</td>
              <td>One Person</td>
            </tr>
            <tr>
              <td className="go-four">
                Financial analysis with interpretation
              </td>
              <td>Incomprehensible reports with just numbers</td>
            </tr>
            <tr>
              <td className="go-four">Online meetings</td>
              <td>Emails and printouts</td>
            </tr>
            <tr>
              <td className="go-four">Growth advices</td>
              <td>Just data entering </td>
            </tr>
            <tr>
              <td className="go-four">Fanatical Support</td>
              <td>Customer Service</td>
            </tr>
          </tbody>
        </table>
      </div>
      <WhyUs />
      <h4 className="home-third-header reveal">
        What Sets Go<span>4</span>Profit Apart?
      </h4>
      <div className="home-third reveal">
        <div>
          <img alt="rd-img" src={Talk} />
          <p className="home-third-title">No to language barriers</p>
          <p>
            One of our missions is to streamline business operations by
            facilitating through language barriers among businesses. We cater to
            the needs of Russian-speaking and English-speaking business
            communities.
          </p>
        </div>
        <div>
          <img alt="rd-img" src={Money} />
          <p className="home-third-title">Our dutes - your money</p>
          <p>
            Ever changing legislation and regulations demand an accountant who
            is both informed and vigilant. Our business accountants work with
            the clients to make sure their bookkeeping and other financial needs
            are met on time.
          </p>
        </div>
        <div>
          <img alt="rd-img" src={Team} />
          <p className="home-third-title">Information first</p>
          <p>
            Go4Profit is your go-to company for better finances and flawless
            books. We aim at making our English and especially Russian-speaking
            clients well-informed on the strong and weak points of their
            businesses in the same package.
          </p>
        </div>
      </div>
      <Button
        href="/book-a-call"
        variant="success"
        className="home-contact-button"
      >
        Contact now
      </Button>{" "}
      <div className="services-third">
        <div className="services-third-a reveal">
          <h3>Frequently Asked Questions</h3>
          <p>More FAQs</p>
        </div>
        <Accordion className="reveal">
          <Accordion.Item className="services-third-item" eventKey="0">
            <Accordion.Header>
              What's difference between bookkeeping and accounting?
            </Accordion.Header>
            <Accordion.Body>
              Bookkeeping and accounting serve separate and distinc functions in
              the running of a business. Bookkeeping is the function of
              documenting and maintaining records of transactions. Accounting is
              the act of actually analyzing and interpreting the documentation
              and turning into meaningful data.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="services-third-item" eventKey="1">
            <Accordion.Header>Do we have to meet in person?</Accordion.Header>
            <Accordion.Body>
              It would be a pleasure to have a face-to-face meeting with you,
              but please know that our process is entirely online, which we have
              designed to ensure the utmost security and to uphold the integrity
              of our brand. You can trust that our clients are always a top
              priority, and we offer 24/7 support and are always available for
              meetings.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="services-third-item" eventKey="2">
            <Accordion.Header>
              If I don't see my option in your three packages, what do I do?
            </Accordion.Header>
            <Accordion.Body>
              If you don't see your option it doesn't mean that your business
              doesn't fit us. We always provide a Free Consultation where we do
              a Diagnostic review of your bookkeeping. Make a call and let us
              help you!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="services-third-item" eventKey="3">
            <Accordion.Header>What can I expect on my call?</Accordion.Header>
            <Accordion.Body>
              We'll call you at the time you select. Your bookkeeping expert
              will ask you a few questions about your business and your needs
              and make a recommendation on what service will work best for you.
              The whole call should only take 15-30 minutes.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="services-third-item" eventKey="4">
            <Accordion.Header>
              Will I be working with a local bookkeeper?
            </Accordion.Header>
            <Accordion.Body>
              You might! We have accounting teams in every industry and every
              region. If you opt for our dedicated bookkeeping service, you'll
              be matched with a bookkeeper with experience in your industry and
              knowledge about the area where you operate.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="services-third-item" eventKey="5">
            <Accordion.Header>
              Can you help me if I'm behind on my books?
            </Accordion.Header>
            <Accordion.Body>
              We can! We offer catch-up bookkeeping as a service. No matter how
              far behind you are - even if you're years behind - we can get you
              caught up quickly.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="services-third-item" eventKey="6">
            <Accordion.Header>
              Do small businesses need a bookkeeper
            </Accordion.Header>
            <Accordion.Body>
              Small businesses do not require a bookkeeper, but we recommend
              using one to avoid penalties and increased scrutiny from the IRS.
              When you work with 1-800Accountant, your books will be organized
              with accuracy guaranteed, giving you the freedom to focus on
              growing your business.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
