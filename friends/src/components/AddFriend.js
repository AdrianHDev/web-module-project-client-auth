import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = () => {
  const [friendInfo, setFriendInfo] = useState({
    name: "",
    age: "",
    email: "",
  });
  const history = useHistory();
  const handleChange = (ev) => {
    ev.preventDefault();
    setFriendInfo((oldState) => {
      return {...oldState, [ev.target.name]: ev.target.value}
    })
  }
  const addFriend = (ev) => {
    ev.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/friends', friendInfo)
    .then(res => console.log(res))
    .catch(err => console.error(err))
    history.push('/friends')
    
  }
  return (
    <form>
      <label>
        Name:
        <input onChange={handleChange} type="text" name="name" value={friendInfo.name} /><br/>
      </label>
      <label>
        Age:
        <input onChange={handleChange} type="text" name="age" value={friendInfo.age} /><br/>
      </label>
      <label>
        E-Mail:
        <input onChange={handleChange} type="text" name="email" value={friendInfo.email} /><br/>
      </label>
      <button onClick={addFriend}>&lt;----------------- Add Friend -----------------&gt;</button>
    </form>
  );
};

export default AddFriend