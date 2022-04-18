import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout/Checkout';
import AboutUs from './Pages/AboutUs/AboutUs';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
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
        <Route path="/service/:serviceId" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='about' element={<AboutUs></AboutUs>}>About Us</Route>
        <Route path='login' element={<Login></Login>}>Login</Route>
        <Route path='register' element={<Register></Register>}>Login</Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
