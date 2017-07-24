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

				<div className="socialMedia">
					<a href="https://github.com/twilsonpierce"><div className="github"></div></a>
					<a href="https://www.linkedin.com/in/tionnawilsonpierce/"><div className="linkedin"></div></a>
					<a href="https://twitter.com/_heyitstionna"><div className="twitter"></div></a>
					<a href="https://plus.google.com/u/0/116596075873554672175"><div className="googleplus"></div></a>
				</div>

			</div>

		)
	}
});

export default LandingPage; 