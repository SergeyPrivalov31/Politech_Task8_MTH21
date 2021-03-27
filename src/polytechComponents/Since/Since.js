import { Container, Row, Col, Media, ListGroup, Card } from "react-bootstrap";

const Since = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col md="9">
						<Media className="m-5">
							<img
								width={150}
								height={150}
								className="mr-3"
								src="https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098258210-W9FBV72SMJJX3LESUA7Z/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/js.jpg?format=2500w"
							/>
							<Media.Body>
								<h5>Blog post</h5>
								<p>Ohhh ho ho. When i get start my work in
								the best company of the world i will be very happy!!!
								See youuuUUuUUuuuUuuu </p>
							</Media.Body>
						</Media>

						<Media className="m-5">
							<img
								width={150}
								height={150}
								className="mr-3"
								src="https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098258210-W9FBV72SMJJX3LESUA7Z/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/js.jpg?format=2500w"
							/>
							<Media.Body>
								<h5>Blog post</h5>
								<p>Ohhh ho ho. When i get start my work in
								the best company of the world i will be very happy!!!
								See youuuUUuUUuuuUuuu </p>
							</Media.Body>
						</Media>

						<Media className="m-5">
							<img
								width={150}
								height={150}
								className="mr-3"
								src="https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098258210-W9FBV72SMJJX3LESUA7Z/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/js.jpg?format=2500w"
							/>
							<Media.Body>
								<h5>Blog post</h5>
								<p>Ohhh ho ho. When i get start my work in
								the best company of the world i will be very happy!!!
								See youuuUUuUUuuuUuuu </p>
							</Media.Body>
						</Media>
					</Col>
					<Col md="3">
						<h5 className="text-center mt-5">Разделы</h5>
						<Card>
							<ListGroup varint="flush">
								<ListGroup.Item>Html/Css</ListGroup.Item>
								<ListGroup.Item>JavaScript</ListGroup.Item>
								<ListGroup.Item>React</ListGroup.Item>
								<ListGroup.Item>.NET</ListGroup.Item>
								<ListGroup.Item>Java</ListGroup.Item>
							</ListGroup>
						</Card>

						<Card className="mt-3" bg="light">
							<Card.Body>
								<Card.Title>Side widget</Card.Title>
								<Card.Text>
									Ohhh ho ho. When i get start my work in
									the best company of the world i will be very happy!!!
									See youuuUUuUUuuuUuuu
							</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>

			</Container>
		</div>
	)
};

export default Since;