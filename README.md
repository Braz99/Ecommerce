# Game Store
### Link do projeto: [Site](https://game-store-fb.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/45247886-24a7-480a-ac78-d92b37a41266/deploy-status)](https://game-store-fb.netlify.app/)


### Menu
[Sobre](#sobre) | [Instalação](#instalação) | [Regras](#regras-do-negócio) | [Estrutura](#estrutura-do-projeto) | [Informações](#informações) | [Componentes](#componentes) | [Autor](#autor) | [Licença](#licença)

## Sobre
Este site foi feito com o intuito de criar uma loja de games, utilizando o conceito de contextAPI, localStorage e a biblioteca [Totastify](https://github.com/fkhadra/react-toastify). O localStorage foi utilizado para que quando recarregada a página os produtos ainda continuem no carrinho.


## Instalação
Você vai precisar ter instalado em sua máquina:

[GIT](https://git-scm.com)

[Node.js](https://nodejs.org/en/). 

E também de um editor de código, de preferência o [VSCode](https://code.visualstudio.com/)

### Passos

- Primeiro clone o projeto, use o terminal git bash, com o comando <code>git clone https://github.com/Braz99/Ecommerce.git</code>
- Depois abra a pasta no terminal usando o comando <code> cd caminho da pasta</code>
- Com a pasta selecionada é hora de instalar todas as dependências do projeto com o comando <code>npm install</code>
- Para executar a aplicação em modo de desenvolvimento use o comando <code>npm start</code>

 O servidor inciará na porta:3000 - acesse http://localhost:3000
 
 ## Regras do Negócio
- Os valores exibidos no checkout (frete, subtotal e total) são calculados dinamicamente
- O usuário pode adicionar e remover produtos do carrinho
- O usuário pode ordenar os produtos por preço, score e ordem alfabética(filtro padrão)
- A cada produto adicionado, soma-se R$ 10,00 ao frete
- O frete é grátis para compras acima de R$ 250,00
 
 ## Estrutura do projeto
 
 Este projeto contém apenas 2 páginas, encontradas na pasta __src/pages__, que são as seguintes: 
 
 - Home
 - Checkout

A página home alterna entre a página principal e o carrinho, em uma lógica condicional, onde quando clicado o ícone do carrinho, este aparece. Já a página checkout é apenas para mostrar uma mensagem ao cliente de compra finalizada.

### Informações 
- As rotas se encontram no arquivo __siteRoutes.js__, dentro de __src__
- Na pasta __src/api__ está a database do projeto, __products.json__
- As imagens se encontram na pasta __public/assets__
- Todos os componentes se encontram na pasta __src/components__
- Toda a lógica do projeto foi isolada em hooks personalizados, e se encontra na pasta __src/hooks__ 
- Dentro de __provider/CartProvider.jsx__ está a lógica da ContextAPI, fornecendo para a aplicação o cart e a função setCart
- Todo o estilo do projeto se encontra na pasta __src/styles__, estando os estilos dos componentes na pasta __components__.

### Componentes
O componente que renderiza o header é o __HeaderSite.jsx__

O componente que renderiza o footer é o __FooterSite.jsx__

O componente que renderiza a messagem de compra finalizada é o __MainCheckout.jsx__

Componentes que compõe o cart(carrinho): 
- __CartSection__: Responsável por unir o CartHeader, CartMain e o TotalPrice, para renderizá-los na página principal em um único componente
- __CartHeader__: Contém o ícone para fechar o carrinho e a quantidade de itens no carrinho
- __CartMain__: Lista os itens do carrinho usando o componente CartItem
- __CartItem__: Renderiza as informações do produto que está no carrinho
- __TotalPrice__: Calcula dinamicamente o valor do subtotal e do total do preço dos produtos no carrinho

Componentes que compõe a página principal, além do footer e do header:
- __MainSite__: Responsável por unir o FilterItems e o MainList, para renderizá-los na página principal em um único componente
- __MainList__: Lista os itens que estão na database do projeto(__src/api/products.json__) usando o componente MainItem
- __MainItem__: Renderiza as informações do produto que está na database
- __FilterItems__: Responsável por ordenar os items que estão renderizadas na página principal(MainList) ou por preço, ou por score ou por ordem alfabética


## Licença 
License MIT

## Autor 
Fabrício Brazil

