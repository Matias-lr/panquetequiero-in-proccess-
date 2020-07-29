import React, { useState, useEffect } from 'react'
import './fecha.css'
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/es';

export default () =>{
    return(
        <div className="fecha col-xl-8 col-lg-7 col-md-12">
            <div className="header-card">
                <h1>Datos de hoy</h1>
            </div>
            <div className="body-card">
                <div className="itemss">
                    <p style={{width:'50%'}}><b>Fecha:</b> <Moment locale='es' format="LL"></Moment></p>
                    <p style={{width:'50%'}}><b>Hora:</b> <Moment interval={1000} format="HH:mma"></Moment></p>
                    <p><b>Pedidos del dia:</b> 25</p>
                </div>
                <div id="button-details">
                    <a href="#" id="four">Detalles</a>
                </div>

            </div>
        </div>
    )
}
