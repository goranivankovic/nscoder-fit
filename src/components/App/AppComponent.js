import React from 'react'
import appStyles from '../../Styles/App.module.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'

function AppComponent() {
  return (
    <div className={appStyles.main} id="app">


      <div className={appStyles.firstDiv_headline}
       data-aos="fade-up"
       data-aos-delay="250"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out"
       data-aos-mirror="true"
       data-aos-once="true"
      >
      Get all in<span style={{color:"#ff3333"}}>for</span> mation and get 7 d<span style={{color:"#ff3333"}}>ay </span>s free

      </div>

      <div className={appStyles.secondDiv}> 


      <div className={appStyles.secondDiv_left_div}
       data-aos="fade-up"
       data-aos-delay="750"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out"
       data-aos-mirror="true"
       data-aos-once="true"
      >

        <div className={appStyles.secondDiv_left_div_items}>
       <AiOutlineCheckCircle  className={appStyles.check}/>   
        Train-a-long with us every workout

        </div>

        <div className={appStyles.secondDiv_left_div_items}>
       <AiOutlineCheckCircle  className={appStyles.check}/>    
       Choose from 100s of Vegan or Veggie

        </div>

        <div className={appStyles.secondDiv_left_div_items}>
       <AiOutlineCheckCircle  className={appStyles.check}/>   
       Stay on track with in planning tools

        </div>

        <div className={appStyles.secondDiv_left_div_items}>
       <AiOutlineCheckCircle  className={appStyles.check}/>    
       Unlock unlimited new cycles of content

        </div>

        <div className={appStyles.secondDiv_left_div_items}>
       <AiOutlineCheckCircle  className={appStyles.check}/>    
       Join the exclusive theBody  group 

        </div>

        <div className={appStyles.secondDiv_left_div_items}>
       <AiOutlineCheckCircle  className={appStyles.check}/>    
       Get full access for 7 days absolutely free

        </div>


      </div>


      <div className={appStyles.secondDiv_right_div}
       data-aos="fade-up"
       data-aos-delay="1250"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out"
       data-aos-mirror="true"
       data-aos-once="true"
      >

        <button className={appStyles.secondDiv_right_div_button}>
          <div>Monthly</div>
          <div>15 $ per moth</div>

        </button>


        <button className={appStyles.secondDiv_right_div_button}>
        <div>3 Months</div>
        <div>36 $ total</div>

        </button>


        <button className={appStyles.secondDiv_right_div_button}>
        <div>6 Months</div>
        <div>60 $ total</div>

        </button>

        </div>



      </div>


      <div className={appStyles.thredDiv}>

        <div className={appStyles.thredDiv_headline}> Don't have a mobile or tablet? </div>
        <div>We're working hard to bring theBody Coach to everyone,<br ></br> in the meantime you can get our original 90 Day Plan here </div>
     
      </div>


    </div>
  )
}

export default AppComponent;