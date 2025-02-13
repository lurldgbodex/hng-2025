import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import TicketSelection from "./components/TicketSelection/TicketSelection"

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TicketSelection />} />
        {/* <Route path='/form' element={<AttendeeForm />} /> */}
        {/* <Route path="/ticket" element={<TicketPreview} /> /> */}
      </Routes>
    </Router>
  )
}

export default App
