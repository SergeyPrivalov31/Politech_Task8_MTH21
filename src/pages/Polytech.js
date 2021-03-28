
import React from "react";
import { Container, Tab, Nav, Row, Col, CardDeck, Card } from 'react-bootstrap';
import BrainContainer from "../polytechComponents/Brain/BrainContainer.js";
import Since from "../polytechComponents/Since/Since.js";
import Digital from "../polytechComponents/digitalUniverse/Digital.js";
import image from "../assets/scheme.png"

const Polytech = () => {
	return (
		<Container>
			<Tab.Container>
				<Row>
					<Col sm={3}>
						<Nav variant="pills" className="flex-column mt-2">
							<Nav.Item>
								<Nav.Link eventKey="first">Мозг</Nav.Link>
								<Nav.Link eventKey="second">Наука</Nav.Link>
								<Nav.Link eventKey="third">Цыфровая вселенная</Nav.Link>
								<Nav.Link eventKey="fourth">Энергия</Nav.Link>
								<Nav.Link eventKey="fifth"> Язык / Коммуникация </Nav.Link>
								<Nav.Link eventKey="six">Человек</Nav.Link>
								<Nav.Link eventKey="seven">Жизнь</Nav.Link>
								<Nav.Link eventKey="eight">Вселенная</Nav.Link>
								<Nav.Link eventKey="nine">Материалы</Nav.Link>
								<Nav.Link eventKey="ten">Материя</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>

						<CardDeck className="m-4">
							<Card border="info">
								<Card.Img
									variant=""
									src={image}
								/>
							</Card>
						</CardDeck>

						<Tab.Content className="mt-3">
							<Tab.Pane eventKey="first">
								<BrainContainer />
							</Tab.Pane>

							<Tab.Pane eventKey="second">
								<Since />
							</Tab.Pane>

							<Tab.Pane eventKey="third">
								<Digital />
							</Tab.Pane>


							<Tab.Pane eventKey="fourth">
								<img src="https://miro.medium.com/max/1100/1*Q2t-jgIzVx_w1Cyy1YlbNw.png" />
								<p>Some text e moe hochu uzhe scoree rabotat'</p>
							</Tab.Pane>
							<Tab.Pane eventKey="fifth">
								<img src="https://miro.medium.com/max/2700/1*XhfT2DJusFhOA-XH5Lxc8g.jpeg" />
								<p>Some text e moe hochu uzhe scoree rabotat'</p>
							</Tab.Pane>
							<Tab.Pane eventKey="six">
								<img src="https://miro.medium.com/max/2700/1*XhfT2DJusFhOA-XH5Lxc8g.jpeg" />
								<p>Some text e moe hochu uzhe scoree rabotat'</p>
							</Tab.Pane>
							<Tab.Pane eventKey="seven">
								<img src="https://miro.medium.com/max/2700/1*XhfT2DJusFhOA-XH5Lxc8g.jpeg" />
								<p>Some text e moe hochu uzhe scoree rabotat'</p>
							</Tab.Pane>
							<Tab.Pane eventKey="eight">
								<img src="https://miro.medium.com/max/2700/1*XhfT2DJusFhOA-XH5Lxc8g.jpeg" />
								<p>Some text e moe hochu uzhe scoree rabotat'</p>
							</Tab.Pane>
							<Tab.Pane eventKey="nine">
								<img src="https://miro.medium.com/max/2700/1*XhfT2DJusFhOA-XH5Lxc8g.jpeg" />
								<p>Some text e moe hochu uzhe scoree rabotat'</p>
							</Tab.Pane>
							<Tab.Pane eventKey="ten">
								<img src="https://miro.medium.com/max/2700/1*XhfT2DJusFhOA-XH5Lxc8g.jpeg" />
								<p>Some text e moe hochu uzhe scoree rabotat'</p>
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</Container>
	)
}

export default Polytech;