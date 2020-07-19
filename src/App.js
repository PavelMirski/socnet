import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profiles from './components/Profiles';




const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profiles />

        </div> );

}

export default App;
