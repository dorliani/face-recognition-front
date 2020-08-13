import React from 'react'


const Navigation = ({onRouteChange, isSignedIn}) => {

	if(isSignedIn){
		return(
			<nav style={{display:'flex', justifyContent:'flex-end'}}>
				<p onClick={() => onRouteChange('SignOut')} className="f4 link dim underline pa3 pointer mt0">Sign Out</p>
			</nav>
		);
	} else {
		return(
			<nav style={{display:'flex', justifyContent:'flex-end'}}>
				<p onClick={() => onRouteChange('SignIn')} className="f3 link dim underline pa3 pointer mt0">Sign In</p>
				<p onClick={() => onRouteChange('Register')} className="f3 link dim underline pa3 pointer mt0">Register</p>
			</nav>
		)
	}
}

export default Navigation;