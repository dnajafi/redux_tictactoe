import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import PlayerForm from './components/PlayerForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Redux TicTacToe</h2>
        </div>

        <div>
          <p>Hello World!</p>
          <Message />

          {!this.props.gameStartBool ?
            <PlayerForm />
          :
            null
          }

          {
            this.props.gameStartBool ?
              <p>GameBoard</p>
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

