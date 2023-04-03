import React from 'react'
import traningStyle from '../../Styles/Traning.module.css'
import man from '../../img/man.png'
import women2 from '../../img/women2.png'


function Traning() {
  return (
    <div className={traningStyle.main} id="traning">
   

        <div className={traningStyle.firstDiv}>


             <img className={traningStyle.firstDivBox1Img} src={women2} alt="women traning"
             data-aos="fade-up"
             data-aos-delay="800"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="true"
             /> 

             <div className={traningStyle.firstDivBox1}
              data-aos="fade-up"
             data-aos-delay="1200"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="true"
             >

                       <div>WHY CHOOSE US</div>
                         
                    <div className={traningStyle.firstDivBox1Headline}>
                     
                        WE ARE COMMITTED TO YOUR GOALS
                   </div>

                      <div className={traningStyle.firstDivBox1Text}>
                         Here at theBody gym, our focus is solely on you and your goals. Maximum commitment to each of our clients at every moment of your training.

                    </div>

                       <div className={traningStyle.firstDivBox1Text2}>
                        The squat is a basic exercise for the whole body! 
                         The stronger you are at the squat, the stronger, more stable, and more explosive you are in general.
                        You strengthen your back and core (stomach and lower back),
                         your legs, gluteus, tendons are stronger.
                        </div>
             </div>




           <img className={traningStyle.firstDivBox1Img} src={man} alt="man traning"
             data-aos="fade-up"
             data-aos-delay="1600"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="true"
             /> 
       


       


        </div>


    </div>
  )
}

export default Traning