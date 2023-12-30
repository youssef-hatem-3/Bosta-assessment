import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/navbar/navbar';
import SideBarContextProvider from './context/sideBarContext';
import ShipmentDetails from './components/shipmentDetails/ShipmentDetails';
import ShipmentDetailsContextProvider from './context/shipmentDetailsContext';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <>
      <ShipmentDetailsContextProvider>
        <SideBarContextProvider>
          <Navbar/>
          <ShipmentDetails/>
          <Sidebar/>
        </SideBarContextProvider>
      </ShipmentDetailsContextProvider>
    </>
  );
}

export default App;
