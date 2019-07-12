import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import NewfoundlandI from './NewfoundlandI'
import Footer from './Footer';

class Newfoundland extends React.Component {
  render() {
  	return (
  		<div>
  			<Header />
  			<NewfoundlandI />
  			<Footer />
  		</div>

  		)
  }
}

export default Newfoundland