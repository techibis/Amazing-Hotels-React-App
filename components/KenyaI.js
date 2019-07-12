import React from 'react';
import ReactDOM from 'react-dom';
import pic1 from '../images/giraffe-manor-1.jpg'
import pic2 from '../images/giraffe-manor-2.jpg'

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
class KenyaI extends React.Component {
	render() {
		return (
			<div style={divStyle}>
				<h1 style={h1Style}>Giraffe Manor</h1>
				<img src={pic1}/>
				<p style={pStyle}>Kenya's Giraffe Manor combines old-world british charm with, among other things, the pleasure of eating your breakfast in the company of giraffes.</p>
				<img src={pic2}/>
			</div>
			)		
	}

}

export default KenyaI


