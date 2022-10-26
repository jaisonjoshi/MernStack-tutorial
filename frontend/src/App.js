import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Packagespage from './pages/Packagespage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/packages' element={<Packagespage />} />
        </Routes>
        </div>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
