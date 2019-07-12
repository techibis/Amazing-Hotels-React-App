import React from 'react';
import ReactDOM from 'react-dom';
import pic1 from '../images/fogo-island-inn-1.jpg'
import pic2 from '../images/fogo-island-inn-2.jpg'

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
class NewfoundlandI extends React.Component {
	render() {
		return (
			<div style={divStyle}>
				<h1 style={h1Style}>Fogo Island</h1>
				<img src={pic1}/>
				<p style={pStyle}>Guests at the Royal Mansour Hotel in Marrakech experience the heights of traditional luxury, to the point of having their own butler.The proprietor of the Fogo Island Inn likes to refer to herself as an innkeeper, offering the kind of hospitality that comes with a human touch.</p>
				<img src={pic2}/>
			</div>
			)		
	}

}

export default NewfoundlandI


