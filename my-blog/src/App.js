import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import MyBlog from './pages/my_blog/MyBlog';
import BlogDetails from './innerPages/BlogDetails';
import Header from './components/header/Header';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { useSelector } from 'react-redux'; 

const App = () => {
  const blogs = useSelector(state=> state.blogs);
  return (
    <> 
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/myBlog' element={<MyBlog blogs={blogs} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/blogDetails/:id' element={<BlogDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;