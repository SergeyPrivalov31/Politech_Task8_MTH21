
import React from "react";
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';


const About = () => {
	return (
		<Container>
			<Tab.Container>
				<Row>
					<Col sm={3}>
						<Nav variant="pills" className="flex-column mt-2">
							<Nav.Item>
								<Nav.Link eventKey="first">Design</Nav.Link>
								<Nav.Link eventKey="second">Team</Nav.Link>
								<Nav.Link eventKey="third">Programming</Nav.Link>
								<Nav.Link eventKey="fourth">Freamworks</Nav.Link>
								<Nav.Link eventKey="fifth">Libreries</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content className="mt-3">
							<Tab.Pane eventKey="first">
								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRbngTWTTOM81-bi8Yxwr3kPp7uR8hXOAsydWK0G37chVy2xTAYGxDbaj3gk6OlrI-_Q&usqp=CAU" />
								<p>Some text e moe hochu uzhe scoree rabotat'</p>
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<img src="https://rampaga.ru/_sf/224/10622952.jpg" />
								<p>Some text e moe hochu uzhe scoree rabotat'</p>
							</Tab.Pane>
							<Tab.Pane eventKey="third">
								<img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/104765411/original/7b2a30b4eb2ed04d9a475f505d2c0db7e78b9dbb/do-your-programming-backend-or-frontend.jpeg" />
								<p>Some text e moe hochu uzhe scoree rabotat'</p>
							</Tab.Pane>
							<Tab.Pane eventKey="fourth">
								<img src="https://miro.medium.com/max/1100/1*Q2t-jgIzVx_w1Cyy1YlbNw.png" />
								<p>Some text e moe hochu uzhe scoree rabotat'</p>
							</Tab.Pane>
							<Tab.Pane eventKey="fifth">
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
export default About;