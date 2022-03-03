function adicionarProduto(id) {
  let contador = 0;
  let imagem_item = document.getElementById(id).querySelector("img").src;

  let nome_item = document.getElementById(id + "nome_item").innerText;
  let preco_item = document
    .getElementById(id + "preco_item")
    .innerText.split(" ");

  while (true) {
    let item = localStorage.getItem(contador);

    if (!item) {
      localStorage.setItem(
        contador,
        JSON.stringify({
          nome: nome_item,
          preco: parseFloat(preco_item[1]),
          imagem: imagem_item,
          status: "adicionar",
        })
      );
      alert(nome_item + " adicionado ao carrinho!");
      return true;
    }
    contador++;
  }
}

export default adicionarProduto;
