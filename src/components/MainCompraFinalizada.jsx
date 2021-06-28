import React from 'react';

function MainCompra() {



    return (
        <main id='main_compra'>

            {localStorage.clear()}

            <section id='secao_finalizada'>

                <h1>Sua compra foi finalizada!</h1>

                <p>Muito obrigado pelo apoio, seu pedido chegará em breve!</p>

                <button onClick={() => {window.location.href = '/'}}>Home</button>

            </section>



        </main>

    )

}

export default MainCompra;