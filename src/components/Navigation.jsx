import react from 'react';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';
import Search from './Search.jsx';

class Navigation extends react.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   pokemon: props.pokemon
    // }
    // console.log(props);
  }

  componentDidMount() {
  }


  render(props) {
    return (
      // <div className="Navigation">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Search pokemon={this.props.pokemon}/>
          </Navbar.Collapse>
        </Navbar>
      // </div>
    );
  }
}
export default Navigation;