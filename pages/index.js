import { useState } from "react";

function Home() {
  return (
    <div>
      <h1>Home!!!</h1>
      <a href="/sobre">Sobre</a>
      <Contador />
    </div>
  );
}

function Contador() {
  const [contador, setContador] = useState(0);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div>Clicks: {contador}</div>
      <button onClick={adicionarContador}>Clique aqui!!!</button>
    </div>
  );
}

export default Home;
