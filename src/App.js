import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  let name = 'visitante';

  const [nome, setNome] = useState('visitante state');

  const mudaCampo = (novoNome) => {
    name = novoNome;
    console.log(name);
    console.log('teste', novoNome);
    setNome(novoNome);
  };
  //
  const arrayDeNumeros = [1, 2, 3, 4, 5];

  const arrayDePessoas = [
    { nome: 'Gab', idade: 20 },
    { nome: 'rafa', idade: 18 },
  ];

  const varreArray = () => {
    let array1 = [];
    let array2 = [];
    let idade = 0;

    array1 = arrayDePessoas.forEach((elemento) => {
      idade += elemento.idade;
      return elemento.idade;
    });

    array2 = arrayDePessoas.map((elemento) => {
      return elemento.idade;
    });

    console.log('array1', array1);
    console.log('array2', array2);
  };

  return (
    <>
      <h1>Olá, {nome}!</h1>
      <p>Insira seu nome abaixo e veja a mágica acontecer...</p>
      <input
        placeholder="digite seu nome aqui"
        onChange={(evento) => mudaCampo(evento.target.value)}
      />
      <br />
      {arrayDeNumeros.map((numero) => (
        <>{numero}</>
      ))}
    </>
  );
}
