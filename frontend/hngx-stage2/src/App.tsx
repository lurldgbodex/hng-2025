import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import TicketSelection from "./components/TicketSelection/TicketSelection"
import AttendeeDetails from "./components/AttendeeDetails/AttendeeDetails"
import TicketReady from "./components/TicketReady/TicketReady"

function App() {

  return (
    <div className="scaffold">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TicketSelection />} />
        <Route path='/form' element={<AttendeeDetails />} />
        <Route path="/ticket" element={<TicketReady /> } />
      </Routes>
    </Router>
    </div>
  )
}

export default App
