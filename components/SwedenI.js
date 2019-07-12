import React from 'react';
import ReactDOM from 'react-dom';
import pic1 from '../images/ice-hotel-sweden-1.jpg'
import pic2 from '../images/ice-hotel-sweden-2.jpg'

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
class SwedenI extends React.Component {
	render() {
		return (
			<div style={divStyle}>
				<h1 style={h1Style}>Ice Hotel</h1>
				<img src={pic1}/>
				<p style={pStyle}>Icehotel, situated in Sweden's Lapland, offers an otherworldly experience and a form of glacial luxury that is quite unique.</p>
				<img src={pic2}/>
			</div>
			)		
	}

}

export default SwedenI


