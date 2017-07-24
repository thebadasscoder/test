import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, Link, browserHistory, IndexRoute} from 'react-router';

//Components 
import LandingPage from '../front/landingPage.jsx';
import css from '../front/css/app.css';


const App = React.createClass({
	render(){
		return(
			<div>
			{this.props.children}
			</div> 

		)
	}
});


ReactDOM.render(
<Router history={browserHistory}>
	<Route path="/" component={App}>
		<IndexRoute component={LandingPage}/>
	</Route>
</Router>,
document.getElementById('root')
)