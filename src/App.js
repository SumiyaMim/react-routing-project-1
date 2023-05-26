import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        {/* route parameter */}
        <Route path='/blogs/:title' element={<Blog/>}/>  
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>

        {/* route parameter - example: http://localhost:3000/user/101 */}
        {/* <Route path='/user/:userid' element={<User/>}/> */}

        {/* query parameter - example: http://localhost:3000/user?id=101 or http://localhost:3000/user/?id=101 */}
        <Route path='/user' element={<User/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
