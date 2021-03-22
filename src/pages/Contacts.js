import React, { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";

class Contacts extends Component {
	render() {
		return (
			<Container style={{ width: '500px' }}>
				<h1 className="text-center"> Contact us </h1>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text>
							We'll never share your email with anone else
						</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Example textarea</Form.Label>
						<Form.Control as="textarea" rows="3" />
					</Form.Group>

					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="primary" type="submit" >Submit</Button>

				</Form>
			</Container>
		)
	}
}
export default Contacts;