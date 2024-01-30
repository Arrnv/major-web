import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from './components/Nav'
import Report from "./pages/Report/Report";
import Predict from "./pages/Prediction/Predict"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Predict />}>
          <Route index element={<Predict/>} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
