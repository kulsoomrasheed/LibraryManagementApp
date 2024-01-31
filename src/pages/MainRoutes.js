import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Notfound from './Notfound'
import Addbook from './Addbook'
const MainRoutes = () => {
  return <Routes>
 <Route path='/' element={<Signup/>}/>
        <Route path='/books' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Addbook' element={<Addbook/>}/>


        <Route path='*' element={<Notfound/>}/>  </Routes>
}

export default MainRoutes