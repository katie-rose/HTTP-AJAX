import React from "react";
import Friend from "./Friend";

const FriendList = props => (
  <div className="friends-list">
    {props.friends.map(friend => (
      <Friend 
      deleteFriend={props.deleteFriend} 
      friend={friend} key={friend.id}/>
    ))}
  </div>
);

export default FriendList;
