import React, { useEffect } from 'react';
import { Container, Row, Col, Media, Button } from "react-bootstrap";
<<<<<<< HEAD
import image from "../../assets/Group.png"
import { getVertexes } from "../../api/api.js"
=======
import {getVertexes} from "../../api/api";
>>>>>>> df8d5197485e061cde87f85d939f8a2da77b2f6c

const BrainItems = (props) => {

	return (<div>
		<Container>
			<Row>
<<<<<<< HEAD
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

=======
				<Col md="12">
					<Media className="m-3">
						<img
							width={150}
							height={150}
							className="mr-3"
							src="https://www.sciencenews.org/wp-content/uploads/2020/04/040920_ls_review-brain_feat-1028x579.jpg" />
						<Media.Body>
							<h5>Brain</h5>
							<Button variant="primary" onClick={async () => {
								const result = await getVertexes()
								console.log(result);
							}}>Перейти</Button>
						</Media.Body>
					</Media>
					<Media className="m-3">
						<img
							width={150}
							height={150}
							className="mr-3"
							src="https://www.sciencenews.org/wp-content/uploads/2020/04/040920_ls_review-brain_feat-1028x579.jpg" />
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
							src="https://www.sciencenews.org/wp-content/uploads/2020/04/040920_ls_review-brain_feat-1028x579.jpg" />
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
							src="https://www.sciencenews.org/wp-content/uploads/2020/04/040920_ls_review-brain_feat-1028x579.jpg" />
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
							src="https://www.sciencenews.org/wp-content/uploads/2020/04/040920_ls_review-brain_feat-1028x579.jpg" />
						<Media.Body>
							<h5>Brain</h5>
							<Button variant="primary" >Перейти</Button>
						</Media.Body>
					</Media>
>>>>>>> df8d5197485e061cde87f85d939f8a2da77b2f6c
				</Col>
			</Row>
		</Container>
	</div >
	)
};

export default BrainItems;