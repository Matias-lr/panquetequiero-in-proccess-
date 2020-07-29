import React, { useState, useEffect } from 'react'
import {Props} from './type'

const Card = (props:Props) =>{
    const nombre = props.name
    const direccion = props.direccion
    const data = props.data
    const id = props.id
    const [useScroll,setScroll] = useState(true)
    useEffect(()=>{
        var element:any = !! document.getElementById('pd'+id)?.scrollTop
        var sd:any =document.getElementById('pd'+id)?.scrollHeight
        var ds:any =document.getElementById('pd'+id)?.clientHeight
        var result = sd > ds
        console.log(result)
        if(result === true){
            setScroll(element)
        }
    })
    const handleScroll = (event:any) =>{
        var element:any = !! event.target.scrollTop
        setScroll(element)
    }
    let pedidos = data.map(data =>(
        <p className='col-xl-12'><b>{data.name}:</b> {data.cant}</p>
    ))
    return(
        <div className="card col-xl-2 col-lg-12" id={"card" + id}>
        <p className='col-xl-12'>{nombre} <br/>{direccion}</p>
        <div className="pedido-det" id={'pd' + id} onScrollCapture={handleScroll}>
            {pedidos}
            {useScroll ? '' :
            <div className="col-lg-12" style={{position: 'sticky',bottom:0,width: '10vw',margin: '0 auto'}}>
                <img src="https://cloudcar.com/wp-content/uploads/2018/06/gif-bounce-arrow.gif" style={{width: '50px'}}/>
            </div> }
        </div>
            <div className="button-detailss col-xl-12">
                <a href="#" className="five">Detalles</a>
            </div>
    </div>
    )
}

export default Card