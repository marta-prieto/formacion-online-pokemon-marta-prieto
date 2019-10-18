import React from 'react';
import './App.css';
import {fetch} from '../src/service/fetch';



class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      pokemons: [],
    }
    
  }

  getCharacters() {
    fetch()
      .then(data => {
        this.setState({
          pokemons: data 
        } );
      });
  }
  
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
