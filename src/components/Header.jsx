import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link"



const Header = () => {

  
  return (
   <>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <HashLink  className="navbar-brand js-scroll-trigger" to="/#home">The Indian Think Tank</HashLink>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    <li className="nav-item"  >
          
          <HashLink  className="nav-link active  "  data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" to="/#home">Home</HashLink>
        </li>
        <li className="nav-item" >
         
          <Link  className="nav-link" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"  to="/articles">Articles</Link>
        </li>
        <li className="nav-item" >
        <HashLink  className="nav-link " data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"  to="/#about">About</HashLink>
        </li>
        <li className="nav-item" >
        <HashLink className="nav-link " data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"  to="/#brands">Super Powers</HashLink>
        </li>
        <li className="nav-item" >
        <Link  className="nav-link " data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"  to="/contact">Contact</Link>
        </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit"  data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"       >Search</button>
    </form>
  </div>
</nav>







{/* 
<nav className="navbar  navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <HashLink  className="navbar-brand js-scroll-trigger" to="/#home">The Indian Think Tank</HashLink>
    <div className="collapse navbar-collapse main" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"  >
          
          <HashLink  className="nav-link active js-scroll-trigger " to="/#home">Home</HashLink>
        </li>
        <li className="nav-item" >
         
          <Link  className="nav-link js-scroll-trigger" to="/articles">Articles</Link>
        </li>
        <li className="nav-item" >
        <HashLink  className="nav-link js-scroll-trigger" to="/#about">About</HashLink>
        </li>
        <li className="nav-item" >
        <HashLink className="nav-link js-scroll-trigger" to="/#brands">Super Powers</HashLink>
        </li>
        <li className="nav-item" >
        <Link  className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}

{/* 
<nav className='navbar-expand-lg'>
<div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
   
<h1>The Indian Think Tank</h1>
<main>
  <HashLink to="/#home">Home</HashLink>
  <Link to="/articles">Articles</Link>
  
  <HashLink to="/#about">About</HashLink>
  <HashLink to="/#brands">Super Powers</HashLink>
  <Link to="/contact">Contact</Link>
  
</main>
</div>
</div>
</nav>
    */}
   </>
  );
}

export default Header