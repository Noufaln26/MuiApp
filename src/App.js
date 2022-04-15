import './App.css';
import NavBar from './components/AppBar/NavBar';
import { Routes, Route } from "react-router-dom";
import AddContactForm from './components/Webform/AddContactForm';
import Home from './components/home/Home';
import BottomAddButton from './components/AppBar/BottomAddButton';


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/addContact" element={< AddContactForm/>} />
    </Routes>
    <BottomAddButton/>

      </>

  
  );
}

export default App;
