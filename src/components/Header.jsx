import React from 'react';


function Header() {

    return(
        <header id='header'>

            <a id='logo' href='/'>Loja Arretada</a>
            
            <nav id='nav'>

                <ul id='menu'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/carrinho'>Carrinho</a></li>
                </ul>


            </nav>

        </header>

    )

}

export default Header;