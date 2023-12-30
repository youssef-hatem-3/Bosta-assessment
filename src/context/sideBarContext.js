import { createContext, useState } from "react";

export let sideBarContext = createContext();

export default function SideBarContextProvider(props) {

    const [sideBarStatus, setsideBarStatus] = useState(false);

    function changeSideBarStatus() {
        if (sideBarStatus == true) {
            setsideBarStatus(false)
            console.log(sideBarStatus);
        } else {
            setsideBarStatus(true)
            console.log(sideBarStatus);
        }
        
    }

    return <sideBarContext.Provider value={{ sideBarStatus, changeSideBarStatus }}>
        {props.children} 
    </sideBarContext.Provider>
}