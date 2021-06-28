import remover from '../logica_app/remover'

function listar() {

    let area = document.getElementById('area_carrinho')

    for (let i = 0; localStorage.getItem(i) !== null; i++) {
        
        if(JSON.parse(localStorage.getItem(i)).status !== 'remover') {
            let element = JSON.parse(localStorage.getItem(i))
            let li = document.createElement('li')
            li.id = i
            li.className = 'lista_carrinho'
            li.innerHTML = `
            <img src='${element.imagem}' width='100px' height='100px'>
            <h3>Nome: ${element.nome} </h3>
            <h4>Preço: ${element.preco.toFixed(2).replace('.', ',')}</h4>
            <button id='${i}'>Remover item</button>
        `
            area.appendChild(li)
        }
       
    }


    let botoes = area.querySelectorAll('button')
    botoes.forEach(element => {

        let item = JSON.parse(localStorage.getItem(element.id))
        element.addEventListener('click', () => {remover(element.id, item.nome)} )
      })
}

export default listar;