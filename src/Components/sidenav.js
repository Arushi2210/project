import React from 'react';
import "../styles/sidenav.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import logosmall from '../Images/logosmall.png';

export const Sidenav = () => {
   const mystyle = {
      
      height:"40px",
      marginRight:"20px",
    
      
    };
  return (
    <div className='navv' style={{}}>
      <CDBSidebar textColor="#fff" backgroundColor="#333" position="fix">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          <img style={mystyle}
            src={logosmall}/>
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/clientlist" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Client List</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/addclient" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus">Add New Client</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/profileadv" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div style={{ padding: '20px 5px' }}>Sign Out</div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
