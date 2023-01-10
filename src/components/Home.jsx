import React from 'react'
import vg from "../assets/c1.png"
import india_logo  from "../assets/india_logo.jfif";
import russia_logo from "../assets/russia_logo.png";
import usa_logo from "../assets/usa_logo.png";
import china_logo from "../assets/chinalogo.png";

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
       
        <main>
            <h1>The Indian Think Tank</h1>
            <p>What India Think's</p>
        </main>
    </div>

    <div className="home2" >
        <img src={vg} alt="Graphics" />
        <div>
            <p>
            “There is some self interest behind every friendship. There is no friendship without self interests. This is a bitter Truth”
            </p>
        </div>
    </div>
    <div className="home3" id='about' >
        <div>
            <h1>What is our goal?</h1>
            <p> 
            Our goal is to build a nation, in which everyone can understand the geopolitics going in today's world. 
                Everyone will be able to monitor the foreign policies led by government, If even 10% of the population achieve this goal 
                Then it will benefit the government to run proper policies in favour of people of India. If government, foreign policies
                are monitored and supported by people, then no country can stop us .
            </p>            
        </div>
    </div>

    <div className="home4" id='brands'>
        <div className='homediv'>
            <h1>Super Powers</h1>

            <article>
                <div style={{
                    animationDelay:"0.3s"
                }}>
                    <Indialogo/>
                    <p>India</p>


                </div>
                <div style={{
                    animationDelay:"0.5s"
                }}>
                    <Russialogo/>
                    <p>Russia</p>


                </div>
                <div style={{
                    animationDelay:"0.7s"
                }}>
                    <Usalogo/>
                    <p>USA</p>


                </div>
                <div style={{
                    animationDelay:"1s"
                }}>
                    <Chinalogo/>
                    <p>China</p>


                </div>
            </article>
        </div>
    </div>

    </>
  )
}

export default Home


const Indialogo = () =>{
    return (
        <>
        <img src={india_logo} alt="" style={{ width : 100 , borderRadius : 50 }} />
    </>

    );
    
}



const Russialogo = () =>{
    return (
        <>
        <img src={russia_logo} alt="" style={{ width : 100 , borderRadius : 50 }} />
    </>

    );
    
}
const Usalogo = () =>{
    return (
        <>
        <img src={usa_logo} alt="" style={{ width : 100 , borderRadius : 50 }} />
    </>

    );
    
}

const Chinalogo = () =>{
    return (
        <>
        <img src={china_logo} alt="" style={{ width : 100 , borderRadius : 50 }} />
    </>

    );
    
}


