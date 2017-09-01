import React from 'react';
import { connect } from 'react-redux';

const Message = (props) => (
	props.message 
		? <span className='message'>{props.message}</span>
		: null
);

const mapStateToProps = (state) => ({ message: state.message });

export default connect(
	mapStateToProps
)(Message);