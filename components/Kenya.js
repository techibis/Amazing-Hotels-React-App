import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import KenyaI from './KenyaI'
import Footer from './Footer';

class Kenya extends React.Component {
  render() {
  	return (
  		<div>
  			<Header />
  			<KenyaI />
  			<Footer />
  		</div>

  		)
  }
}

export default Kenya