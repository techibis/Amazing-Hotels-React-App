import React from 'react';
import Header from './Header'
import Footer from './Footer'
import HomepageI from './HomepageI'

class Homepage extends React.Component {
  render() { 
    return (
      <div>
        <Header />   
        <HomepageI />   
        <Footer />
      </div>
    );
  }
}

export default Homepage;
