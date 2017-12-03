import React, { Component } from "react";
import "./View.css";

class Info extends Component {

	render() {
		return (
			<div className="card-body info-body">
				<div className="info-text">
					<h3>About</h3>
					<p>Cast Off is a one-stop gateway to your favorite sites, 
					fully-customizable to what you are looking for! You can save up 
					to 8 links(waypoints) to sites in however many groupings as you 
					wish. To get started login with your account or sign up as a new
					user.</p>
				</div>
			</div>
		);
	}
}

export default Info;