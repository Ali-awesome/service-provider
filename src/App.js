import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Nav from './Pages/Shared/Nav/Nav';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='blogs' element={<Blog></Blog>}> Blogs</Route>
        <Route path='about' element={<AboutUs></AboutUs>}>About Us</Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
