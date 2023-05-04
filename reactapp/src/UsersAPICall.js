import React, { useEffect, useState } from "react";

export default function UserAPI() {
    
    const [users, setUsers] = React.useState([])
    const [getState, setState] = useState('initial state')
    
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(json => {
    //         console.log(json)
    //         setUsers(json)
    //     })
    
    console.log('start of component')

    useEffect(() => {
        console.log('inside useEffect')

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setUsers(JSON.stringify(json))
            })
    }, [users])

    console.log('After useEffect')

    return (
        <div>
            <h3>List of Users</h3>
            {getState}
            <button onClick={() => setState(`new state ${new Date().getMilliseconds()}`) }>Click Me</button>
            <ul>
                {/* {(JSON.parse(users)).map((u,i) => <li key={i}>{u.email}</li>)} */}
            </ul>
        </div>
    )
}