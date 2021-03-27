import React from 'react';
import Brain from "./Brain.js";
import { connect } from 'react-redux';
import { compose } from "redux";
import {
	requestBrains
} from '../../redux/brain-reducer';


export class BrainContainer extends React.Component {
	componentDidMount() {
		this.props.getBrains(currentPage, pageSize);
	}

	onPageChanged = (pageNumber) => {
		const { pageSize } = this.props;
		this.props.getUsers(pageNumber, pageSize);
	}
	render() {
		return <>
			<Brain title={this.props.title} text={this.props.text} />
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		brains: getBrains(state),
	}
}

export default compose(
	connect(mapStateToProps, { getBrains: requestBrains }))(BrainContainer);