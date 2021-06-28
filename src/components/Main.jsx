import React, { useEffect } from 'react';
import adicionarProduto from '../logica_app/adicionar_produto';

function Main() {

  let dados = require('../api/products.json');

  function filtrar() {

    let filtro = document.getElementById('filtro')

    if (filtro.value === 'preco') {
      dados.sort(function (a, b) {
        if (a.price < b.price) {
          return -1;
        }
        else {
          return true;
        }
      })
    }

    if (filtro.value === 'score') {
      dados.sort(function (a, b) {
        if (a.score < b.score) {
          return -1;
        }
        else {
          return true;
        }
      })
    }

    if (filtro.value === 'padrao') {
      dados.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        else {
          return true;
        }
      })
    }
    

    let area = document.getElementById('area')
    area.innerHTML =
      dados.map(jogo => (
        `<li id=${jogo.id} key=${jogo.id}>

          <h2 id='${jogo.id}nome_item'>${jogo.name}</h2> 
          <h3>Score: ${jogo.score}</h3>

          <img src=${'assets/' + jogo.image} alt=${'imagem do jogo ' + jogo.name} />

          <h3 id='${jogo.id}preco_item'>R$ ${jogo.price.toFixed(2).replace('.', ',')}</h3>

          <button id=${jogo.id} >Comprar</button>

        </li>`
      ))
  }

  useEffect(() => {
    filtrar()
  })

  useEffect(() => {
      let botoes = document.querySelectorAll('button')
      
      botoes.forEach(elment => {
        elment.addEventListener('click', () => {adicionarProduto(elment.id)} )
      })
  })


 

  return (
    <main id='main'>
      
      <select id='filtro' onChange={() => filtrar()}>

        <option value='padrao' defaultValue>Filtrar</option>
        <option value='preco'>Filtrar por preço</option>
        <option value='score'>Filtrar por score</option>

      </select>
      <ul id='area'>


        
      </ul>

    </main>

  )

}

export default Main;