import MultiStepCrossBarStyle from './MultiStepCrossBar.module.css'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar"
import { useContext, useEffect, useState } from 'react';
import { shipmentDetailsContext } from '../../../context/shipmentDetailsContext';


const MultiStepCrossBar = (props) => {
     let { shipmentDetailsData , barColor , setbarColor } = useContext(shipmentDetailsContext);
     const [percentage, setPercentage] = useState();
     const [transitEvents, setstate] = useState(shipmentDetailsData.TransitEvents);
     let lastState = transitEvents[transitEvents.length - 2];
 
 /*Fuction used for changinge the percantage depends on currentStatus */
 function changePercentage() {
     if (shipmentDetailsData.CurrentStatus.state === 'DELIVERED') {setPercentage(100)}
     else if ( shipmentDetailsData.CurrentStatus.state=== 'OUT_FOR_DELIVERY') {setPercentage(75)}
     else if ( shipmentDetailsData.CurrentStatus.state=== 'DELIVERED_TO_SENDER') {setPercentage(34)}
     else if ( shipmentDetailsData.CurrentStatus.state=== 'TICKET_CREATED') {setPercentage(1)}
     else if ( shipmentDetailsData.CurrentStatus.state == 'CANCELLED') {
          if (lastState.state === 'DELIVERED') {setPercentage(100)}
          else if ( lastState.state === 'OUT_FOR_DELIVERY') {setPercentage(75)}
          else if ( lastState.state === 'DELIVERED_TO_SENDER') {setPercentage(34)}
          else if ( lastState.state === 'TICKET_CREATED') {setPercentage(1)}
          
     }
     return percentage;
}
/*Fuction used for changinge the backGround color depends on currentStatus */
function changeBgC() {
     if (shipmentDetailsData.CurrentStatus.state === 'DELIVERED') {setbarColor('#36B600')/*Green*/}
     else if ( shipmentDetailsData.CurrentStatus.state=== 'OUT_FOR_DELIVERY') {setbarColor('#F9BA02')/*yellow*/}
     else if ( shipmentDetailsData.CurrentStatus.state=== 'DELIVERED_TO_SENDER') {setbarColor('#F9BA02')/*yellow*/}
     else if ( shipmentDetailsData.CurrentStatus.state=== 'TICKET_CREATED') {setbarColor('#F9BA02')/*yellow*/}
     else if ( shipmentDetailsData.CurrentStatus.state == 'CANCELLED') {setbarColor('#F4050D')/*Red*/}
     return barColor;
}

     useEffect(() => {
          changePercentage()
          changeBgC()
     },);
     return (
          <div className={`${MultiStepCrossBarStyle.bar} my-5`}>
               <ProgressBar
                    percent={percentage}
                    filledBackground={barColor}
                    className={`${MultiStepCrossBarStyle.rotateBar}`}
               >

                    <Step transition="scale">
                         {({ accomplished }) => (
                              <div className={`${MultiStepCrossBarStyle.hallStep} m-auto text-center`}>
                                        <div  className={`${MultiStepCrossBarStyle.step } ${accomplished ? MultiStepCrossBarStyle.completed : '' }`} style={{backgroundColor: accomplished ? barColor : ''}}>
                                        {accomplished ? <i className="fa-solid fa-check text-white"></i> : '1'}
                                   </div>
                                   <p className={`${MultiStepCrossBarStyle.stepTxt}`} style={{color:  barColor }} >تم انشاء الشحنه</p>
                              </div>
                         )}
                    </Step>
                    <Step transition="scale">
                         {({ accomplished }) => (
                              <div className={`${MultiStepCrossBarStyle.hallStep} m-auto text-center`}>
                                        <div  className={`${MultiStepCrossBarStyle.step } ${accomplished ? MultiStepCrossBarStyle.completed : '' }`} style={{backgroundColor: accomplished ? barColor : ''}}>
                                        {accomplished ? <i className="fa-solid fa-check text-white"></i> : <i className={`fa-solid fa-cart-shopping ${MultiStepCrossBarStyle.stepIcon}`}></i>}
                                   </div>
                                   <p className={`${MultiStepCrossBarStyle.stepTxt}`} >تم استلام الشحنه</p>
                              </div>
                         )}
                    </Step>
                    <Step transition="scale">
                         {({ accomplished }) => (
                              <div className={`${MultiStepCrossBarStyle.hallStep} m-auto text-center`}>
                                        <div  className={`${MultiStepCrossBarStyle.step } ${accomplished ? MultiStepCrossBarStyle.completed : '' }`} style={{backgroundColor: accomplished ? barColor : ''}}>
                                        {accomplished ? <i className="fa-solid fa-check text-white"></i> : <i className={`fa-solid fa-truck ${MultiStepCrossBarStyle.stepIcon}`}></i>}
                                   </div>
                                   <p className={`${MultiStepCrossBarStyle.stepTxt}`} >الشحنه خرجت للتسليم</p>
                              </div>
                         )}
                    </Step>
                    <Step transition="scale">
                         {({ accomplished }) => (
                              <div className={`${MultiStepCrossBarStyle.hallStep} m-auto text-center`}>
                                        <div  className={`${MultiStepCrossBarStyle.step } ${accomplished ? MultiStepCrossBarStyle.completed : '' }`} style={{backgroundColor: accomplished ? barColor : ''}}>
                                        {accomplished ? <i className="fa-solid fa-check text-white"></i> : <i className={`fa-solid fa-clipboard-check ${MultiStepCrossBarStyle.stepIcon}`}></i>}
                                   </div>
                                   <p className={`${MultiStepCrossBarStyle.stepTxt}`} >تم التسليم</p>
                              </div>
                         )}
                    </Step>
                    
               </ProgressBar>
          </div>
     );
}
export default MultiStepCrossBar;


