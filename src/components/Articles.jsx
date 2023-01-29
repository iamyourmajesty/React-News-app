import React from 'react'
import axios from 'axios';
import { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';





// const URL =  'https://official-joke-api.appspot.com/jokes/ten';
// const URL2 ='https://nice-cyan-fly-gear.cyclic.app/articles/get';

const URL3 = 'https://theindianthinktankbackend.onrender.com/articles/get';




const Articles =  () => {


  const [articles,setArticles] = useState("");

  async function myfunction () {


    // Make a request for a user with a given ID
    const ressponse = await axios.get(URL3)
    .then(function (response) {
      // handle success
      // console.log(response);
      setArticles(response);
      
      // console.log(DATA);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    

  }
  
  

  useEffect(  ()  => {

    myfunction();
    
  });




  return (
    <>

    {
      articles && articles.data.map((article) =>(

        
        <div className="news-card" >
        <div className="news-card-image">
          <img src={article.file} alt={article.title} />
        </div>
        <div className="news-card-content">
          <h3 className="news-card-title">{article.title}</h3>
          <div className="news-card-meta">
            
            <p>{article.date}</p>
          </div>
          <p className="news-card-description">{article.dis}   <Link className='readmore' to={{
    pathname: `/article${article._id}`,
    
    }} >Read more...  </Link>   </p>
        </div>
      </div>
      
      
        ))
    } 




    
    </>
  )
}

export default Articles;
