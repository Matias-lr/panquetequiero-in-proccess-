import React, { useState, useEffect } from 'react'
import './cantidades.css'

const Cantidades = () => {
    const [useScroll,setScroll] = useState(true)
    useEffect(()=>{
        var element:any = !! document.getElementById('items')?.scrollTop
        var sd:any =document.getElementById('items')?.scrollHeight
        var ds:any =document.getElementById('items')?.clientHeight
        var result = sd > ds
        console.log(result)
        if(result === true){
            setScroll(element)
        }
    })
    const handleScroll = () =>{
        var element:any = !! document.getElementById('items')?.scrollTop
        setScroll(element)
    }
    return(
        <div className="cantidades col-xl-3 col-lg-3 col-md-12">
            <div className="header-card">
                <h1>Resumen inventario</h1>
            </div>
            <div className="body-card" onScrollCapture={handleScroll}>
                <div className='items col-xl-10 col-lg-10' id="items">
                    <p className="col-xl-12"><b>Salsa:</b> 10%</p>
                    <p className="col-xl-12"><b>Harina:</b> 30%</p>
                    <p className="col-xl-12"><b>Huevos:</b> 70%</p>
                    <p className="col-xl-12"><b>Chocolate:</b> 30%</p> 
                    <p className="col-xl-12"><b>Chocolate:</b> 30%</p> 
                    <p className="col-xl-12"><b>Chocolate:</b> 30%</p> 
                    <p className="col-xl-12"><b>Chocolate:</b> 30%</p> 
                    {useScroll ? '' :
                    <div className="col-lg-12" style={{position: 'sticky',bottom:0,width: '10vw',margin: '0 auto'}}>
                        <img src="https://cloudcar.com/wp-content/uploads/2018/06/gif-bounce-arrow.gif" style={{width: '80px'}}/>
                        </div> }
                </div>
            </div>
        </div>
    )
}

export default Cantidades