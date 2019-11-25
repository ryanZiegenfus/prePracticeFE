import React from 'react';

function User({ user }) {
    console.log(user)
    return (
        <div className="User">
            <div>{user.first_name}</div>
            <div>{user.last_name}</div>
            <div>{user.email}</div>
            <div>{user.city}</div>
            <div>{user.state}</div>
            <div>Click for Github</div>
        </div>
    );
}

export default User;