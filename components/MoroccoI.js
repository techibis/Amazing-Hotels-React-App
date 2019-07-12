import React from 'react';
import ReactDOM from 'react-dom';
import pic1 from '../images/royal-mansour-morocco.jpg'
import pic2 from '../images/royal-mansour-morocco-2.png'

const divStyle = {
	backgroundColor : '#000000',
	color: '#ffffff' 	
}
const h1Style = {
	padding: '30px',
	fontSize: '46px'
}
const pStyle = {
	fontFamily: 'tahoma',
	fontSize: '40px',
	letterSpacing: '2px',
	padding: '40px 20px'
}
class MoroccoI extends React.Component {
	render() {
		return (
			<div style={divStyle}>
				<h1 style={h1Style}>Royal Monsour</h1>
				<img src={pic1}/>
				<p style={pStyle}>Guests at the Royal Mansour Hotel in Marrakech experience the heights of traditional luxury, to the point of having their own butler.</p>
				<img src={pic2}/>
			</div>
			)		
	}

}

export default MoroccoI


