# Ecommerce
 Tecnologia: React
 
 Projeto que simula um ecommerce de games. Você consegue selecionar um produto, colocá-lo no carrinho, e finalizar a compra. Utilizei para isso o React + LocalStorage.
 
 ## Observações
 
 A pasta __API__ contém o arquivo JSON para manipulação. 
 
 Não usei ícones, então está escrito o que cada botão faz.
 
 A maior parte da lógica se encontra na pasta: __logica_app__, mas toda lógica vai para os components, que são: __Main__, __MainCarrinho__ e __MainCompraFinalizada__. 
 
 Dividi o projeto em três páginas, que podem ser acessadas na pasta _pages_: __Home__, __Carrinho__ e __Comprafinalizada__.
 
 Todo o estilo se encontra no __App.css__. 
 
 ## Regras
 
- Os valores exibidos no checkout (frete, subtotal e total) são calculados dinamicamente
- O usuário pode adicionar e remover produtos do carrinho
- O usuário pode ordenar os produtos por preço, score e ordem alfabética(filtro padrão).
- A cada produto adicionado, soma-se R$ 10,00 ao frete.
- O frete é grátis para compras acima de R$ 250,00.
 
 ## Imagens
 
 ### Tela Inicial
 ![2021-06-28 (3)](https://user-images.githubusercontent.com/81660822/123690585-ea88ec00-d82a-11eb-8386-db83346982b0.png)

### Carrinho
![2021-06-28 (1)](https://user-images.githubusercontent.com/81660822/123690724-12784f80-d82b-11eb-88ec-c051525c6a30.png)

### Tela final
![2021-06-28 (2)](https://user-images.githubusercontent.com/81660822/123690738-16a46d00-d82b-11eb-9661-36ad184f9cc7.png)

