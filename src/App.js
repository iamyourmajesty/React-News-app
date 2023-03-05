import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home";
import Footer from './components/Footer';
import Contact from './components/Contact';
import Articles from './components/Articles';
import Article from './components/Article';

// importing styles
import './styles/App.scss';
import './styles/Header.scss'
import './styles/Home.scss'
import './styles/Footer.scss'
import './styles/Contact.scss'
import './styles/Articles.scss'
import './styles/Article.scss'
import './styles/loading.scss'


const App = () => {


  return (    
     <HashRouter   >
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/>  }/>
        <Route path='/contact' element={ <Contact/>  }/>
        <Route path='/articles' element={ <Articles/>  }/>
        <Route path='/article:id' element={ <Article/>  }/>
      </Routes>
      <Footer/>
     </HashRouter>  
   
  )
}

export default App