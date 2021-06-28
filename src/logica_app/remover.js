function remover(id, nome) {
    localStorage.setItem(id, JSON.stringify({'nome': nome, 'status': 'remover'}))
    alert(nome + '  removido do carrinho!')
    document.location.reload()
}

export default remover;