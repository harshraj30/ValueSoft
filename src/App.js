import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Landingpage from './Pages/Landingpage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Landingpage />} />
      </Routes>
    </div>
  );
}

export default App;
