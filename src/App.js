import { Routes, Route } from "react-router-dom"

import React , { useState ,useEffect } from 'react';
import Axios from 'axios'; 

import Header from './common/Header';
import LeftBar from './common/Leftbar';
import Footer from './common/Footer';

import LoginForm from './pages/LoginForm';
import Home from './pages/Home';

import AddCustomer from './pages/customer/AddCustomer';
import SearchCustomer from './pages/customer/SearchCustomer';

import Settings from './pages/Settings';
import Preferences from './pages/Preferences';
import Profile from './pages/Profile';

import NewTask from './pages/task/NewTask';
import SearchTask from './pages/task/SearchTask'
import SampleTask from './pages/task/SampleTask';
import ListTask from './pages/task/ListTask';

import Sample from './pages/Sample';

function App() {
    const [user, setUser] = useState({});
    const [token, setToken] = useState("");
    
    useEffect(() => { 
       //console.log("App called");
    });
    
    const logout = () => {
      //console.log("Logout");
      setUser(null);
      setToken(null);
    }

    const handleLoginsuccess =(token, user) =>
    {
        //console.log("token: "+ token+ " ; user: "+user);
        setToken(token);
        setUser(user);
    }

  if(!user){
    return (
      <div id="layoutDrawer">
        <LoginForm handleLoginsuccess={handleLoginsuccess} />
      </div>
      );
  }
	
  return (

    <div id="layoutDrawer">
              
        <Header user={user} onLogout={logout} />

        <LeftBar user={user}/>

        <div id="layoutDrawer_content">
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="home" element={ <Home/> } />
            <Route path="tasks">
              <Route path="new" element={<NewTask />} />
              <Route path="search" element={<SearchTask />} />
              <Route path="sample" element={<SampleTask />} />
              <Route path="list" element={<ListTask />} />
            </Route>
            <Route path="customers">
              <Route path="new" element={<AddCustomer />} />
              <Route path="search" element={<SearchCustomer />} />
            </Route>
            <Route path="preferences" element={ <Preferences/> } />
            <Route path="settings" element={ <Settings/> } />
            <Route path="sample" element={ <Sample/> } />
          </Routes>

          <Footer/>  
        </div>
        
    </div>
  );

}

export default App;
