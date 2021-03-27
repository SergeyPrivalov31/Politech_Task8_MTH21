import React from 'react';
import { Card, CardDeck, Button, Container } from 'react-bootstrap';


const Carder = () => {
	return (
		<Container>
			<h2 className="text-center m-4">Направления</h2>
			<CardDeck className="m-4">

				<Card border="info">
					<Card.Img
						variant=""
						src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
					<Card.Body>
						<Card.Title>Наука</Card.Title>
						<Card.Text>
							Some text
						</Card.Text>
						<Button variant="primary">Перейти</Button>
					</Card.Body>
				</Card>
				<Card border="info">
					<Card.Img
						variant="top"
						src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
					<Card.Body>
						<Card.Title>Наука</Card.Title>
						<Card.Text>
							Some text
						</Card.Text>
						<Button variant="primary">Перейти</Button>
					</Card.Body>
				</Card>
			</CardDeck>

			<CardDeck className="m-4">

				<Card border="info">
					<Card.Img
						variant="top"
						src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
					<Card.Body>
						<Card.Title>Наука</Card.Title>
						<Card.Text>
							Some text
						</Card.Text>
						<Button variant="primary">Перейти</Button>
					</Card.Body>
				</Card>
				<Card border="info">
					<Card.Img
						variant="top"
						src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
					<Card.Body>
						<Card.Title>Наука</Card.Title>
						<Card.Text>
							Some text
						</Card.Text>
						<Button variant="primary">Читать</Button>
					</Card.Body>
				</Card>

			</CardDeck>
		</Container>
	)
}
export default Carder;