import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} color="info">
        <NavbarBrand href="/">Cat Tinder</NavbarBrand>
        <NavbarText>Make those kitty dreams come true</NavbarText>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="http://localhost:3000/catindex">
                See all cats
              </NavLink>
              <NavLink href="http://localhost:3000/catshow">
                See one particularly nice cat
              </NavLink>
              <NavLink href="http://localhost:3000/catnew">
                Add your cat self to the list
              </NavLink>
              <NavLink href="http://localhost:3000/catedit">
                Update you cat profile
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header