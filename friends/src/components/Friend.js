import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";

const Friend = (props) => {
    const [friendInfo, setFriendInfo] = useState({name: "", age: "", id: 0, email: ""})
    const {id} = useParams()

    useEffect(() => {
        axiosWithAuth.get(`/friends/${id}`)
        .then(res => setFriendInfo(res.data))
        .catch(err => console.error(err));
    }, [])

    return (
        <div>
            <h3>{friendInfo.name} is {friendInfo.age}</h3>
            <span>User {friendInfo.id}'s email is {friendInfo.email}</span>
        </div>
    )
}

export default Friend