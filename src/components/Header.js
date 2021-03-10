import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap';
import logo from "../components/lunatiki.png";

class Header extends Component {

	render() {

		return (
			<>
				<Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark" >
					<Container>
						<Navbar.Brand href="/">
							<img
								src={logo}
								height="30"
								width="30"
								className="d-inline-block align-top"
								alt="logo"
							/>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="/"> Home </Nav.Link>
								<Nav.Link href="/about"> About us </Nav.Link>
								<Nav.Link href="/contacts"> Contacts </Nav.Link>
								<Nav.Link href="/blog"> Blog </Nav.Link>
							</Nav>
							<Form inline>
								<FormControl
									type="text"
									placeholder="Serch"
									className="mr-sm-2"
								/>
								<Button variant="outline-info">Search</Button>
							</Form>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</>
		)
	}
}
export default Header;