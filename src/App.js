import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import MainPage from './MainPage';
import ArtistDetail from './components/ArtistDetail';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

function App() {
  const themes = {
    light: {
      backgroundColor: "bg-light",
      color: "text-dark",
      button: "btn-outline-dark"
    },
    dark: {
      backgroundColor: "bg-dark",
      color: "text-light",
      button: "btn-outline-light"
    }
  }
  const [themeName, setThemeName] = useState("light");

  useEffect(() => {
    const localThemeName = localStorage.getItem("themeName") ? localStorage.getItem("themeName") : localStorage.setItem("themeName", themeName);
    setThemeName(localThemeName);
    const theme = themeName === "light" ? themes.light : themes.dark;
    document.body.classList.add(theme.backgroundColor, theme.color);
  }, []);

  useEffect(() => {
    localStorage.setItem("themeName", themeName)
    const theme = themeName === "light" ? themes.light : themes.dark;
    document.body.className = "";
    document.body.classList.add(theme.backgroundColor, theme.color);
  }, [themeName]);

  return (
    <div className='App'>
          <Navbar theme={themeName == "light" ? themes.light : themes.dark} setThemeName={setThemeName}/>
      <Routes>
        <Route path='/' element={<MainPage theme={themeName == "light" ? themes.light : themes.dark} setThemeName={setThemeName}/>}/>
        <Route path='/artists/:artistName' element={<ArtistDetail theme={themeName == "light" ? themes.light : themes.dark} setThemeName={setThemeName}/>}/>
      </Routes>
    </div>  
  );
}

export default App;
