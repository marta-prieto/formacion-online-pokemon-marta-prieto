const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';

const fetch = () => {
    return(
      fetch(ENDPOINT)
        .then(response => response.json())
    )
  }
  
  export {fetch}; 