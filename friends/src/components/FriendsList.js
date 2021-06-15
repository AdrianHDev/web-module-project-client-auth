import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";
import Friend from "./Friend";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    axiosWithAuth.get("/friends").then((res) => {
      setFriends(res.data);
    });
  };

  useEffect(getFriends, [])
  return (
    <div>
      {friends.map((friend) => {
        return <div>Friend  </div>;
      })}
    </div>
  );
};

export default FriendsList