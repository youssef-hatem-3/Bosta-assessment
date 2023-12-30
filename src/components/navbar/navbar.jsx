import React, { useContext, useState } from 'react';
import navStyle from './navbar.module.css';
import arLogo from '../../imgs/arLogo.JPG'
import enLogo from '../../imgs/enLogo.JPG'
import { sideBarContext } from '../../context/sideBarContext';
import { useLayoutDirection } from '../../context/reactContext';
import { shipmentDetailsContext } from '../../context/shipmentDetailsContext';
import { useTranslation } from 'react-i18next';




const Navbar = () => {

    const [trackingNumber, setTrackingNumber] = useState('');
    const handleChange = event => {
        setTrackingNumber(event.target.value);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            getShipmentDetailsData(trackingNumber)
            console.log(shipmentDetailsData);
        }
    };
    const { isRTL, toggleLayoutDirection } = useLayoutDirection();
    let { sideBarStatus, changeSideBarStatus, } = useContext(sideBarContext);
    let { shipmentDetailsData, getShipmentDetailsData } = useContext(shipmentDetailsContext);
    const [t, i18n] = useTranslation()


    return (
        <>
            <nav className={`${navStyle.nav}`}>
                <div className={`${navStyle.body} container  `}>
                    <img className={`${navStyle.logo} me-3`} src={i18n.language == 'ar' ? arLogo : enLogo } alt="" />
                    <ul className={`${navStyle.ul} m-0`} >
                        <li className={` ${navStyle.li} m-0 `}> {t('home')}  </li>
                        <li className={` ${navStyle.li} m-0 `}> {t('pricing')}  </li>
                        <li className={` ${navStyle.li} m-0 `}> {t('callsales')}  </li>
                    </ul>
                    <ul className={`${navStyle.ul} m-0`} >
                        <li className={` ${navStyle.li}  m-0  `}>
                            <div className={`${navStyle.trackUrShipment} `} >
                                <span>{t('trackshipment')}</span>
                                <div className={`${navStyle.trackUrShipmentBoxRtl} `}>
                                    <p className='mb-2'>{t('trackshipment')}</p>
                                    <div className="input-group mb-1">
                                        <input onKeyDown={handleKeyDown} value={trackingNumber} onChange={handleChange} type="number" className={`form-control ${navStyle.formContolRtl}`} placeholder="رقم التتبع" aria-label="Username" aria-describedby="basic-addon1" />
                                        <div className="input-group-prepend">
                                            <span onClick={() => { getShipmentDetailsData(trackingNumber) }} className={`input-group-text ${navStyle.searchIconRtl}`} id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={` ${navStyle.li} m-0 `}> {t('SignUp')}</li>
                        <li onClick={i18n.language == 'ar' ? () => { i18n.changeLanguage('en');  } : () => { i18n.changeLanguage('ar');  }}
                            className={` ${navStyle.li} m-0 `}> <span className={`${navStyle.language}`}>Eng</span> </li>
                    </ul>
                    <div className={`${navStyle.togglerContainer} m-0`}  >
                        <div className={`${navStyle.trackUrShipment} mx-4 `} >
                            <span>{t('trackshipment')}</span>
                            <div className={`${navStyle.trackUrShipmentBoxRtl} `}>
                                <p className='mb-2 '>{t('trackshipment')}</p>
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
        </>
    );
}

export default Navbar;

