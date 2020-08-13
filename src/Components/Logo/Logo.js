import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import brain from'./brain.png'

const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt mt0 br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
		 		<div className="Tilt-inner pa3"> 
		 			<img width="90" height="90" style={{paddingTop:'5px'}} src={brain} alt='logo'/> 
		 		</div>
			</Tilt>
		</div>
	)
}

export default Logo;