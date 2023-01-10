import React from 'react'
import { useEffect , useState } from 'react';
import {useParams} from 'react-router-dom';


const URL2 ='https://nice-cyan-fly-gear.cyclic.app/article';



const Article = () => {

  const params = useParams();
  
  const URL = URL2 + params.id ;
 
  
  const [article,setArticle] = useState([]);

  
  useEffect(() => {

    const fetchData = () => {
      return fetch(URL)
            .then((response) => response.json())
            .then((data) => 
            setArticle(data)
            );
    }
  


    fetchData();
  },[])

  return (
    <>
    <div className="blog">
    <h1 className="blog__title">{article.title}</h1>
    <p className="blog__description">{article.dis}</p>
    <img className="blog__image" src={article.imgs} alt={article.title} />
    <p className="blog__article"> <span className='location' >New Delhi : </span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate tempora, minima alias expedita maxime inventore modi, corrupti laborum error natus quae voluptatem illum ipsam? Minus tenetur quia nostrum, earum, iusto iure exercitationem perspiciatis nihil, commodi consequuntur repudiandae. Reprehenderit at placeat quo adipisci facilis animi, alias nihil consectetur corrupti est, consequuntur iure, mollitia repellendus sit nostrum et eum esse explicabo fuga. Sapiente maxime vel reprehenderit voluptas, quidem error iusto eius a eveniet harum at dolorem deleniti corrupti aliquam delectus ipsam facilis saepe quod necessitatibus quis itaque quas commodi. Ex dolore non adipisci cumque? Unde odio dolores voluptate id, deleniti vero eaque omnis. Officia eveniet ab, labore sint assumenda ad expedita rem vitae harum, fugiat obcaecati quod tenetur culpa eligendi. Quam sapiente consequuntur beatae soluta repellat. Aliquid amet pariatur libero, exercitationem ullam fugit deserunt, explicabo ratione quo corrupti rem cupiditate maxime porro natus quos sit. Minima voluptate sequi, nesciunt illum accusamus nisi est harum repellendus molestiae recusandae voluptatibus suscipit nostrum quod reiciendis quisquam consectetur culpa illo optio rem enim eaque. Nihil nam amet qui aliquam, voluptate magnam, dolorem obcaecati ut commodi aut quas nesciunt dignissimos ducimus, est labore architecto quam repudiandae sint enim. Alias dolores, nam facere impedit modi ipsa! Officia, omnis enim quas molestiae amet et. Incidunt, voluptatem doloribus optio obcaecati nesciunt pariatur nihil cumque ducimus. Nobis rerum recusandae facere doloremque totam reiciendis delectus impedit dolor cumque velit praesentium quod corrupti possimus ut dolorem, eveniet quasi odit. Blanditiis sint totam quod praesentium. Asperiores reiciendis voluptatibus dicta, tenetur sed vitae delectus. Ipsa ullam assumenda eligendi error sunt molestiae aliquam corporis natus eum. Necessitatibus ipsa esse quasi ipsam consectetur illum nobis cum, libero quidem optio temporibus placeat id? Commodi nisi deserunt debitis earum asperiores nihil, hic numquam, quae non exercitationem vero neque alias! Nam voluptas dolorum suscipit debitis ipsum nesciunt id! Temporibus dicta quidem placeat, excepturi ad sunt adipisci ipsum expedita blanditiis tenetur earum? Esse aut quasi temporibus accusamus tempore vel blanditiis consectetur tenetur error odit illo, quos ut perspiciatis eveniet unde pariatur officiis dolores doloribus accusantium cum libero ipsam! Eum dicta libero ut quisquam. Eligendi molestiae a cupiditate, voluptates temporibus dignissimos tempora velit doloremque culpa, possimus omnis veritatis magnam cumque praesentium ad et dolorem tenetur quaerat itaque officiis expedita eaque totam fuga quos! Velit ipsum aspernatur exercitationem nobis doloremque esse iusto aut veritatis, commodi atque omnis dolorem tempore ea ipsam dolores possimus. At earum unde odio praesentium autem aliquid fuga, minima assumenda, quisquam ratione nesciunt vero, cupiditate voluptatibus aut ab. Vitae natus officia qui ullam, eius provident corporis dolor porro eum repudiandae laboriosam quos quisquam consequuntur quo, a voluptates at quis dolorem ratione? A voluptas amet odio eum doloremque iste accusamus tempora ea fuga sed dignissimos cum, laboriosam inventore, at aperiam, natus itaque possimus cupiditate est aut accusantium recusandae repellendus dolorum id! Expedita placeat voluptatum repellat sint iusto mollitia, obcaecati id quibusdam illo culpa magni error quis natus exercitationem nesciunt deserunt dolores atque similique, a, voluptatibus sapiente? Veniam nisi deserunt commodi quibusdam eos, eaque itaque odit, fugit magni obcaecati delectus tempore maxime nam ullam sit reiciendis animi tenetur, fugiat ipsa modi corrupti. Iste magni fugiat ullam deleniti assumenda hic tempora esse libero, aliquam voluptas. At neque sapiente praesentium ex consequatur commodi obcaecati odit eum a fugiat! Quos dolores vel ipsam accusantium aperiam totam itaque saepe. </p>
  </div>
    
    </>
  )
}

export default Article