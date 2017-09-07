import React, { Component } from 'react';
import { connect } from 'react-redux';
import { takeTurn, updatePlayer, updateMessage, staleMate, gameIsOver } from '../reducers/game';
import { startNewGame } from '../reducers/addPlayers';

const Square = (props) => {
	  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends Component {
	
	renderSquare(row, column) {
		let elem = this.props.board[row][column];

		return(
			<Square value={elem} onClick={() => this.props.takeTurn(row, column, this.props.board, this.props.currPlayerSymbol, this.props.currPlayerName)} />
		);
	}

	componentDidUpdate() {
		if(!this.props.gameOver) {
			if(this.props.moveCount < 10) {
				if(this.props.moveCount === 9) {
					this.props.staleMate();
				} else {
					this.props.updateMessage(this.props.currPlayerName);
				}
			}	else if(this.props.moveCount >= 10) {
				this.props.gameIsOver();
			}
		} 
	}

	componentDidMount() {
		this.props.updateMessage(this.props.currPlayerName);
	}

	render() {
		return(
			<div>
				<div className="board">
					<div className="row">
						<div>{this.renderSquare(0, 0)}</div>
						<div>{this.renderSquare(0, 1)}</div>
						<div>{this.renderSquare(0, 2)}</div>
					</div>
					<div className="row">
						<div>{this.renderSquare(1, 0)}</div>
						<div>{this.renderSquare(1, 1)}</div>
						<div>{this.renderSquare(1, 2)}</div>
					</div>
					<div className="row">
						<div>{this.renderSquare(2, 0)}</div>
						<div>{this.renderSquare(2, 1)}</div>
						<div>{this.renderSquare(2, 2)}</div>
					</div>
				</div>

				{this.props.gameOver ?
					<button className="startNewGame" onClick={() => this.props.startNewGame()}>Start New Game</button>
				:
					null
			 	}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ board: state.game.board, currPlayerName: state.addPlayers.players[state.game.currentPlayer - 1], currPlayerSymbol: state.game.playerSymbols[state.game.currentPlayer - 1], gameOver: state.game.gameOver, moveCount: state.game.moveCount });
const mapDispatchToProps = { takeTurn, updatePlayer, updateMessage, staleMate, gameIsOver, startNewGame };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);