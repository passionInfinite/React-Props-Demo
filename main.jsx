import React from 'react';
import ReactDOM from 'react-dom';


//Using JavaScript function
function Welcome(props) {
    return (
        <div>
            <code>Using Pure Functional Props.</code>
            <h1>Hello {props.name}!</h1>
        </div>
    )
}
ReactDOM.render(<Welcome name="PassionInfinite"/>, document.getElementById('app_functional'));


//Using Class as  of ES6 Version.
class Person extends React.Component{
    render(){
        return (
            <div>
                <code>Using Class Props.</code>
                <h1>Hello {this.props.name}!</h1>
            </div>
        );
    }
}

ReactDOM.render(<Person name="PassionInfinite"/>, document.getElementById('app_class'));