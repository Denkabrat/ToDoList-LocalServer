import { PureComponent } from "react";

class ErrorBoundary extends PureComponent{


    state = {
        error:false,
    }

    componentDidCatch(err,info){
        this.setState({
            error:true,
        })
    }

    render(){
        if(this.state.prop){
            return <h1>ERROR404</h1>
        }
        return this.props.children;
    }


}

export default ErrorBoundary;



