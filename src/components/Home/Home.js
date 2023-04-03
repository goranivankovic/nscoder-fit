import React, { Component } from 'react'
import run from '../../video/run.mp4'
import wave from '../../img/wave.png'
import homeStyles from '../../Styles/Home.module.css'
import {AiOutlineApple} from 'react-icons/ai'
import {Button} from 'react-bootstrap'


export default class Home extends Component {
    constructor(){
        super()
    

   
    }






    render() {
   


        return (
            <div id='home' className={homeStyles.main}>

             

                  <div className={homeStyles.firstDiv}>

                     <div> WORKING HOURS 00-24H </div> <div>IRON THE<span style={{color:"#ff3333"}}>BO</span>DY</div>  <div>WORKING HOURS 00-24H </div>

                  </div>


                



                    <div className={homeStyles.threedDiv}>

                        <div>WELCOME TO THE  THEBODY</div>
                        <div>STAY <span style={{color:"#ff3333"}}>CONSISTENT</span> </div>
                        <div>TO YOUR GOALS AND</div>
                        <div>SAVE TIME AND M<span style={{color:"#ff3333"}}>ON</span>EY</div>
                        <div>MO<span style={{color:"#ff3333"}}>TI</span>VATION</div>
                        <div>Become part of the team and win the price </div>

                        <button>WORKING HOURS</button>




                    </div>


          
           
       
            </div>
        )
    }
}
