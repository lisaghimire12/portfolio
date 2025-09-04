import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./Homepage"
import More from "./More"


function App() {


  return (
    <Router>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/more" element={<More/>}/>
   </Routes>
    </Router>
  )
}

export default App
