import React from 'react';
import './app.css'
import './variables.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './pages/Home/'
import Products from './pages/Products'
import Sidebar from './components/sidebar'
import Clients from './pages/Cliente'
import Inventario from './pages/Inventario'
import Pedidos from './pages/Pedidos'
import Settings from './pages/Settings'

export default () => {
  return (
    <>
      <Router>
        <Sidebar/>
        <main>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/productos' component={Products}></Route>
            <Route exact path='/clientes' component={Clients}></Route>
            <Route exact path='/inventario' component={Inventario}></Route>
            <Route exact path='/pedidos' component={Pedidos}></Route>
            <Route exact path='/Settings' component={Settings}></Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}
