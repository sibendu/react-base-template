import React , { useState } from 'react';

import { Link } from "react-router-dom";

function Header(props) { 

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
      };
    
    const linkStyleBlack = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
      };  

    const alerts = [
        {"id":23312, "date": "Mar 12, 2021", "text": "Sample message 1"},
        {"id":23313, "date": "Mar 11, 2021", "text": "Sample message 2"}
    ]; 

    return (

        <div id="layoutDrawer_top">

        <nav className="top-app-bar navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid px-4">

                <button className="btn btn-lg btn-icon order-1 order-lg-0" id="drawerToggle" href="#"><i className="material-icons">menu</i></button>

                <a className="navbar-brand me-auto" href="#"><div className="text-uppercase font-monospace">COMS Portal</div></a>

                <div className="d-flex align-items-center mx-3 me-lg-0">

                    <ul className="navbar-nav d-none d-lg-flex">
                        <Link to="preferences" style={linkStyle}>Overview</Link>
                    </ul>
                    <ul className="navbar-nav d-none d-lg-flex">
                        <Link to="settings" style={linkStyle}>Setting</Link>
                    </ul>

                    <div className="d-flex">
                        <div className="dropdown dropdown-notifications d-none d-sm-block">

                            <button className="btn btn-lg btn-icon dropdown-toggle me-3" id="dropdownMenuNotifications" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">notifications</i></button>

                            <ul className="dropdown-menu dropdown-menu-end me-3 mt-3 py-0 overflow-hidden" aria-labelledby="dropdownMenuNotifications">
                                <li key="keyAlerts"><h6 className="dropdown-header bg-primary text-white fw-500 py-3">Alerts</h6></li>
                                {   
                                    React.Children.toArray(
                                        alerts.map(({ id, date, text }) => 
                                            <>  
                                            <li>
                                                <a className="dropdown-item unread" href="#!">
                                                    <div className="dropdown-item-content">
                                                        <div className="dropdown-item-content-subtext">{date} · {text}</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li><hr className="dropdown-divider my-0" /></li>
                                            </>
                                        )
                                    )    
                                }
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-lg btn-icon dropdown-toggle" id="dropdownMenuProfile" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {
                                     props.user?
                                     <i className="material-icons">person</i> :
                                     <i className="material-icons">login</i>
                                }
                            </button>

                            {
                                 props.user?
                                    <ul className="dropdown-menu dropdown-menu-end mt-3" aria-labelledby="dropdownMenuProfile">
                                        <li key="keyProfile">
                                            <a className="dropdown-item" href="!#">
                                                <i className="material-icons leading-icon">person</i>
                                                <Link to="settings" style={linkStyleBlack}>Setting</Link>
                                            </a>
                                        </li>
                                        <li key="keyPref">
                                            <a className="dropdown-item" href="!#">
                                                <i className="material-icons leading-icon">settings</i>
                                                <Link to="preferences" style={linkStyleBlack}>Preferences</Link>
                                            </a>
                                        </li>
                                        <li key="keyHelp">
                                            <a className="dropdown-item" href="https://www.google.com" target="_blank" rel="noreferrer">
                                                <i className="material-icons leading-icon">help</i>
                                                <div className="me-3">Help</div>
                                            </a>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li key="keyLogout">
                                            <a className="dropdown-item" href="#!"  onClick={() => props.onLogout()}>
                                                <i className="material-icons leading-icon">logout</i>
                                                <div className="me-3">Logout</div>
                                            </a>
                                        </li>
                                    </ul>
                            :
                            <ul className="dropdown-menu dropdown-menu-end mt-3" aria-labelledby="dropdownMenuProfile">
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
                            
        </div>                    
    );
}
export default Header;