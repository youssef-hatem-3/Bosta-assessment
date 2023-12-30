import axios from "axios";
import { createContext, useState } from "react";
export let shipmentDetailsContext = createContext();
export default function ShipmentDetailContextProvider(props) {

    /***************************GET Shipment data****************************************************/
    const [shipmentDetailsData, setshipmentDetailsData] = useState(null);
    const [arabictranslatedData, setarabictranslatedData] = useState({});
    const [barColor, setbarColor] = useState();

    async function getShipmentDetailsData(id) {
        try {
            let { data } = await axios.get(`https://tracking.bosta.co/shipments/track/${id}`);
            setshipmentDetailsData(data)
            let copiedData = (JSON.parse(JSON.stringify(data)))
            arabictranslation(copiedData)
        } catch (error) {
            console.log(error);
        }
    }
    console.log(arabictranslatedData);
    /********************************Function to get translatedData*****************************************/
    function arabictranslation(x) {
        let copyTransit = x.TransitEvents;
        switch (x.CurrentStatus.state) {
            case 'TICKET_CREATED':
                x.CurrentStatus.state = 'تم انشاء الشحنه'
                break;
            case 'PACKAGE_RECEIVED':
                x.CurrentStatus.state = 'تم استلام الشحنه من التاجر'
                break;
            case 'IN_TRANSIT':
                x.CurrentStatus.state = 'في مرحلة انتقالية'
                break;
            case 'NOT_YET_SHIPPED':
                x.CurrentStatus.state = 'لم يتم شحنه بعد'
                break;
            case 'OUT_FOR_DELIVERY':
                x.CurrentStatus.state = 'خارج للتوصيل'
                break;
            case 'WAITING_FOR_CUSTOMER_ACTION':
                x.CurrentStatus.state = 'في انتظار إجراء من العميل'
                break;
            case 'DELIVERED':
                x.CurrentStatus.state = 'تم التسليم'
                break;
            case 'DELIVERED_TO_SENDER':
                x.CurrentStatus.state = 'تم التسليم إلى المرسل'
                break;
            case 'CANCELLED':
                x.CurrentStatus.state = 'تم الالغاء'
                break;
        }
        copyTransit.map((details) => {
            switch (details.state) {
                case 'TICKET_CREATED':
                    details.state = 'تم اشاء الشحنه'
                    break;
                case 'PACKAGE_RECEIVED':
                    details.state = 'تم استلام الشحنه من التاجر'
                    break;
                case 'IN_TRANSIT':
                    details.state = 'في مرحلة انتقالية'
                    break;
                case 'NOT_YET_SHIPPED':
                    details.state = 'لم يتم شحنه بعد'
                    break;
                case 'OUT_FOR_DELIVERY':
                    details.state = 'خارج للتوصيل'
                    break;
                case 'WAITING_FOR_CUSTOMER_ACTION':
                    details.state = 'في انتظار إجراء من العميل'
                    break;
                case 'DELIVERED':
                    details.state = 'تم التسليم'
                    break;
                case 'CANCELLED':
                    details.state = 'تم الالغاء'
                    break;
            }
        })

        setarabictranslatedData(x);
    }


    return <shipmentDetailsContext.Provider value={{ shipmentDetailsData, getShipmentDetailsData, arabictranslatedData , barColor , setbarColor }}>
        {props.children}
    </shipmentDetailsContext.Provider>
}