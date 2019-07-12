import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import SingaporeI from './SingaporeI'
import Footer from './Footer';

class Singapore extends React.Component {
  render() {
  	return (
  		<div>
  			<Header />
  			<SingaporeI />
  			<Footer />
  		</div>

  		)
  }
}

export default Singapore