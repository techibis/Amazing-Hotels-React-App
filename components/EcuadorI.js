import React from 'react';
import ReactDOM from 'react-dom';
import pic1 from '../images/mashpi-lodge-1.jpg'
import pic2 from '../images/mashpi-lodge-5.jpg'

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
				<h1 style={h1Style}>Mashpi Lodge</h1>
				<img src={pic1}/>
				<p style={pStyle}>Situated in the Andean Cloud Forest of Ecuador, the Mashpi Lodge offers guests understated modernist luxury in the middle of a lush wilderness.</p>
				<img src={pic2}/>
			</div>
			)		
	}

}

export default SingaporeI


