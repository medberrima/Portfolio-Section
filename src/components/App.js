import React, { Component } from 'react' ;
import Header from './header' ;
import Portfolio from './Portfolio' ;

import './style.css' ;
class App extends Component {
  render() {
    return (

      <div className="container">
        <Header/>
        <Portfolio/>
      </div>
    )
  }
}

export default App;



