import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/index.jsx'
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
     <Router>
      <Navbar/>
       <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='products' exact element={<Products/>} /> 
        <Route path='contact' exact element={<Contact/>} />        
      </Routes>
      </Router>
    
  );
}

export default App;
