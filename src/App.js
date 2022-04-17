import './App.css';
import {useEffect,useState} from 'react'
import NavBar from './components/AppBar/NavBar';
import { Routes, Route } from "react-router-dom";
import AddContactForm from './components/Webform/AddContactForm';
import Home from './components/home/Home';

import axios from 'axios';
import LoaderSpinner from './components/features/LoaderSpinner';


const PAGE_NUMBER = 1;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
 

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      console.log("Adding more data to the view")
      setIsLoading(true);
      setPage(page + 1);
    }
  };

  //loading data using axios api
  useEffect(() => {
    const url = "https://randomuser.me/api/?results=10";
    const getItems = async () => {
      const result = await axios(url);
      setData((oldData) => [...oldData, ...result.data.results]);
     
      setIsLoading(false);
      
      
    }; 
    window.addEventListener("scroll", handleScroll);
    getItems();
   
  }, [page]);


  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element= {isLoading ? <LoaderSpinner/> :<Home data={data}/>} />
        <Route path="/addContact" element={<AddContactForm/>} />
    </Routes>
   
 

      </>

  
  );
}

export default App;
