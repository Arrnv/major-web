import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from './components/Nav'
import Report from "./pages/Reportpage/Report";
import Predict from "./pages/Prediction/Predict"
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' exact Component={Predict}/>
        <Route path='/about' exact Component={Report}/>
      </Routes>
      
    </div>
  );
}

export default App;
