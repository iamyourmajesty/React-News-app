import React from 'react'
import { useEffect , useState } from 'react';
import {useParams} from 'react-router-dom';


const URL2 ='https://theindianthinktankbackend.onrender.com/article';



const Article = () => {

  const params = useParams();
  
  const URL = URL2 + params.id ;
 
  
  const [article,setArticle] = useState([]);

  
  useEffect(() => {

    const fetchData = () => {
      return fetch(URL , {timeout : 600})
            .then((response) => response.json())
            .then((data) => 
            setArticle(data)
            );
    }
  


    fetchData();
  },[])

  return (
    <>
    <div className="blog"    >
    <h1 className="blog__title">{article.title}</h1>
    <p className="blog__description">{article.dis}</p>
    <img className="blog__image" src={article.file} alt={article.title} />
    <p className="blog__article"> <span className='location' >New Delhi : </span> {article.p1} 
    </p>
    <br />
    <p className='blog__article'> {article.p2}</p>
    <br />
    <p className='blog__article'> {article.p3}</p>
    <br /> <br />

    <p className='blog__article'> {article.p4}</p>

    <pre className='blog__article'> {article.c1 }</pre> <br />
    <pre className='blog__article'> {article.c2 }</pre> <br />
    <pre className='blog__article'> {article.c3 }</pre> <br />
    <pre className='blog__article'> {article.c4 }</pre> <br />
    <pre className='blog__article'> {article.c5 }</pre> <br />
    <pre className='blog__article'> {article.c6 }</pre> <br />
    <pre className='blog__article'> {article.c7 }</pre> <br />
    <pre className='blog__article'> {article.c8 }</pre> <br />
    <pre className='blog__article'> {article.c9 }</pre> <br />
    <pre className='blog__article'> {article.c10 }</pre> <br />
    </div>
    
    </>
  )
}

export default Article