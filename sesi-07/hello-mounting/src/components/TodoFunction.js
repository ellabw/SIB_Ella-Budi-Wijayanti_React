import { useState } from "react"


export default function TodoFunction(){

    const [todos, setTodos] = useState([])
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(respJson => {
        setTodos(respJson)
        // console.log(todos);
    })
    .catch((err)=>console.log(err))

    return(
        <div>
                <table>
                { todos !== null && todos.map((res) => {
                    
                    return (
                        // <h1 key={res.id}>user id: {res.id} , title: {res.title}</h1>
                        <tr key={res.id}>
                            <td>{res.id}</td>
                            <td>{res.body}</td>
                            <td>{res.completed ? "v" : "x"}</td>
                        </tr>
                    )
                    })}
                </table>
            </div>
    )
}