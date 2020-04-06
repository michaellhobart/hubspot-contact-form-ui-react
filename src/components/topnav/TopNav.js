import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
} from 'reactstrap';

const TopNav = (props) => {

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand >
            <img src="https://blog.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png" alt="Hubspot Logo" style={{maxHeight:"30px"}}/>
        </NavbarBrand>
          <Nav className="mr-auto" navbar>
          </Nav>
          <NavLink href="https://github.com/reactstrap/reactstrap" style={{color:'#c1c1c1'}}>Github</NavLink>
      </Navbar>
    </div>
  );
}

export default TopNav;
