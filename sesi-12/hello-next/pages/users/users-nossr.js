import { useEffect, useState } from "react"

const User = () => {
    const [users, setUsers] = useState([])
    useEffect(
        ()=> {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=> res.json())
            .then((data)=> setUsers(data))
        }
    )
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=> (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default User