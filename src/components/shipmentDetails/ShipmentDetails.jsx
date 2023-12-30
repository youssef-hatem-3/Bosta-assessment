import React, { useContext, useState } from 'react';
import shipDetStyle from './shipmentDetails.module.css'
import issueLogo from '../../imgs/issueLogo.JPG'
import MultiStepCrossBar from '../MultiStepCrossBar/RTL/MultiStepCrossBar';
import { useLayoutDirection } from '../../context/reactContext';
import MultiStepCrossBarLtr from '../MultiStepCrossBar/LTR/MultiStepCrossBarLtr';
import { shipmentDetailsContext } from '../../context/shipmentDetailsContext';


const ShipmentDetails = () => {

    const { isRTL, toggleLayoutDirection } = useLayoutDirection();
    let { shipmentDetailsData, getShipmentDetailsData, arabictranslatedData , barColor } = useContext(shipmentDetailsContext);
    const [weekday, setWeekday] = useState(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
    const d = new Date();
    let day = weekday[d.getDay()];

    return (
        <>
            {shipmentDetailsData == null ?
                <>
                    {isRTL ? <div className={`${shipDetStyle.emptyBody} `} >
                        <span><i className="fa-solid fa-magnifying-glass"></i> من فضلك ابحث عن الشحنه </span>
                    </div>
                        :
                        <div className={`${shipDetStyle.emptyBody} `} >
                            <span>please track your shipment <i className="fa-solid fa-magnifying-glass"></i> </span>
                        </div>}</>
                :
                <> {isRTL ? <div className={`${shipDetStyle.body} container `}>
                    <div className={`container mx-0`}>
                        <div className={`${shipDetStyle.summery}`}>
                            <div className='row px-4 py-4'>
                                <div className={`col-md-3 ${shipDetStyle.info}`}>
                                    <div className={`${shipDetStyle.infoHeader}`}>
                                        رقم الشحنه {arabictranslatedData.TrackingNumber}
                                    </div>
                                    <div style={{color: barColor }} className={`${shipDetStyle.infoValue}` } >
                                        {arabictranslatedData.CurrentStatus.state}
                                    </div>
                                </div>
                                <div className={`col-md-3 ${shipDetStyle.info}`}>
                                    <div className={`${shipDetStyle.infoHeader}`}>
                                        اخر تحديث
                                    </div>
                                    <div className={`${shipDetStyle.infoValue}`}>
                                        {arabictranslatedData.CurrentStatus.timestamp.slice(0, arabictranslatedData.CurrentStatus.timestamp.indexOf('T')  ) + day + ' في ' + arabictranslatedData.CurrentStatus.timestamp.slice(arabictranslatedData.CurrentStatus.timestamp.indexOf('T')+1 , arabictranslatedData.CurrentStatus.timestamp.indexOf('.')) }
                                    </div>
                                </div>
                                <div className={`col-md-3 ${shipDetStyle.info}`}>
                                    <div className={`${shipDetStyle.infoHeader}`}>
                                        اسم التاجر
                                    </div>
                                    <div className={`${shipDetStyle.infoValue}`}>
                                        {arabictranslatedData.provider}
                                    </div>
                                </div>
                                <div className={`col-md-3 ${shipDetStyle.info}`}>
                                    <div className={`${shipDetStyle.infoHeader}`}>
                                        موعد التسليم خلال
                                    </div>
                                    <div className={`${shipDetStyle.infoValue}`}>
                                    {arabictranslatedData.PromisedDate?arabictranslatedData.PromisedDate.slice(0, arabictranslatedData.PromisedDate.indexOf('T')  ) + day + ' في ' + arabictranslatedData.PromisedDate.slice(arabictranslatedData.PromisedDate.indexOf('T')+1 , arabictranslatedData.PromisedDate.indexOf('.')) : '' }
                                    </div>
                                </div>
                            </div>
                            <hr className='p-0 m-0  ' />
                            <div className="row px-5 py-1 ">
                                <div>
                                    <MultiStepCrossBar />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-8">
                                <p>تفاصيل الشحنه</p>
                                <div className={`${shipDetStyle.tableContainer}`}>
                                    <table className={`table table-hover ${shipDetStyle.maintable} border-rounded`}>
                                        <thead >
                                            <tr className={`${shipDetStyle.tableHead}`} >
                                                <th scope="col">التفاصيل</th>
                                                <th scope="col">التاريخ</th>
                                                <th scope="col">الوقت</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {arabictranslatedData.TransitEvents.map((event, index) =>
                                                <tr key={index}>
                                                    <td>{event.state}</td>
                                                    <td>{event.timestamp.slice(0,event.timestamp.indexOf('T'))}</td>
                                                    <td>{event.reason}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <p>عنوان التسليم</p>
                                <div className={`${shipDetStyle.address} w-100`}>
                                    <p className='p-3'>امبابه شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22 القاهرع</p>
                                </div>
                                <div className={`${shipDetStyle.problem} w-100 `}>
                                    <img className='pt-2' src={issueLogo} alt="" />
                                    <div className='mx-4'>
                                        <p>هل يوجد مشكلة في شحنتك ؟</p>
                                        <button type="button" className={`btn ${shipDetStyle.button}`}>ابلاغ عن مشكلة</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : <div className={`${shipDetStyle.body} container `}>
                    <div className={`container mx-0`}>
                        <div className={`${shipDetStyle.summery}`}>
                            <div className='row px-4 py-4'>
                                <div className={`col-md-3 ${shipDetStyle.info} `}>
                                    <div className={`${shipDetStyle.infoHeader}`}>
                                        The shipment {shipmentDetailsData.TrackingNumber}
                                    </div>
                                    <div style={{color:  barColor }} className={`${shipDetStyle.infoValue}`}>
                                        {shipmentDetailsData.CurrentStatus.state}
                                    </div>
                                </div>
                                <div className={`col-md-3 ${shipDetStyle.info}`}>
                                    <div className={`${shipDetStyle.infoHeader}`}>
                                        Last update
                                    </div>
                                    <div className={`${shipDetStyle.infoValue}`}>
                                    {shipmentDetailsData.CurrentStatus.timestamp.slice(0, shipmentDetailsData.CurrentStatus.timestamp.indexOf('T')  ) + " " + day + ' at ' + shipmentDetailsData.CurrentStatus.timestamp.slice(shipmentDetailsData.CurrentStatus.timestamp.indexOf('T')+1 , shipmentDetailsData.CurrentStatus.timestamp.indexOf('.')) }
                                    </div>
                                </div>
                                <div className={`col-md-3 ${shipDetStyle.info}`}>
                                    <div className={`${shipDetStyle.infoHeader}`}>
                                        Merchant name
                                    </div>
                                    <div className={`${shipDetStyle.infoValue}`}>
                                        {shipmentDetailsData.provider}
                                    </div>
                                </div>
                                <div className={`col-md-3 ${shipDetStyle.info}`}>
                                    <div className={`${shipDetStyle.infoHeader}`}>
                                        Delivery time within
                                    </div>
                                    <div className={`${shipDetStyle.infoValue}`}>
                                    {shipmentDetailsData.PromisedDate?shipmentDetailsData.PromisedDate.slice(0, shipmentDetailsData.PromisedDate.indexOf('T')  ) + " " + day + ' at ' + shipmentDetailsData.PromisedDate.slice(shipmentDetailsData.PromisedDate.indexOf('T')+1 , shipmentDetailsData.PromisedDate.indexOf('.')) : '' }
                                    </div>
                                </div>
                            </div>
                            <hr className='p-0 m-0  ' />
                            <div className="row px-5 py-1 ">
                                <div>
                                    <MultiStepCrossBarLtr />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-8">
                                <p>Shipment details</p>
                                <div className={`${shipDetStyle.tableContainer}`}>
                                    <table className={`table table-hover ${shipDetStyle.maintable} border-rounded`}>
                                        <thead className={`${shipDetStyle.tableHead}`} >
                                            <tr  >
                                                <th scope="col">Details</th>
                                                <th scope="col">Date</th>
                                                <th cla scope="col">Time</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {shipmentDetailsData.TransitEvents.map((event, index) =>
                                                <tr key={index}>
                                                    <td>{event.state}</td>
                                                    <td>{event.timestamp.slice(0,event.timestamp.indexOf('T'))}</td>
                                                    <td>{event.timestamp ? event.timestamp.slice(event.timestamp.indexOf('T')+1 , event.timestamp.indexOf('.')):""}</td>
                                                    <td>{event.reason}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <p>Delivery address</p>
                                <div className={`${shipDetStyle.address} w-100`}>
                                    <p className='p-3'>امبابه شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22 القاهرع</p>
                                </div>
                                <div className={`${shipDetStyle.problem} w-100 `}>
                                    <img className='pt-2' src={issueLogo} alt="" />
                                    <div className='mx-4'>
                                        <p>Is there a problem with your shipment?</p>
                                        <button type="button" className={`btn ${shipDetStyle.button}`}>Report the problem</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
                </>}
        </>
    );
}

export default ShipmentDetails;
