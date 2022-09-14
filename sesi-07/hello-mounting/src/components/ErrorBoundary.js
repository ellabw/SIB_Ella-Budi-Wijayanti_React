import React , {logComponentStackToMyservice} from "react";

export default class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error){
        return{hasError: true}
    }
    
    componentDidCatch(error, info){
        logComponentStackToMyservice(info.componentStack)
    }

    render(){
        if(this.state.hasError){
            return (
                <>
                <h1>Something went wrong.</h1>
                <h1>Back to Home.</h1>
                </>
            )
        }
        //view component
        return this.props.children;
    }
}