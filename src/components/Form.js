import React, { useState } from 'react';
import axios from 'axios';

function Form() {

    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        city:"",
        state:"",
        github_url:"",
    })

    function handleChange(event) {
        console.log(user)
        setUser({...user, [event.target.name]: event.target.value})
    }

    function handleSubmit() {
        axios.post('https://practice-be.herokuapp.com/', user)
    }

    return (
        <div className="Form">
        <form onSubmit={handleSubmit}>
            <input type="text" name="first_name" placeholder="First Name" value={user.first_name} onChange={handleChange}></input>
            <input type="text" name="last_name" placeholder="Last Name" value={user.last_name} onChange={handleChange}></input>
            <input type="text" name="email" placeholder="email" value={user.email} onChange={handleChange}></input>
            <input type="text" name="password" placeholder="password" value={user.password} onChange={handleChange}></input>
            <input type="text" name="city" placeholder="city" value={user.city} onChange={handleChange}></input>
            <input type="text" name="state" placeholder="state" value={user.state} onChange={handleChange}></input>
            <input type="text" name="github_url" placeholder="gtihub url" value={user.github_url} onChange={handleChange}></input>
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
}

export default Form;
