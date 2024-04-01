import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Landingpage from './Pages/Landingpage';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/AboutUs' element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
