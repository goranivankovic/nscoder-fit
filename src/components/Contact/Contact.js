import React from 'react'
import contactStyle from '../../Styles/Contact.module.css'
import contactWomen from '../../img/girl2.png'

function Contact() {
  return (
    <div className={contactStyle.main} id="contact">
        
        <div className={contactStyle.empty}></div>


        <div className={contactStyle.secondDiv}>

            <img src={contactWomen} alt="" className={contactStyle.secondDiv_image}
             data-aos="fade-up"
             data-aos-delay="250"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="true"
             />



            <div className={contactStyle.secondDiv_form_div}
             data-aos="fade-up"
             data-aos-delay="750"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="true"
            >


            <div className={contactStyle.secondDiv_form_div_first_text}>
            Sign up for news and updates from theBody
                </div>

                <div className={contactStyle.secondDiv_form_div_headline}>
                    The <span style={{color:"#ff3333"}}>Bo</span>dy  
                    </div>



                    <div className={contactStyle.secondDiv_form_div_second_text}>
                    Be the first to get news and updates from The Body Coach.
                </div>

                <form action="/">
                    <input type="text" placeholder='    Name...' />
                    <input type="text" placeholder='    Email...' />

             

                   <input type="button" value='Contact me' />
                    
                </form>









            </div>

        </div>

        <div className={contactStyle.empty}></div>

    </div>
  )
}

export default Contact