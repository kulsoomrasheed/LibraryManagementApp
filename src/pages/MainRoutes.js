import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Notfound from './Notfound'
import Addbook from './Addbook'
import Private from './Private'
const MainRoutes = () => {
  return <Routes>
 <Route path='/' element={<Signup/>}/>
        <Route path='/books' element={<Private><Home/></Private>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/addbook' element={<Private><Addbook/></Private>}/>


        <Route path='*' element={<Notfound/>}/>  </Routes>
}

export default MainRoutes