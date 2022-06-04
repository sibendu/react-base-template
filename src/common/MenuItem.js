import React from 'react';

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";  
import styled from "styled-components";

export default function MenuItem(props) {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
      };

      const StyledLink = styled(Link)`
            color: black;
            text-decoration: none;
            margin: 3px .8rem;
            font-size: 0.9rem;
            padding: 5px;
            position: relative;
            `;

      const NavUnlisted = styled.ul`
                //display: flex;
                a {
                    text-decoration: none;
                }
                li {
                    color: black;
                    margin: 3px .8rem;
                    padding: 5px;                    
                    font-size: 0.9rem;
                    position: relative;
                    list-style: none;
                }
                .current {
                    li {
                        border-bottom: 2px solid blue;
                        color: blue;
                    }
                }
            `;  

    const {item} = props;
    
    const dataBsTarget = { 'data-bs-target': '#collapse'+item.id};
    const ariaControls = { 'aria-controls': 'collapse'+item.id};
    const submenuId = { 'id': 'collapse'+item.id};
    
    if(item.subItems){
        return (        
            <>
        
        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" {...dataBsTarget} aria-expanded="false" {...ariaControls}>
            <div className="nav-link-icon"><i className="material-icons">view_compact</i></div>
            {item.title}
            <div className="drawer-collapse-arrow"><i className="material-icons">expand_more</i></div>
        </a>
        
        <div className="collapse" {...submenuId} aria-labelledby="headingOne" data-bs-parent="#drawerAccordion">
            <nav className="drawer-menu-nested nav">
            <NavUnlisted>    
            {
                item.subItems.map((submenu, index) => {
                    return(   
                        <NavLink key={index} to={submenu.id} activeClassName="current" exact>
                            <li>{submenu.title}</li>
                        </NavLink>   
                    );
                })
            }
            </NavUnlisted>    
            </nav>
        </div>

            </>
        );
    }else{
        return (
            <NavUnlisted>
                <StyledLink to={item.id}>{item.title}</StyledLink>
            </NavUnlisted>  
        );    
    }    			
 }