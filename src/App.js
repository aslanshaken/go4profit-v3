import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import JoinUs from './components/JoinUs/JoinUs';
import BookACall from './components/BookACall/BookACall';
import './App.css'

function App() {
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
