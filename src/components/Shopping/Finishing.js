import { Component } from "react";
import './Finishing.css'

class Finishing extends Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="popup">
                <div className="status-bar">
                    <span onClick={this.props.close}>❌</span>
                </div>
                are you serious?
            </div>
        );
    }

}

export default Finishing;