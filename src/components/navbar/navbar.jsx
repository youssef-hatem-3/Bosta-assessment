import React, { useContext, useState } from 'react';
import navStyle from './navbar.module.css';
import arLogo from '../../imgs/arLogo.JPG'
import enLogo from '../../imgs/enLogo.JPG'
import { sideBarContext } from '../../context/sideBarContext';
import { useLayoutDirection } from '../../context/reactContext';
import { shipmentDetailsContext } from '../../context/shipmentDetailsContext';
import { useTranslation } from 'react-i18next';




const Navbar = () => {
    const [t, i18n] = useTranslation()
    const [trackingNumber, setTrackingNumber] = useState('');

    const handleChange = event => {
        setTrackingNumber(event.target.value);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            getShipmentDetailsData(trackingNumber)
            console.log(shipmentDetailsData);
            console.log('enter');
        }
    };

    const { isRTL, toggleLayoutDirection } = useLayoutDirection();

    let { sideBarStatus, changeSideBarStatus, } = useContext(sideBarContext);
    let { shipmentDetailsData, getShipmentDetailsData } = useContext(shipmentDetailsContext);


    let arabiclinks = [
        { link: 'الرئيسية' },
        { link: 'الاسعار' },
        { link: 'كلم المبيعات' },
    ]
    let englishlinks = [
        { link: 'Home' },
        { link: 'Pricing' },
        { link: 'Call sales' },
    ]

    return (
        <>
            {isRTL ? <nav className={`${navStyle.nav}`}>
                {/*************************************navbar Rtl**************************************/}
                <div className={`${navStyle.body} container  `}>
                    <img className={`${navStyle.logo} me-3`} src={arLogo} alt="" />
                    <ul className={`${navStyle.ul} m-0`} >
                        {arabiclinks.map((link, index) =>
                            <li key={index} className={` ${navStyle.li} m-0 `}> {link.link} </li>
                        )}
                    </ul>
                    <ul className={`${navStyle.ul} m-0`} >
                        <li className={` ${navStyle.li}  m-0  `}>
                            <div className={`${navStyle.trackUrShipment} `} >
                                <span>تتبع شحنتك</span>
                                <div className={`${navStyle.trackUrShipmentBoxRtl} `}>
                                    <p className='mb-2'>تتبع شحنتك</p>
                                    <div className="input-group mb-1">
                                        <input onKeyDown={handleKeyDown} value={trackingNumber} onChange={handleChange} type="number" className={`form-control ${navStyle.formContolRtl}`} placeholder="رقم التتبع" aria-label="Username" aria-describedby="basic-addon1" />
                                        <div className="input-group-prepend">
                                            <span onClick={() => { getShipmentDetailsData(trackingNumber) }} className={`input-group-text ${navStyle.searchIconRtl}`} id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={` ${navStyle.li} m-0 `}> تسجيل دخول </li>
                        <li onClick={() => {
                            i18n.changeLanguage('en')
                            console.log(i18n.language);
                            toggleLayoutDirection(!isRTL)
                        }} className={` ${navStyle.li} m-0 `}> <span className={`${navStyle.language}`}>Eng</span> </li>
                    </ul>
                    {/*************************************Collapsed navbar Rtl**************************************/}
                    <div className={`${navStyle.togglerContainer} m-0`}  >
                        <div className={`${navStyle.trackUrShipment} mx-4 `} >
                            <span>تتبع شحنتك</span>
                            <div className={`${navStyle.trackUrShipmentBoxRtl} `}>
                                <p className='mb-2 '>تتبع شحنتك</p>
                                <div className="input-group mb-1">
                                    <input onKeyDown={handleKeyDown} value={trackingNumber} onChange={handleChange} type="number" className={`form-control ${navStyle.formContolRtl}`} placeholder="رقم التتبع" aria-label="Username" aria-describedby="basic-addon1" />
                                    <div className="input-group-prepend">
                                        <span onClick={() => { getShipmentDetailsData(trackingNumber) }} className={`input-group-text ${navStyle.searchIconRtl}`} id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <i onClick={changeSideBarStatus} className={`${navStyle.toggler} ${sideBarStatus == false ? `fa-solid fa-bars ` : `fa-solid fa-xmark`}`}></i>
                    </div>
                </div>
            </nav>
                :
                <nav className={`${navStyle.nav}`}>
                    {/*************************************navbar Ltr**************************************/}
                    <div className={`${navStyle.body} container`}>
                        <img className={`${navStyle.logo} me-3`} src={enLogo} alt="" />
                        <ul className={`${navStyle.ul} m-0`} >
                            {englishlinks.map((link, index) =>
                                <li key={index} className={` ${navStyle.li} m-0 `}> {link.link} </li>
                            )}
                        </ul>
                        <ul className={`${navStyle.ul} m-0`} >
                            <li className={` ${navStyle.li}  m-0  `}>
                                <div className={`${navStyle.trackUrShipment} `} >
                                    <span>Track shipment</span>
                                    <div className={`${navStyle.trackUrShipmentBoxLtr} `}>
                                        <p className='mb-2'>Track shipment</p>
                                        <div className="input-group mb-1">
                                            <input onKeyDown={handleKeyDown} value={trackingNumber} onChange={handleChange} type="number" className={`form-control ${navStyle.formContolLtr}`} placeholder="Tracking no." aria-label="Username" aria-describedby="basic-addon1" />
                                            <div className="input-group-prepend">
                                                <span onClick={() => { getShipmentDetailsData(trackingNumber) }} className={`input-group-text ${navStyle.searchIconLtr}`} id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={` ${navStyle.li} m-0 `}> Sign Up </li>
                            <li onClick={() => {
                                i18n.changeLanguage('ar')
                                console.log(i18n.language);
                                toggleLayoutDirection(!isRTL)
                            }} className={` ${navStyle.li} m-0 `}> <span className={`${navStyle.language}`}>العربيه</span> </li>
                        </ul>
                        {/*************************************Collapsed navbar Rtl**************************************/}
                        <div className={`${navStyle.togglerContainer} m-0`}  >
                            <div className={`${navStyle.trackUrShipment} mx-4 py-3 `} >
                                <span>Track shipment</span>
                                <div className={`${navStyle.trackUrShipmentBoxLtr} `}>
                                    <p className='mb-2'>Track shipment</p>
                                    <div className="input-group mb-1">
                                        <input onKeyDown={handleKeyDown} value={trackingNumber} onChange={handleChange} type="number" className={`form-control ${navStyle.formContolLtr}`} placeholder="Tracking no." aria-label="Username" aria-describedby="basic-addon1" />
                                        <div className="input-group-prepend">
                                            <span onClick={() => { getShipmentDetailsData(trackingNumber) }} className={`input-group-text ${navStyle.searchIconLtr}`} id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <i onClick={changeSideBarStatus} className={`${navStyle.toggler} ${sideBarStatus == false ? `fa-solid fa-bars ` : `fa-solid fa-xmark`}`}></i>
                        </div>
                    </div>
                </nav>
            }
        </>
    );
}

export default Navbar;

