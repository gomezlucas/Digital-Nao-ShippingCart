import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 
  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
 
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
       />
    </div>
  );
}

export default App;
