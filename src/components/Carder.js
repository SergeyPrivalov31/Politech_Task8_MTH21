import React from 'react';
import { Card, CardDeck, Button, Container } from 'react-bootstrap';


const Carder = () => {
	return (
		<Container>
			<h2 className="text-center m-4">Our team</h2>
			<CardDeck className="m-4">
				<Card border="info">
					<Card.Img
						variant="top"
						src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
					<Card.Body>
						<Card.Title>Developers</Card.Title>
						<Card.Text>
							Some text abut my life and my skills my day. I real wont to start my job at best company in Moscow. Ha Ha HA!!!
						</Card.Text>
						<Button variant="primary">About team</Button>
					</Card.Body>
				</Card>
				<Card bg="info">
					<Card.Body>
						<Card.Title>Developers</Card.Title>
						<Card.Text>
							Some text abut my life and my skills my day. I real wont to start my job at best company in Moscow. Ha Ha HA!!!
						</Card.Text>
						<Button variant="primary">About team</Button>
					</Card.Body>
					<Card.Img
						variant="bottom"
						src="https://images.pexels.com/photos/3785935/pexels-photo-3785935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					/>
				</Card>
				<Card border="info">
					<Card.Img
						variant="top"
						src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
					<Card.Body>
						<Card.Title>Developers</Card.Title>
						<Card.Text>
							Some text abut my life and my skills my day. I real wont to start my job at best company in Moscow. Ha Ha HA!!!
						</Card.Text>
						<Button variant="primary">About team</Button>
					</Card.Body>
				</Card>
			</CardDeck>
		</Container>
	)
}
export default Carder;