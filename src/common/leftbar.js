import React , { useState ,useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

import MenuItem from './MenuItem';

function LeftBar(props) {

    const [userroles, setUserroles] = useState([]);

    const allMenuItems = [
        {'id':'home','title':'Dashboard', 'icon': 'fas fa-home', 'roles':['ADMIN','PROCESS_OWNER','EMPLOYEE']},
        {'id':'Task','title':'Task', 'icon': 'fas fa-briefcase', 'roles':['ADMIN','PROCESS_OWNER','EMPLOYEE','SUPERADMIN'],
            'subItems': [ 
                {'id':'tasks/new', 'title': 'New Task'}  ,
                {'id':'tasks/search', 'title': 'Search Task'}  ,
                {'id':'tasks/sample', 'title': 'Sample Form'},  
                {'id':'tasks/list', 'title': 'Tasks List'}  
            ]},
        {'id':'Customer', 'title':'Customer','icon': 'fas fa-briefcase',
            'subItems': [
                {'id':'customers/new', 'title': 'Add Customer','roles':['ADMIN','PROCESS_OWNER']},
                {'id':'customers/search', 'title': 'Search Customer','roles':['ADMIN','PROCESS_OWNER','EMPLOYEE']}   
            ]},
        {'id':'preferences','title':'Preferences',  'icon': 'fas fa-circle','roles':['ADMIN','PROCESS_OWNER','EMPLOYEE']}, 
        {'id':'settings','title':'Account Settings',  'icon': 'fas fa-user','roles':['SUPERADMIN']},               
        {'id':'sample','title':'Sample Page', 'icon': 'fas fa-home', 'roles':['ADMIN','PROCESS_OWNER','EMPLOYEE']}        
    ];

    const menuItems = allMenuItems;

    useEffect(() => {       
    }); 

    return (
        <div id="layoutDrawer_nav">
               
                <nav className="drawer accordion drawer-light bg-white" id="drawerAccordion">
                    <div className="drawer-menu">
                        <div className="nav">
                           
                            <div className="drawer-menu-divider d-sm-none"></div>
                           
                            <div className="drawer-menu-heading"></div>

                            {
                                menuItems.map(item => {
                                    return (  
                                        <MenuItem key={item.id} item={item}/>
                                  )  
                                })
                            }             
                            
                        </div>
                    </div>
                
                </nav>
            </div>
    )
}
export default LeftBar;