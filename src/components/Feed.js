import React, { useState, useEffect } from 'react';
import User from './User'

function Feed({}) {

    const [userArray, setUserArray] = useState([
        {
            first_name: "Ryan",
            last_name: "Z",
            email: "",
            password: "",
            city:"",
            state:"",
            github_url:"",
        },
        {
            first_name: "Jared",
            last_name: "D",
            email: "",
            password: "",
            city:"",
            state:"",
            github_url:"",
        },
        {
            first_name: "Austin",
            last_name: "A",
            email: "",
            password: "",
            city:"",
            state:"",
            github_url:"",
        },
    ])

    useEffect(() => {
        // axios.get()
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
