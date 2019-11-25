import React, { useState, useEffect } from 'react';
import User from './User';
import axios from 'axios';

function Feed() {

    const [userArray, setUserArray] = useState([])

    useEffect(() => {
        axios.get('https://practice-be.herokuapp.com')
        .then(res => {
            console.log(res)
            setUserArray(res.users)
        })
        .catch(err => {
            console.log(err.message)
        })

    })

    return (
        <div className="Feed">
            {userArray.map(user =>
                <User user={user} />
            )}
        </div>
    );
}

export default Feed;
