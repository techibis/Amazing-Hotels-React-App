import React from 'react';
import ReactDOM from 'react-dom';
import pic1 from '../images/marina-bay-sands1.jpg'
import pic2 from '../images/marina-bay-sands2.jpg'

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
class SingaporeI extends React.Component {
	render() {
		return (
			<div style={divStyle}>
				<h1 style={h1Style}>Marina Bay Sands</h1>
				<img src={pic1}/>
				<p style={pStyle}>The vision governing Singapore's Marina Bay Sands hotel reflects the spirit of a city that excudes confidence, ambition and prosperity.</p>
				<img src={pic2}/>
			</div>
			)		
	}

}

export default SingaporeI


