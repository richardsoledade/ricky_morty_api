import "./App.css";
import { useEffect, useState } from "react";
import { HeaderApp } from "./HeaderApp";
import axios from "axios";
import { CardCharacter } from "./CardCharacter";

function App() {
  const [personagens, setPersonagens] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  const filtrarPersonagens = personagens.filter((perso) =>
    perso.name.toLowerCase().includes(pesquisa.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => setPersonagens(response.data.results));
  }, []);

  return (
    <div>
      <HeaderApp pesquisa={pesquisa} setPesquisa={setPesquisa} />

    <hr></hr>


      <div className="container">
        {filtrarPersonagens.map((person) => {
          return <CardCharacter person={person} />;
        })}
      </div>
    </div>
  );
}

export default App;
