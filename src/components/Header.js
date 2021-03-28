import React from 'react';
import {
	Navbar,
	Nav,
	FormControl,
	Container,
	Form,
	Button
} from 'react-bootstrap';
import logo from "../assets/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Polytech from '../pages/Polytech';

class Header extends React.Component {
	render() {
		return (
			<div>
				<Navbar collapseOnSelect expand="md" bg="blue" variant="blue" >
					<Container>
						<Navbar.Brand href="/">
							<img
								src={logo}
								height="44"
								width="149"
								className="d-inline-block align-top"
								alt="logo"
							/>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">

							<Nav className="mr-auto">
								<Nav.Link href="/">  </Nav.Link>
							</Nav>

						</Navbar.Collapse>
					</Container>
				</Navbar>

				<Router>
					<Switch>

						<Route exact path="/" component={Polytech} />

					</Switch>
				</Router>
			</div>
		)
	}
}
export default Header;