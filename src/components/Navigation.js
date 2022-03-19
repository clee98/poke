import React from "react"
import { Navbar, NavDropdown, Nav } from "react-bootstrap"
import Search from "./Search"

const Navigation = ({ pokemon, selectPoke }) => {
  return (
    // <div className="Navigation">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Poke</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Search pokemon={pokemon} selectPoke={selectPoke} />
      </Navbar.Collapse>
    </Navbar>
    // </div>
  )
}
export default Navigation
