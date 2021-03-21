import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from '../assets/soty.png';
import image2 from '../assets/17.png';


const CouruselBox = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={image}
					alt="Soty"
				/>
				<Carousel.Caption>
					<h3>Image</h3>
					<p>Some text</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={image2}
					alt="Soty"
				/>
				<Carousel.Caption>
					<h3>Image</h3>
					<p>Some text</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={image}
					alt="Soty"
				/>
				<Carousel.Caption>
					<h3>Image</h3>
					<p>Some text</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}
export default CouruselBox;