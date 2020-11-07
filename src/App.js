import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import MainNav from "./Components/MainNav/MainNav";
import Profile from "./Components/DifferrentContent/Profile/Profile";
import AdditNav from "./Components/AdditNav/AdditNav";


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="main_content">
                <MainNav/>
                <Profile/>
                <AdditNav/>
            </div>

        </div>
    );
}

export default App;
