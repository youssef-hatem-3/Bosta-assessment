import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBarContextProvider from './context/navBarContext';
import { LayoutDirectionProvider } from './context/reactContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <LayoutDirectionProvider>
      <NavBarContextProvider>
        <App />
      </NavBarContextProvider>
    </LayoutDirectionProvider>
  </React.Fragment>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
