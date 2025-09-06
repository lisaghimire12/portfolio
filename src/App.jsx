import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./Homepage"
import More from "./More"
import { useEffect, useState } from "react"


function App() {
const [theme, setTheme] = useState("dark");

useEffect(() => {
  document.body.className = theme;
},[theme]);

  return (
    <Router>
    <Routes>
    <Route path="/" element={<Homepage theme={theme} setTheme={setTheme} />}/>
    <Route path="/more" element={<More theme={theme} setTheme={setTheme} />}/>
   </Routes>
    </Router>
  )
}

export default App
