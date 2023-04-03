import React, { useState } from "react";

export default function UserAPI() {
    
    const [users, setUsers] = React.useState([])
    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
    
    return (
        <div>
            <h3>List of Users</h3>
            <ul>
                {users.map((u,i) => <li key={i}>{u.email}</li>)}
            </ul>
        </div>
    )
}