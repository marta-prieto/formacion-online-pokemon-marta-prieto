import React from "react";
import fetchPoke from "../src/service/fetchPoke";
import List from "./PokeList";
import Filters from "./PokeFilter";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      filter: ''
    };
    this.getPokemons = this.getPokemons.bind(this);
  }
  componentDidMount() {
    this.getPokeData();
  }

  getPokeData() {
    fetchPoke().then(data => {
      for (let pokeData of data.results) {
        fetch(pokeData.url)
          .then(response => response.json())
          .then(pokemons => {
            const typesArray = [];
            for (let pokeType of pokemons.types) {
              typesArray.push(pokeType.type.name);
            }
            const pokeInfo = {
              name: pokeData.name,
              image: pokemons.sprites.front_default,
              type: typesArray
            };
            this.setState({
              pokemons: [...this.state.pokemons, pokeInfo]
            });
          });
      }
    });
  }

  getPokemons(event) {
    const filter = event.currentTarget.value;
    this.setState({
      filter: filter
    });
  }

  render() {
    const { pokemons, filter } = this.state;
    return (
      <div className="app__container">
        <Filters
          filter={filter}
          pokemons={pokemons}
          getPokemons={this.getPokemons}
        />
        <List 
        pokemons={pokemons} 
        filter={filter} />
      </div>
    );
  }
}

export default App;





