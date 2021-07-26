import React, { Component } from "react";
import UncontrolledLottie from './UncontrolledLottie';




class ThankYou extends Component {
	

	state = {
		username: "",
	};
 
	UNSAFE_componentWillReceiveProps = (newProps) => {
		this.setState({ username: newProps.username });
	};

	render() {
		return (
			
			
			<div className="container pt-0 main-content-container">
				<h1 className="center"> You Are On Your Way To Saving on Your <b>Burial</b> Insurance</h1>
				<br></br>
                <div id="target"> 
				</div>
            </div>
		);
	}
}

export default ThankYou;
