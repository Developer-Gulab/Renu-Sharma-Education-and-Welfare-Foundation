import { Route,Routes } from 'react-router-dom'
import './App.css'
import Gallery from './Pages/Gallery/Gallery'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import ContactUs from './Pages/ContactUs/ContactUs'
import AboutUs from './Pages/AboutUs/AboutUs'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import Internship from './Pages/Internship/Internship'
function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/internship' element={<Internship/>}/>
    </Routes>
      
    </>
  )
}

export default App
