

import React,{useState} from 'react'

import navStyles from '../../Styles/Nav.module.css'




import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import {BiFootball} from 'react-icons/bi'







function Nav() {

    const[laz,setLaz]=useState(false)


    function navBar(){

    setLaz(!laz)

  }

  return (

       
    <div>
     
        <div className={navStyles.main}>

            <div className={navStyles.logo}>the<span style={{color:"#ff3333"}}>Bo</span>dy</div> 
 
            <div className={navStyles.navItems}>

                <a href="#home">MISSION</a> 
                 <a href="#about">ABOUT</a>  
                   <a href="#app">APP</a> 
                 <a href="#traning">TRANING</a>  
                 <a href="#price">PRICE</a>  
                 <a href="#contact">CONTACT</a>

              
             

            </div>

        </div>
   

  {!laz ? <FaBars  className={navStyles.bar} onClick={navBar}/> : <ImCross  className={navStyles.bar} onClick={navBar}/>}

 
            
             {laz ?
    
            <div className={navStyles.main768} id="main768">


                <a onClick={navBar} href="#home">MISSION</a> 
                 <a onClick={navBar} href="#about">ABOUT</a>  
                <a onClick={navBar} href="#app">APP</a> 
                 <a onClick={navBar} href="#traning">TRANING</a> 
                 <a onClick={navBar} href="#price">PRICE</a>  
                 <a onClick={navBar} href="#contact">CONTACT</a>


           </div>
 :""}


        


    </div>
  
  )
}

export default Nav



