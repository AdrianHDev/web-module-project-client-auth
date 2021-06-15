import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const Friend = (props) => {
    const [friendInfo, setFriendInfo] = useState({name: "", age: "", id: 0, email: ""})
    const {id} = useParams()
    console.log('Test');
    useEffect(() => {
        console.log('Initial effect.')
        axiosWithAuth().get(`http://localhost:5000/api/friends/${id}`)
        .then(res => {
            console.log(res);
            setFriendInfo(res.data)})
        .catch(err => console.error(err));
    }, [id])
    return (
        <div>
            <h3>{friendInfo.name} is {friendInfo.age}</h3>
            <span>Friend {friendInfo.id}'s email is {friendInfo.email}</span>
        </div>
    )
}

export default Friend