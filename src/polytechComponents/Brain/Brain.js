import { Container, Row, Col, Media, ListGroup, Card, Button } from "react-bootstrap";

const Brain = () => {
	return (<div>
		<Container>
			<Row>
				<Col md="12">
					<Media className="m-3">
						<img
							width={150}
							height={150}
							className="mr-3"
							src="https://www.sciencenews.org/wp-content/uploads/2020/04/040920_ls_review-brain_feat-1028x579.jpg" />
						<Media.Body>
							<h5>Память</h5>
							<p>Ohhh ho ho. When i get start my work in
							the best company of the world i will be very happy!!!
								See youuuUUuUUuuuUuuu </p>
							<Button variant="primary">Перейти</Button>
						</Media.Body>
					</Media>

					<Media className="m-3">
						<img
							width={150}
							height={150}
							className="mr-3"
							src="https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098258210-W9FBV72SMJJX3LESUA7Z/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/js.jpg?format=2500w"
						/>
						<Media.Body>
							<h5>Развите логики</h5>
							<p>Ohhh ho ho. When i get start my work in
							the best company of the world i will be very happy!!!
								See youuuUUuUUuuuUuuu </p>
							<Button variant="primary">Перейти</Button>
						</Media.Body>
					</Media>

					<Media className="m-3">
						<img
							width={150}
							height={150}
							className="mr-3"
							src="https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098258210-W9FBV72SMJJX3LESUA7Z/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/js.jpg?format=2500w"
						/>
						<Media.Body>
							<h5>Скорость чтения</h5>
							<p>Ohhh ho ho. When i get start my work in
							the best company of the world i will be very happy!!!
								See youuuUUuUUuuuUuuu </p>
							<Button variant="primary">Перейти</Button>
						</Media.Body>
					</Media>
				</Col>
			</Row>

		</Container>
	</div>
	)
};

export default Brain;