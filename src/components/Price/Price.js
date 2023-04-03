import React from 'react'

import priceStyle from '../../Styles/Price.module.css'

import { AiOutlineCheck } from 'react-icons/ai'

import {RxCross2} from 'react-icons/rx'

function Price() {
  return (
    <div className={priceStyle.main} id='price'>


     <div className={priceStyle.firstDiv}>



          <div className={priceStyle.firstDivBox1}>
                    <div style={{color:"#ff3333"}}>XXL/$60 A MONTH</div>
                  <div className={priceStyle.firstDivBox1Headline}>
                     
                      ACCESSIBLE MEMBERSHIP FEES 
                   </div>

                      <div className={priceStyle.firstDivBox1Text}>
                        Our price list is suitable for everyone.
                         Whether you are an active exerciser or just passing through and want to train in the best conditions, 
                         we are here for you.

                    </div>

                       <div className={priceStyle.firstDivBox1Text2}>

                          <div> <AiOutlineCheck  className={priceStyle.check}/> Unlimited training time</div>
                          <div> <AiOutlineCheck className={priceStyle.check} /> Packages with personal or guided training</div>
                          <div> <AiOutlineCheck className={priceStyle.check} /> Discounts on multi-month packages</div>
                       
                        </div>
         
                     <button className={priceStyle.firstDivBox1Button}>Package XXL</button>

          </div>



  






   <div className={priceStyle.firstDivBox1}>
                  <div style={{color:"#ff3333"}}>XL/$40 A MONTH</div>
                  <div className={priceStyle.firstDivBox1Headline}>
                     
                      ACCESSIBLE MEMBERSHIP FEES 
                   </div>

                      <div className={priceStyle.firstDivBox1Text}>
                        Our price list is suitable for everyone.
                         Whether you are an active exerciser or just passing through and want to train in the best conditions, we are here for you.

                    </div>

                       <div className={priceStyle.firstDivBox1Text2}>

                          <div> <AiOutlineCheck  className={priceStyle.check}/> Unlimited training time</div>
                          <div> <AiOutlineCheck className={priceStyle.check} /> Packages with personal or guided training</div>
                          <div> <RxCross2 className={priceStyle.check} /> Discounts on multi-month packages</div>
                       
                        </div>
         
                     <button className={priceStyle.firstDivBox1Button}>Package XL</button>

          </div>















   <div className={priceStyle.firstDivBox1}>
                   <div style={{color:"#ff3333"}}>L/$25 A MONTH</div>
                  <div className={priceStyle.firstDivBox1Headline}>
                     
                      ACCESSIBLE MEMBERSHIP FEES 
                   </div>

                      <div className={priceStyle.firstDivBox1Text}>
                        Our price list is suitable for everyone.
                         Whether you are an active exerciser or just passing through and want to train in the best conditions, we are here for you.

                    </div>

                       <div className={priceStyle.firstDivBox1Text2}>

                          <div> <AiOutlineCheck  className={priceStyle.check}/> Unlimited training time</div>
                          <div> <RxCross2 className={priceStyle.check} /> Packages with personal or guided training</div>
                          <div> <RxCross2 className={priceStyle.check} /> Discounts on multi-month packages</div>
                       
                        </div>
         
                     <button className={priceStyle.firstDivBox1Button}>Package L</button>

          </div>

     </div>


    </div>
  )
}

export default Price