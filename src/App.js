import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/index';
import Carrinho from './pages/Carrinho/index';
import CompraFinalizada from './pages/Comprafinalizada/index';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                  <Home />
                </Route>

                <Route path='/carrinho'>
                  <Carrinho />
                </Route>

                <Route path='/compra_finalizada'>
                  <CompraFinalizada />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
