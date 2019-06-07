import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes'
import ImmComp from './components/ImmComp'
import MutComp from './components/MutComp'

class App extends Component {
  render() {
    return (
      <section>
        <div className="imm">
          <ImmComp/>
        </div>
        <div className="mut">
          <MutComp test={{id: 7}} />
        </div>
      </section>
    );
  }
}

export default App;
