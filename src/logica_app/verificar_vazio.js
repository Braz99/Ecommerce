function verificar() {
    let verificador = 0
    let qtd_itens = 0
    let i = 0

    while(true){

        let item = localStorage.getItem(i)

        if(item === null) {
            if(qtd_itens !== verificador) {
                window.location.href = '/compra_finalizada'
                return true
            }

            else {
                alert('Carrinho vazio!')
                return true
            }
        }

        if(item !== 'null'){
            qtd_itens += 1
        }

        if(JSON.parse(item).status === 'remover'){
            verificador += 1
        }

        i++;}}

export default verificar;