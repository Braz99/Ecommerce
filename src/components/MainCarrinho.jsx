import React, { useEffect } from 'react';
import listar from '../logica_app/listar_carrinho';
import somarTotal from '../logica_app/somar_total';
import verificar from '../logica_app/verificar_vazio';

function MainCarrinho() {

    useEffect(() => listar())

    useEffect(() => somarTotal())

    return (
        <main id='main_carrinho'>

            <ul id='area_carrinho'>

            </ul>

            <div id='secao_preco'>

                <h3>Total sem frete: <span id='subtotal'> R$ 0,00 </span></h3>
                <h2>Total dos produtos: <span id='total'> R$ 0,00</span></h2>

                <button onClick={() => {verificar()}}>Finalizar compra</button>
            </div>

        </main>
    )

}

export default MainCarrinho;