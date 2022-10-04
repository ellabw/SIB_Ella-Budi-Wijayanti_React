const Users = (props) => {
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
                        props.users?.map(user=> (
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

export async function getServerSideProps(context){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json()

    return {
        props: { users }
    }
}

export default Users