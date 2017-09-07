import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayers, savePlayer, updateCurrentPlayerName, updateCurrentPlayerNum, startGame } from '../reducers/addPlayers';

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
			<div className="form">
				{
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
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ currentPlayerName: state.addPlayers.currentPlayerName, currentPlayerNum: state.addPlayers.currentPlayerNum, players: state.addPlayers.players, startGameBool: state.addPlayers.startGame });
const mapDispatchToProps = { addPlayers, savePlayer, updateCurrentPlayerName, updateCurrentPlayerNum, startGame };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlayerForm);