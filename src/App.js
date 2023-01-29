import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Home,Login,Register,Cart,Forgotpass} from './pages/index'
import {Header,Footer} from './components/index'

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/cart' element ={<Cart/>} />
    <Route path='/forgot' element ={<Forgotpass/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
