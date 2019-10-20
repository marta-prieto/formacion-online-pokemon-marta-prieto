import React from 'react';
import './App.css';
import { fetchPoke } from './service/fetchPoke';
import PokeFilter from 'Filter';
import PokeList from 'PokeList';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      charge: false
    }

  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters = () => {
    fetchPoke()
      .then(data => {
        const pokemonsData = data.results.map((item) => {
          return fetch(item.url)
            .then(response => response.json());
        });
        return Promise.all(pokemonsData);
      })
      .then(membersData => {
        return (
          this.setState({
            pokemons: membersData,
            charge: true,
            filterName: ''
          })
        );
      })
  }
  getFilter = (event) => {
    const pokeName = event.currentTarget.value;
    this.setState({
      filterName: pokeName
    })
  }

  render() {
/*     const { pokemons, pokeName } = this.state; */
    return (
      <div className="app">
        <div className="circle left"></div>
        <div className="circle right"></div>
        <div className="triangle left"></div>
        <div className="triangle right"></div>
       {/*  <PokeFilter 
        getFilter = { this.getFilter}
        />
        <PokeList
        pokemons = { pokemons }
        pokeName = { pokeName }
        /> */}
      </div>
    );
  }
}


export default App;
 
