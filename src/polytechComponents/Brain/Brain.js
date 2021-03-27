import { Container, Row, Col, Media, ListGroup, Card, Button } from "react-bootstrap";

const Brain = (props) => {
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
							<h5>{props.title}</h5>
							<p>{props.text}</p>
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