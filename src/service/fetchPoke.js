const url = "https://pokeapi.co/api/v2/pokemon/?limit=25";

const getDataFromServer = () => {
  return fetch(url).then(response => response.json());
};

export default getDataFromServer;



/* const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/?offset=25&limit=25";



const fetchPoke = () => {


    return(
      fetch(ENDPOINT)
        .then(response => response.json())
    )
  }
  
  export {fetchPoke};  */