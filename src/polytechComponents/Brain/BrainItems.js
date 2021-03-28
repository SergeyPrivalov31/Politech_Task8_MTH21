import React, { useEffect } from 'react';
import { Container, Row, Col, Media, Button } from "react-bootstrap";
import image from "../../assets/Group.png"
import { getVertexes } from "../../api/api.js"

const BrainItems = (props) => {

	return (<div>
		<Container>
			<Row>
				<Col md="12" >
					{props.items.map((item, key) => {

						return <Media className="m-3">
							<img
								width={150}
								height={150}
								className="mr-3"
								src={image} />
							<Media.Body>
								<h5>{item.label}</h5>
								<Button >Перейти</Button>

							</Media.Body>
						</Media>

					})}

				</Col>
			</Row>
		</Container>
	</div >
	)
};

export default BrainItems;