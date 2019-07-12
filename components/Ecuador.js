import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import EcuadorI from './EcuadorI'
import Footer from './Footer';

class Ecuador extends React.Component {
  render() {
  	return (
  		<div>
  			<Header />
  			<EcuadorI />
  			<Footer />
  		</div>

  		)
  }
}

export default Ecuador