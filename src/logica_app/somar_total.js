function somarTotal() {

    var total = 0
    var subtotal = 0
    var itens = 0

    if(localStorage.getItem(0) === null) {
        return total;
    }

    for (let i = 0; localStorage.getItem(i) !== null; i++) {

        const produto = JSON.parse(localStorage.getItem(i))
        
        if (produto.status !== 'remover') {
            total += produto.preco 
            itens ++;
        }
    }

    subtotal = total;

    if (total < 250) {
        total = itens * 10 + subtotal
    }

    let secao = document.getElementById('total')

    let secao_subtotal = document.getElementById('subtotal')

    let subtotal_format = 'R$  ' + parseFloat(subtotal).toFixed(2).replace('.', ',')
    let resultado_format = 'R$  ' + parseFloat(total).toFixed(2).replace('.', ',')

    secao.innerText = resultado_format;
    secao_subtotal.innerText = subtotal_format;
    
}

export default somarTotal;
