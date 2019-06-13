import React from "react";
import axios from "axios";
import "./App.css";
import FriendList from "./components/FriendList";
import BecomeFriendForm from "./components/BecomeFriendForm";
// import UpdateForm from "./components"

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
    });
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };



  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <FriendList friends={this.state.friends} deleteFriend={this.deleteFriend} />
        <BecomeFriendForm addFriend={this.addFriend} />
        {/* <UpdateForm {...props}
        updateFriend={this.updateFriend}
        updatedFriend={this.state.updatedFriend} /> */}
      </div>
    );
  }
}

export default App;
