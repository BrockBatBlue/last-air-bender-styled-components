import { useState, useEffect } from "react";
import axios from "axios";
import Title from "./components/Title";
import CardsContainer from "./components/CardsContainer";

function App() {
  const apiUrl =
    "https://last-airbender-api.fly.dev/api/v1/characters/random?count=20";

  //store fetched data in useState
  const [characters, setCharacters] = useState([]);

  //fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setCharacters(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  //call fetched data on component
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Title />
      <CardsContainer characters={characters} />
    </>
  );
}

export default App;
