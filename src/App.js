import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import WhyUs from './components/WhyUs/WhyUs';
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/why-us' element={<WhyUs/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </Layout>
  );
}

export default App;
