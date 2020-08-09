import React from 'react'
import './panel.css'

interface itemProps{
    name:string;
    id:number;
    percent:number;
}

export default (Props:itemProps) =>{
    const {name,id,percent} = Props
    return(
        <div className="big-item-container col-lg-5 col-md-12">
            <div className="item-container">
                <h3>{name}</h3>
                <div className="loader">
                    {(percent > 20) ?
                    <div className="item-loader" style={{width:`${percent}%`}}>
                        <div className="percent">{percent}%</div>
                    </div> :
                    <div className="item-loader" style={{width:`${percent}%`,backgroundColor: '#e74c3c'}}>
                        <div className="percent">{percent}%</div>
                    </div>
                    }
                </div>
            </div>
            <div className="actions">
                <a href="">
                    <span className="material-icons">
                        create
                    </span>
                </a>
                <a href="">
                    <span className="material-icons">
                        delete
                    </span>
                </a>
            </div>
        </div>)

}