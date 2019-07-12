import React from 'react';
import ReactDOM from 'react-dom';
import Singapore from '../images/marina-bay-sands1.jpg';
import Ecuador from '../images/mashpi-lodge-1.jpg';
import Kenya from '../images/giraffe-manor-1.jpg';
import Morocco from '../images/royal-mansour-morocco.jpg';
import Newfoundland from '../images/fogo-island-inn-1.jpg';
import Sweden from '../images/ice-hotel-sweden-1.jpg';


const divStyle = {
	backgroundColor : '#000000',
	color: '#ffffff' 	
}
const h1Style = {
	padding: '30px'
}
const imgStyle = {
	width: '33%'
}

class HomepageI extends React.Component {

	render () {
		return (

			<div style={divStyle}>
				<h1 style={h1Style}>Season 1</h1>
				<img style={imgStyle} src={Singapore}/>
				<img style={imgStyle} src={Ecuador}/>
				<img style={imgStyle} src={Kenya}/>
				<img style={imgStyle} src={Morocco}/>
				<img style={imgStyle} src={Newfoundland}/>
				<img style={imgStyle} src={Sweden}/>
			</div>

			)
	}
}

export default HomepageI