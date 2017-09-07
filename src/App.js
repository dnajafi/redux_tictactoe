import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import PlayerForm from './components/PlayerForm';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React/Redux TicTacToe</h2>
          <h5 className="builtBy">Built by Blaise Najafi</h5>
        </div>
        <div>
          <Message />
          {!this.props.gameStartBool ?
            <PlayerForm />
          :
            null
          }

          {
            this.props.gameStartBool ?
              <Board />
            :
              null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ gameStartBool: state.addPlayers.startGame });

export default connect(
  mapStateToProps
)(App);