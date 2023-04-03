import React,{useEffect, useState,useRef} from 'react'
import aboutStyles from '../../Styles/About.module.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'


import women from '../../img/girl2.png'







function About() {

let[year,setYear]=useState(0)
let[mem,setMem]=useState(0)
let[couch,setCouch]=useState(0)



  useEffect(() => {


     window.addEventListener('scroll',setNum)
   
  
    return () => {
      
    }
  }, [])


  
  function setNum(){

    
        if (window.scrollY >= window.innerHeight/2) {

              window.removeEventListener('scroll',setNum)

            const f1Fun= setInterval(() => {
              setCouch(couch++)

                 if (couch >= 6) {
                  setCouch(6)  
                  clearInterval(f1Fun)
                  }

                }, 100);

            





                 const f2Fun= setInterval(() => {
              setMem(mem++)

                 if (mem >= 150) {
                  setMem(150)  
                  clearInterval(f2Fun)
                  }

                }, 10);


            const f4Fun= setInterval(() => {
              setYear(year++)

                 if (year >= 12) {
                  setYear(12)  
                  clearInterval(f4Fun)
                  }

                }, 100);

            
          

  

        }

  }
  
  
    




 
  return (
    <div className={aboutStyles.main} id="about">  

       

           <div className={aboutStyles.data4} >
       
               <div>
                 <span>{couch} </span>  <span>+coachs</span>
              </div>

                <div>
                  <span>{mem} </span>  <span>+members</span>
               
               </div>

                <div>
                  <span>2 </span>  <span>+locations</span>
              
               </div>

                <div>
                  <span>{year} </span>  <span>+years</span>
              
                </div>

          </div>
 

     
      <div className={aboutStyles.first_div}>


        <div className={aboutStyles.first_div_3items}>
          <div className={aboutStyles.first_div_3items_item1}><a href="#health">HEALTH</a></div> 
          <div><a href="#traning">TRANING & BENEFITS</a> </div>
          <div><a href="#app">PRICING</a> </div>

        </div>


      </div>


      <div className={aboutStyles.secondDiv}>

       <div className={aboutStyles.secondDiv_first_box}>

         <div className={aboutStyles.secondDiv_first_box_headline}>
         Excl<span style={{color:"#ff3333"}}>us</span>ive   LIVE  workouts every week

         </div>

         <div className={aboutStyles.secondDiv_first_box_main_text}>
         Whatever level of fitness you're at, tune in for weekly LIVE workouts .  Made exclusively for app users, all you have to do is press play and let take you through the rest.

         </div>


         <div className={aboutStyles.secondDiv_first_box2} >

            
                        

                        <div><AiOutlineCheckCircle style={{color:"#ff3333"}}/> <span>The best workouts</span>  </div>


                         <div><AiOutlineCheckCircle style={{color:"#ff3333"}}/> <span>Great locations </span>  </div>


                          <div><AiOutlineCheckCircle style={{color:"#ff3333"}}/> <span>The best coaches</span>  </div>

                           <div><AiOutlineCheckCircle style={{color:"#ff3333"}}/> <span>Modern equipment</span>  </div>

                  
                          <button>More about US</button>


         </div>


         



       </div>


       <img src={women} alt='women workout' className={aboutStyles.secondDiv_second_box} />

        </div>


   

      
        <div className={aboutStyles.empty}></div>




    </div>
  )
}

export default About