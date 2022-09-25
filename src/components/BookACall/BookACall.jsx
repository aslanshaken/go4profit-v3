import './BookACall.css';

export default function BookACall() {
  return(
    <div className='book-call-container'>
      <h1>Book a free call today</h1>
      <iframe
          id="calendly"
          src="https://calendly.com/ainurbookkeeper/30min"
          width="100%"
          height="100%"
          frameborder="0"
          title='book'
      ></iframe>
    </div>
  )
}