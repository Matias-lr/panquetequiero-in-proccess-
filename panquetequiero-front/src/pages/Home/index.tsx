import React,{useState} from 'react'
import './home.css'
import Cantidades from '../../components/home-panels/cantidades'
import Fecha from '../../components/home-panels/fecha'
import Pedidos from '../../components/home-panels/pediddos'

const Home =() =>{
    return(
        <div className="principal-content">
            <Cantidades/>
            <Fecha/>
            <Pedidos/>
        </div>
    )
}
export default Home;