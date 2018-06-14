import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selected: 0,
      votes: {
        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0
      }
    }
  }

  handleNextClick = () => {
    const arvottu = Math.floor(Math.random() * this.props.anecdotes.length);
    this.setState({
      selected: arvottu
    })
  }

  handleVoteClick = () => {
    const copyofVotes = {...this.state.votes};
    copyofVotes[this.state.selected] += 1;
    this.setState({
      votes: copyofVotes
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p>has {this.state.votes[this.state.selected]} votes</p>
        <p>
          <button 
            onClick={this.handleVoteClick}>
            vote
          </button>
          <button 
            onClick={this.handleNextClick}>
            next anecdote
          </button>
        </p>
      </div>
    );
  }
}

export default App;
