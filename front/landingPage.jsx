import React from 'react';


const LandingPage = React.createClass({
	render(){
		return(
			<div>

				<div className="dotstyle dotstyle-fillin"> 
					<ul>
						<li className="current"><a href="#">Home</a></li>
						<li><a href="#">Portfolio</a></li>
						<li><a href="#">Bio</a></li>
						<li><a href="#">Resume</a></li>
						<li><a href="#">Contact</a></li>
					</ul>

				</div>

			</div>

		)
	}
});

export default LandingPage; 