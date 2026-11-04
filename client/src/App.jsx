import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Treatments from './pages/Treatments'
import BookAppointment from './pages/BookAppointment'
import TreatmentDetail from './pages/TreatmentDetail'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/treatments' element={<Treatments />} />
      <Route path='/treatments/:slug' element={<TreatmentDetail />} />
      <Route path='/book-appointment' element={<BookAppointment />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App