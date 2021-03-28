import { Container, Row, Col, Media, Button } from "react-bootstrap";
import image from "../../assets/Group.png"
const BrainItems = () => {

	return (<div>
		<Container>
			<Row>
				<Col md="12">
					<Media className="m-3">
						<img
							width={150}
							height={150}
							className="mr-3"
							src={image} />
						<Media.Body>
							<h5>Brain</h5>
							<Button variant="primary" >Перейти</Button>
						</Media.Body>
					</Media>
					<Media className="m-3">
						<img
							width={150}
							height={150}
							className="mr-3"
							src={image} />
						<Media.Body>
							<h5>Brain</h5>
							<Button variant="primary" >Перейти</Button>
						</Media.Body>
					</Media>
					<Media className="m-3">
						<img
							width={150}
							height={150}
							className="mr-3"
							src={image} />
						<Media.Body>
							<h5>Brain</h5>
							<Button variant="primary" >Перейти</Button>
						</Media.Body>
					</Media>
					<Media className="m-3">
						<img
							width={150}
							height={150}
							className="mr-3"
							src={image} />
						<Media.Body>
							<h5>Brain</h5>
							<Button variant="primary" >Перейти</Button>
						</Media.Body>
					</Media>
					<Media className="m-3">
						<img
							width={150}
							height={150}
							className="mr-3"
							src={image} />
						<Media.Body>
							<h5>Brain</h5>
							<Button variant="primary" >Перейти</Button>
						</Media.Body>
					</Media>
				</Col>
			</Row>
		</Container>
	</div>
	)
};

export default BrainItems;