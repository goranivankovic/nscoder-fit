import React from 'react'

import footerStyle from '../../Styles/Footer.module.css'
import { AiOutlineFacebook,AiFillGithub ,AiOutlineLinkedin ,AiOutlineYoutube} from 'react-icons/ai'
import { FaTwitter  } from 'react-icons/fa'


function Footer() {
  return (
    
 
     <div className={footerStyle.main}>
        <div className={footerStyle.empty}></div>



        <div className={footerStyle.firstDiv}>

      <div className={footerStyle.firstDiv_first_row}>
          <div className={footerStyle.firstDiv_first_row_headline }>PRODUCTS</div>

          <div>youTube Channel</div>
          <div>theBody Wicks</div>
          <div>my Book</div>
          <div>30 <span style={{color:"#ff3333"}} >Day </span>Kick</div>
          <div>Learn in 15 Meals</div>

      </div>

      <div className={footerStyle.firstDiv_first_row}>

      <div className={footerStyle.firstDiv_first_row_headline }>CO<span style={{color:"#ff3333"}}>MM</span>UNITY</div>

         <div>Blog</div>
         <div>Newsletter</div>
        <div>my B<span style={{color:"#ff3333"}} >oo</span>k</div>
        <div>ABOUT US</div>
        <div>Learn in 15 Meals</div>
          
          </div>

          <div className={footerStyle.firstDiv_first_row}>
          <div className={footerStyle.firstDiv_first_row_headline }>CONT<span style={{color:"#ff3333"}}>AC</span>T</div>

          
          <div>footballapiuk@gmail.com</div>
          <div>Support Centre</div>
          <div>Newsletter </div>
          <div>Careers </div>
          <div>Learn in 15 <span style={{color:"#ff3333"}} >Me</span>als </div>
          
          </div>

           <div className={footerStyle.firstDiv_first_row_icons_hw}>

            
               <a href="https://github.com/goranivankovic" target='_blank'><AiFillGithub className={footerStyle.firstDiv_first_row_icons} /></a> 
               <a  href="https://www.linkedin.com/in/goran-ivankovi%C4%87-86b19b1b9/" target='_blank'><AiOutlineLinkedin className={footerStyle.firstDiv_first_row_icons} /></a> 
               
                
              <a  href="https://www.facebook.com/" target='_blank'><AiOutlineFacebook className={footerStyle.firstDiv_first_row_icons} /></a>  
              <a  href="https://youtube.com" target='_blank'><AiOutlineYoutube  className={footerStyle.firstDiv_first_row_icons}/></a>  
          
              
             
          
          </div> 
    


        </div>


        <div className={footerStyle.secondDiv}>
            
            <div>2022TERMS & CONDITION</div>
            <div>THE BODY COACH</div>
            <div>@ PRIVACY POLICY COOKIE</div>


        </div>


       <div className={footerStyle.empty}></div>
    </div>

  
  )
}

export default Footer