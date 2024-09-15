import './App.css';

//components
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import AllUsers from './components/Allusers';
import Home from './components/Home';



//Router
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='All' element={<AllUsers/>} />
        <Route path='Add' element={<AddUser/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
