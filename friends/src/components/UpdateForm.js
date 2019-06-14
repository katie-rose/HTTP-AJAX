import React from "react";

class UpdateForm extends React.Component {
  render() {
    return (
      <Form className="form-container" onSubmit={e => {this.props.updateFriend(e, this.props.friend.id)}>
        <FormGroup className="form-wrapper">
          <h2>Update Friend:</h2>
          <Label>Name:</Label>
          <Input
            type="text"
            name="name2"
            placeholder="Hello, your name is:"
            onChange={this.handleChanges}
            value={this.props.updatedFriend.name}
          />
          <Label>Age: </Label>
          <Input
            type="text"
            name="age2"
            placeholder="How old are you?"
            onChange={this.handleChanges}
            value={this.props.updatedFriend.age}
          />
          <Label>E-Mail: </Label>
          <Input
            type="email"
            name="email2"
            placeholder="What is your email?"
            onChange={this.handleChanges}
            value={this.props.updatedFriend.email}
          />
          <Button>Update</Button>
        </FormGroup>
      </Form>
    );
  }
}


export default UpdateForm.js