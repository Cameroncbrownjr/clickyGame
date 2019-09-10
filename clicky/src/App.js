import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import clickables from "./clickables.json";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    clickables,
    score: 0,
    clicked: [],
  };

  scoreTracking = () => {
    this.setState({ score: this.state.score + 1 });
  };

  lastTracking = (id) => {
    console.log(this.state.clicked)
    const array = this.state.clicked
    if (array.indexOf(id) > -1) {
      this.setState({ score: 0 })
      this.setState({ clicked: [] })
    }
    else {
      this.setState({ clicked: array.concat(id) })
    }
  };


  render() {
    return (
      <div>
        <Navbar score={this.state.score} />
        <Wrapper>
          {
            this.state.clickables.sort(() => Math.random() - 0.5).map(friend => (
              <FriendCard
                scoreTracking={this.scoreTracking}
                lastTracking={this.lastTracking}
                id={friend.id}
                key={friend.id}
                image={friend.image}
              />
            ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
