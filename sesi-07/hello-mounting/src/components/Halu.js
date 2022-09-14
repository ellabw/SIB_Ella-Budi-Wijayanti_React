import React from "react";

export default class Halu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            users: []
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.users.length !== nextState.users.length){
            return true
        }

        return false;
    }

    componentDidUpdate(prevProps){
        if(prevProps.selecteState !== this.props.selectedState){
            if(prevProps.selecteState !== this.props.selectedState){
                fetch('https://jsonplaceholder.typicode.com/todos')
                .then(resp => resp.json())
                .then(respJson => {
                    this.setState({
                        isLoading: false,
                        users: respJson
                    })
                })
                .catch((err)=>
                console.log(err))
            }
        }
        // console.log(this.state.users);
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
                .then(resp => resp.json())
                .then(respJson => {this.setState({
                        isLoading: false,
                        users: respJson.slice(0,20)
                    })
                console.log(this.state.users);
                })
                .catch((err)=>console.log(err))
    }

    componentWillUnmount(){
        
    }


    render(){
        return(
            <div>
                <table>
                { this.state.users !== null && this.state.users.map((res) => {
                    
                    return (
                        // <h1 key={res.id}>user id: {res.id} , title: {res.title}</h1>
                        <tr key={res.id}>
                            <td>{res.id}</td>
                            <td>{res.title}</td>
                            <td>{res.completed ? "v" : "x"}</td>
                        </tr>
                    )
                    })}
                </table>
            </div>
        )
    }
}