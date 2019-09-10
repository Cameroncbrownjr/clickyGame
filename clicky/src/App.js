import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import clickables from "./clickables.json";

class App extends Component {
  state = {
    clickables
  };

  removeFriend = id => {
    const clickables = this.state.clickables.filter(item => item.id !== id);
    this.setState({ clickables });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Wrapper>
          {this.state.clickables.map(friend => (
            <FriendCard
              removeFriend={this.removeFriend}
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
