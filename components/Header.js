



import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/hotel-logo.jpg'; 



const OrangeLetters = {
	color: 'blue',
	fontSize: '30px',
	display: 'inline',
	position: 'relative',
	top: '-100px',
	left: '36px'
}

const thumbnail = {
	height: '140px',
	opacity: 7,
	borderRadius:'10px',
	padding: '70px 50px'
}
const headerclass = {
	height: '300px',
	backgroundColor: '#333333'
}
class Header extends React.Component {
	render() {
		return (
			<header style={headerclass}>
				
				<img style={thumbnail} src={logo} />
				
			</header>
		)
	}
}

export default Header