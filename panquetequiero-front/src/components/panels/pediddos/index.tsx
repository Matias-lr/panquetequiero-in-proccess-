import React,{ useState, useEffect } from 'react'
import './pedidos.css'
import Card from './card'

export default () =>{
    return(
        <div className='pedidos col-lg-12 col-md-12 col-sm-12'>
            <div className="header-card">
                <h1>Pedidos</h1>
            </div>
            <div className="body-card">
                <div className="slider-container">
                    <Card
                        id={1}
                        name ='Matias Larrondo'
                        direccion = 'Alfredo Acevedo 1044 asdsahjkdhasdkjashdjdksa'
                        data ={[{name:'mm',cant:1},{name:'mm',cant:1},{name:'masa madre sin azucar',cant:1}]}
                    />
                    <Card
                        id={2}
                        name ='Alejandra Varas'
                        direccion = 'Alfredo Acevedo 1044'
                        data ={[{name:'mm',cant:1},{name:'mm',cant:1}]}
                    />
                    <Card
                        id={3}
                        name ='Amelia Flores'
                        direccion = 'Freire'
                        data ={[{name:'A',cant:14}]}
                    />
                </div>
            </div>
        </div>
    )
}