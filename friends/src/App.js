import React from "react";
import axios from "axios";
import "./App.css";
import FriendList from "./components/FriendList";
import BecomeFriendForm from "./components/BecomeFriendForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends/")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.error("ERROR", err);
      });
  }

  addFriend = (e, friendInput) => {
    e.preventDefault();
    const newFriend = {
      name: friendInput.name, 
      age: friendInput.age, 
      email: friendInput.email
    };
    this.setState({
      friends: [...this.state.friends, newFriend]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <FriendList friends={this.state.friends} />
        <BecomeFriendForm addFriend={this.addFriend} />
      </div>
    );
  }
}

export default App;
