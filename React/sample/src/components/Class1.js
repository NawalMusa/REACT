import { Component } from 'react';

class classComponent extends Component {

    render() {
        return(
            <h1>This is a class Component{this.props.name} </h1>
        );
    }
}
export default classComponent;