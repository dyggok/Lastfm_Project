import { useState } from "react";
import { Container } from "react-bootstrap";
import { Row, div } from "react-bootstrap";
function Navbar(props){
  
  const {theme, setThemeName} = props;
  
  return(
    <>
    <div className="row navbar" style={{width: "100%"}}>
      <div className="col">
      <img src="https://freeiconshop.com/wp-content/uploads/edd/lastfm-flat.png" alt="navbaricon" width="50" className="mx-5 mt-1 d-flex justify-content-start"/>
      </div>
      <div className="col-md-8">
      <a className={`${theme.color} text-decoration-none display-6`} href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Lastfm_logo.svg/709px-Lastfm_logo.svg.png?20120823044637" width="120" alt="" /></a>
      </div>
      <div className="col p-0">
        <div className="mt-1">
        <input type="checkbox" className={`btn-check ${theme.button} `} id="btn-check-outlined" onChange={(e) => 
        setThemeName(prev => prev === 'light' ? 'dark' : 'light')} checked={theme.backgroundColor == 'bg-dark' ? true : false}/>
        <label className={`btn ${theme.button}`} style={{boxShadow: "none"}} htmlFor="btn-check-outlined">{theme.backgroundColor == 'bg-dark' ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
      <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
    </svg>}</label>
    </div>
      </div>
    </div>
    <hr className="m-1"/>
    </>
  )
}

export default Navbar;
