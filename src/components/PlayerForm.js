import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayers, savePlayer, updateCurrentPlayerName, updateCurrentPlayerNum, startGame } from '../reducers/game';

class PlayerForm extends Component {

	handleInputChange = (evt) => {
		const name = evt.target.value;
		this.props.updateCurrentPlayerName(name);
	}

	handleSubmit = (evt) => {
		evt.preventDefault();
		const nextPlayer = this.props.currentPlayerNum === 1 ? 2 : 1;
		this.props.savePlayer(this.props.currentPlayerName, nextPlayer, this.props.players.length);
		this.props.updateCurrentPlayerNum(nextPlayer);
	}

	componentDidMount() {
		this.props.addPlayers(this.props.currentPlayerNum);
	}

	render() {
		return (
			this.props.players.length < 2 ?
				<form onSubmit={this.handleSubmit}>
					<input type="text" 
						onChange={this.handleInputChange}
						value={this.props.currentPlayerName}
						placeholder="Enter name of player"
					/>
				</form>
			:
			<button onClick={() => this.props.startGame(!this.props.startGameBool)}>Start</button>
		);
	}
}

const mapStateToProps = (state) => ({ currentPlayerName: state.game.currentPlayerName, currentPlayerNum: state.game.currentPlayerNum, players: state.game.players, startGameBool: state.game.startGame });
const mapDispatchToProps = { addPlayers, savePlayer, updateCurrentPlayerName, updateCurrentPlayerNum, startGame };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlayerForm);