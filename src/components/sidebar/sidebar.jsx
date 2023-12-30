import React, { useContext } from 'react';
import sidebar from './sidebar.module.css'
import { sideBarContext } from '../../context/sideBarContext';
import { useLayoutDirection } from '../../context/reactContext';
import { useTranslation } from 'react-i18next';


const Sidebar = () => {
    let { sideBarStatus, changeSideBarStatus } = useContext(sideBarContext)
    const [t, i18n] = useTranslation()
    const { isRTL, toggleLayoutDirection } = useLayoutDirection();
    return (
        <>
         
        <div className={`${sidebar.body}`}>
                <div className={`${sideBarStatus == false ? `${sidebar.closeSidebarRtl}` : `${sidebar.openSidebarRtl}`}`}>
                    <div className={`${sidebar.ulContainer} container `}>
                        <ul>
                            <li className={`${sidebar.li}`}>{t('home')}</li>
                            <li className={`${sidebar.li}`}>{t('pricing')}</li>
                            <li className={`${sidebar.li}`}>{t('callsales')}  </li>
                        </ul>
                    </div>
                    <div className={`${sidebar.btnsContainer} container `}>
                        <button type="button" className={`${sidebar.button}`}>{t('SignUp')}</button>
                    </div>
                </div>
            </div>
           
          
        </> 
    );
}

export default Sidebar;
