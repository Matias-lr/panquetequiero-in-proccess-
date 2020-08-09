import React from 'react'
import Item from './item'
import './panel.css'

export default () =>{
    return(
        <div className="Card">
            <div className="header-card">
                <h1>Inventario</h1>
            </div>
            <div className="body-card">
                <Item
                    id={1}
                    name='Harina'
                    percent={40}
                />
                <Item
                    id={2}
                    name='Chocolate'
                    percent={60}
                />
                <Item
                    id={3}
                    name='Mantequilla'
                    percent={20}
                />
                <Item
                    id={4}
                    name='Aceituna se'
                    percent={50}
                />
            </div>
        </div>
    )
}