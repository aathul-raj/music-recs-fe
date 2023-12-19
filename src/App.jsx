import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Recs from "./views/recs";
import './App.css'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="recs" element={<Recs/>}/>
        </Routes>
      </Router>
  )
}

export default App
