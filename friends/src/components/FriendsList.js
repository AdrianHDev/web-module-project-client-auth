import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);
  const history = useHistory()
  const handleClick = (ev) => {
    ev.preventDefault();
    history.push(`/friends/${ev.target.name}`);
  };

  const getFriends = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        setFriends(res.data);
      });
  };

  const navToAdd = (ev) => {
    ev.preventDefault();
    history.push('/addFriend');
  }

  useEffect(getFriends, []);
  return (
    <div>
      {friends.map((friend) => {
        return (
          <a onClick={handleClick} key={friend.id} href="onClick()" name={friend.id}>
            Friend: {friend.name}
            <br />
          </a>
        );
      })}
      <a href='onClick()' onClick={navToAdd}>Add Friend</a>
    </div>
  );
};

export default FriendsList;
