import React,{useState} from 'react'
import './home.css'
import Cantidades from '../../components/panels/cantidades'
import Fecha from '../../components/panels/fecha'
import Pedidos from '../../components/panels/pediddos'

export default () =>{
    return(
        <div className="principal-content">
            <Cantidades/>
            <Fecha/>
            <Pedidos/>
        </div>
    )
}