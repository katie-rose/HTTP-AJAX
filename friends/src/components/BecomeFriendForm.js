import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class BecomeFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendInput: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  handleChanges = e => {
    this.setState({
      friendInput: {
        ...this.state.friendInput,
        [e.target.name]: e.target.value
      }
    });
  };

  submitFriend = e => {
    this.props.addFriend(e, this.state.friendInput);
    this.setState({ friendInput: { name: "", age: "", email: "" } });
  };

  render() {
    return (
      <Form className="form-container" onSubmit={this.submitFriend}>
        <FormGroup className="form-wrapper">
          <h2>Add New Friend:</h2>
          <Label>Name:</Label>
          <Input
            type="text"
            name="name"
            placeholder="Hello, your name is:"
            onChange={this.handleChanges}
            value={this.state.friendInput.age}
          />
          <Label>Age: </Label>
          <Input
            type="text"
            name="age"
            placeholder="How old are you?"
            onChange={this.handleChanges}
            value={this.state.friendInput.age}
          />
          <Label>E-Mail: </Label>
          <Input
            type="email"
            name="email"
            placeholder="What is your email?"
            onChange={this.handleChanges}
            value={this.state.friendInput.email}
          />
          <Button>Become Friends!</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default BecomeFriendForm;
