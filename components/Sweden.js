import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import SwedenI from './SwedenI'
import Footer from './Footer';

class Sweden extends React.Component {
  render() {
  	return (
  		<div>
  			<Header />
  			<SwedenI />
  			<Footer />
  		</div>

  		)
  }
}

export default Sweden