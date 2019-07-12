import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import MoroccoI from './MoroccoI'
import Footer from './Footer';

class Morocco extends React.Component {
  render() {
  	return (
  		<div>
  			<Header />
  			<MoroccoI />
  			<Footer />
  		</div>

  		)
  }
}

export default Morocco