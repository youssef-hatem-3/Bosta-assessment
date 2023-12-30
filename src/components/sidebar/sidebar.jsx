import React, { useContext } from 'react';
import sidebar from './sidebar.module.css'
import { sideBarContext } from '../../context/sideBarContext';
import { useLayoutDirection } from '../../context/reactContext';


const Sidebar = () => {
    let { sideBarStatus, changeSideBarStatus } = useContext(sideBarContext)
    const { isRTL, toggleLayoutDirection } = useLayoutDirection();
    return (
        <>
         {/*************************************sidebar Rtl**************************************/}
        {isRTL ?  <div className={`${sidebar.body}`}>
                <div className={`${sideBarStatus == false ? `${sidebar.closeSidebarRtl}` : `${sidebar.openSidebarRtl}`}`}>
                    <div className={`${sidebar.ulContainer} container `}>
                        <ul>
                            <li className={`${sidebar.li}`}>الرئيسيه</li>
                            <li className={`${sidebar.li}`}>الاسعار</li>
                            <li className={`${sidebar.li}`}>كلم المبيعات</li>
                        </ul>
                    </div>
                    <div className={`${sidebar.btnsContainer} container `}>
                        <button type="button" className={`${sidebar.button}`}>سجل الدخول</button>
                    </div>
                </div>
            </div>
            /*************************************sidebar LTR**************************************/
            : 
            <div className={`${sidebar.body}`}>
                <div className={`${sideBarStatus == false ? `${sidebar.closeSidebarLtr}` : `${sidebar.openSidebarLtr}`}`}>
                    <div className={`${sidebar.ulContainer} container `}>
                        <ul>
                        <li className={`${sidebar.li}`}>Home</li>
                        <li className={`${sidebar.li}`}>Pricing</li>
                        <li className={`${sidebar.li}`}>Call sales</li>
                        </ul>
                    </div>
                    <div className={`${sidebar.btnsContainer} container `}>
                        <button type="button" className={`${sidebar.button}`}>سجل الدخول</button>
                    </div>
                </div>
            </div> }
             
        </> 
    );
}

export default Sidebar;
