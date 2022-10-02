import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import JoinUs from './components/JoinUs/JoinUs';
import BookACall from './components/BookACall/BookACall';
import './App.css'

function App() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  // To check the scroll position on page load
  reveal();
  return (
    <Layout>
      <Routes>
        <Route path='/join-us' element={<JoinUs/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/book-a-call' element={<BookACall/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </Layout>
  );
}

export default App;
