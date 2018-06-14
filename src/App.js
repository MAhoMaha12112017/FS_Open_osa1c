import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selected: 0,
      votes: [0,0,0,0,0,0]
    }
  }

  handleNextClick = () => {
    const arvottu = Math.floor(Math.random() * this.props.anecdotes.length);
    this.setState({
      selected: arvottu
    })
  }

  handleVoteClick = () => {
    const copyofVotes = [...this.state.votes];
    copyofVotes[this.state.selected] += 1;
    this.setState({
      votes: copyofVotes
    })
  }

  mostVotes = () => {
    let biggest = -1;
    let indexOfBiggest = -1;
    this.state.votes.forEach((vote, index) => {
      if (vote > biggest) {
        biggest = vote;
        indexOfBiggest = index;
      }
    })
    return indexOfBiggest;
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
        <p>anecdote with most votes</p>
        <p>{this.props.anecdotes[this.mostVotes()]}</p>
      </div>
    );
  }
}

export default App;
