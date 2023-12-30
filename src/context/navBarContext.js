import { createContext, useState } from "react";

export let navBarContext = createContext();

export default function NavBarContextProvider(props) {

    const [navBarStatus, setNavBarStatus] = useState(false);
    const [navBarlanguage, setNavBarLanguage] = useState(false);

    function changenavBarStatus() {
        if (navBarStatus == true) {
            setNavBarStatus(false)
            console.log(navBarStatus);
        } else {
            setNavBarStatus(true)
            console.log(navBarStatus);
        }
        
    }
    function changeLanguageStatus() {
        if (navBarlanguage == true) {
            setNavBarLanguage(false)
            console.log(navBarlanguage);
        } else {
            setNavBarLanguage(true)
            console.log(navBarlanguage);
        }
        
    }

    return <navBarContext.Provider value={{ navBarStatus, changenavBarStatus , navBarlanguage , changeLanguageStatus }}>
        {props.children} 
    </navBarContext.Provider>
}