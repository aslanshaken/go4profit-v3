import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
