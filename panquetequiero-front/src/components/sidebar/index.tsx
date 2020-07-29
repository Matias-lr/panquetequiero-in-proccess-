import React from 'react';
import './sidebar.css'
import './SBControl'
import { HandleClick,HandleClickClose } from './SBControl';
import {
  Link,
  NavLink
} from "react-router-dom"

export default () =>{
    return(
    <section className="Sidebar" id='sidebar'>
        <nav className="navbar" id='navbar'>
            <ul className="navbar-nav">
                <li className="logo">
                    <a className="nav-link" id="logo" onClick={HandleClick}>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="angle-double-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                        >
                            <g className="fa-group">
                            <path
                                fill="currentColor"
                                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                className="fa-secondary"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                className="fa-primary"
                            ></path>
                            </g>
                        </svg>
                    </a>
                </li>
                <li className="nav-item">
                    <NavLink exact={true} to="/" className="nav-link" activeClassName='active-nav-link' onClick={HandleClickClose}>
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 512.001 512.001" xmlSpace="preserve">
                        <g>
                            <g>
                                <path
                                fill="currentColor"
                                d="M503.402,228.885L273.684,19.567c-10.083-9.189-25.288-9.188-35.367-0.001L8.598,228.886
                                    c-8.077,7.36-10.745,18.7-6.799,28.889c3.947,10.189,13.557,16.772,24.484,16.772h36.69v209.721
                                    c0,8.315,6.742,15.057,15.057,15.057h125.914c8.315,0,15.057-6.741,15.057-15.057V356.932h74.002v127.337
                                    c0,8.315,6.742,15.057,15.057,15.057h125.908c8.315,0,15.057-6.741,15.057-15.057V274.547h36.697
                                    c10.926,0,20.537-6.584,24.484-16.772C514.147,247.585,511.479,236.246,503.402,228.885z"
                                className="fa-primary"/>
                                
                            </g>
                        </g>
                        <g>
                            <g>
                                <path
                                fill="currentColor"
                                d="M445.092,42.73H343.973l116.176,105.636v-90.58C460.149,49.471,453.408,42.73,445.092,42.73z"
                                className="fa-secondary"/>
                            </g>
                        </g>
                        </svg>
                        <span className="link-text">Inicio</span>
                    </NavLink >
                </li>
                <li className="nav-item">
                    <NavLink to="/inventario" className="nav-link" activeClassName='active-nav-link' onClick={HandleClickClose}>
                    <svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" className="fa-primary" d="m11 13.75c0-.413-.338-.75-.75-.75h-3.75v3c0 .552-.448 1-1 1s-1-.448-1-1v-3h-3.75c-.413 0-.75.337-.75.75v9.5c0 .413.337.75.75.75h9.5c.412 0 .75-.337.75-.75z"/>
                        <path fill="currentColor" className="fa-primary" d="m24 13.75c0-.413-.338-.75-.75-.75h-3.75v3c0 .552-.448 1-1 1s-1-.448-1-1v-3h-3.75c-.413 0-.75.337-.75.75v9.5c0 .413.337.75.75.75h9.5c.412 0 .75-.337.75-.75z"/>
                        <path fill="currentColor" className="fa-primary" d="m17.5.75c0-.412-.338-.75-.75-.75h-3.75v3c0 .552-.448 1-1 1s-1-.448-1-1v-3h-3.75c-.413 0-.75.338-.75.75v9.5c0 .413.337.75.75.75h9.5c.412 0 .75-.337.75-.75z"/>
                    </svg>
                        <span className="link-text">Inventario</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/productos" className="nav-link" activeClassName='active-nav-link' onClick={HandleClickClose}>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 500.8 500.8" xmlSpace="preserve">
                    <g>
                        <polygon fill="currentColor" className="fa-primary" points="6.9,200.9 61.7,105.7 164.9,105.7 108.9,202.5 	"/>
                        <polygon fill="currentColor" className="fa-primary" points="168.9,105.7 432.1,105.7 488.9,202.5 244.5,202.5 	"/>
                    </g>
                    <polygon fill="currentColor" className="fa-primary" points="432.1,202.1 432.1,392.1 64.9,392.1 64.9,202.1 107.3,202.1 168.9,105.7 244.5,202.9 "/>
                    <path fill="currentColor" className="fa-base"  d="M438.1,102.1c0-0.4-0.4-0.4-0.4-0.4c-0.4-0.4-0.4-0.8-0.8-1.2c-0.4-0.4-0.8-0.4-1.2-0.8
                        c-0.4-0.4-0.8-0.4-1.2-0.4c-0.4,0-0.8-0.4-1.2-0.4c-0.4,0-0.4,0-0.8,0H64.9c-0.4,0-0.4,0-0.8,0s-0.8,0-1.2,0.4
                        c-0.4,0-0.8,0.4-1.2,0.4c-0.4,0.4-0.8,0.4-1.2,0.8c-0.4,0.4-0.8,0.8-0.8,1.2c0,0.4-0.4,0.4-0.4,0.4L0.9,198.5c-1.2,2-1.2,4.8,0,6.8
                        c0.8,2,3.2,3.6,5.6,3.6h51.6v183.2c0,3.6,3.2,6.8,6.8,6.8h367.6c3.6,0,6.8-3.2,6.8-6.8V208.9h51.6c2.4,0,4.8-1.2,6-3.6
                        c1.2-2,1.2-4.8,0-6.8L438.1,102.1z M68.5,112.5h88l-52.4,82.8H18.5L68.5,112.5z M71.7,208.9h36.4c2.4,0,4.4-1.2,5.6-3.2l48.4-76.8
                        v256.4H71.7V208.9z M425.3,385.3h-250V125.7l60.8,80.4c1.2,1.6,3.2,2.8,5.2,2.8h184V385.3z M244.9,195.3l-62.8-82.8h246.4l50,82.8
                        H244.9z"/>
                    </svg>

                        <span className="link-text">Productos</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/clientes" className="nav-link" activeClassName='active-nav-link' onClick={HandleClickClose}>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 511.999 511.999" xmlSpace="preserve">
                    <g>
                        <g>
                            <path fill="currentColor" className="fa-primary" d="M438.09,273.32h-39.596c4.036,11.05,6.241,22.975,6.241,35.404v149.65c0,5.182-0.902,10.156-2.543,14.782h65.461
                                c24.453,0,44.346-19.894,44.346-44.346v-81.581C512,306.476,478.844,273.32,438.09,273.32z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="currentColor" className="fa-primary" d="M107.265,308.725c0-12.43,2.205-24.354,6.241-35.404H73.91c-40.754,0-73.91,33.156-73.91,73.91v81.581
                                c0,24.452,19.893,44.346,44.346,44.346h65.462c-1.641-4.628-2.543-9.601-2.543-14.783V308.725z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="currentColor" className="fa-primary" d="M301.261,234.815h-90.522c-40.754,0-73.91,33.156-73.91,73.91v149.65c0,8.163,6.618,14.782,14.782,14.782h208.778
                                c8.164,0,14.782-6.618,14.782-14.782v-149.65C375.171,267.971,342.015,234.815,301.261,234.815z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="currentColor" className="fa-primary" d="M256,38.84c-49.012,0-88.886,39.874-88.886,88.887c0,33.245,18.349,62.28,45.447,77.524
                                c12.853,7.23,27.671,11.362,43.439,11.362c15.768,0,30.586-4.132,43.439-11.362c27.099-15.244,45.447-44.28,45.447-77.524
                                C344.886,78.715,305.012,38.84,256,38.84z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="currentColor" className="fa-primary" d="M99.918,121.689c-36.655,0-66.475,29.82-66.475,66.475c0,36.655,29.82,66.475,66.475,66.475
                                c9.298,0,18.152-1.926,26.195-5.388c13.906-5.987,25.372-16.585,32.467-29.86c4.98-9.317,7.813-19.946,7.813-31.227
                                C166.393,151.51,136.573,121.689,99.918,121.689z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="currentColor" className="fa-primary" d="M412.082,121.689c-36.655,0-66.475,29.82-66.475,66.475c0,11.282,2.833,21.911,7.813,31.227
                                c7.095,13.276,18.561,23.874,32.467,29.86c8.043,3.462,16.897,5.388,26.195,5.388c36.655,0,66.475-29.82,66.475-66.475
                                C478.557,151.509,448.737,121.689,412.082,121.689z"/>
                        </g>
                    </g>
                    </svg>

                        <span className="link-text">Clientes</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/pedidos" className="nav-link" activeClassName='active-nav-link' onClick={HandleClickClose}>
                    <svg id="Capa_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path fill="currentColor" className="fa-primary" d="m512 169c0-33.41 0-56.783 0-59 0-24.813-20.187-45-45-45h-6v55c0 8.284-6.716 15-15 15s-15-6.716-15-15c0-16.839 0-63.232 0-80 0-8.284-6.716-15-15-15s-15 6.716-15 15v25h-100v55c0 8.284-6.716 15-15 15s-15-6.716-15-15c0-16.839 0-63.232 0-80 0-8.284-6.716-15-15-15s-15 6.716-15 15v25h-100v55c0 8.284-6.716 15-15 15s-15-6.716-15-15c0-16.839 0-63.232 0-80 0-8.284-6.716-15-15-15s-15 6.716-15 15v25h-36c-24.813 0-45 20.187-45 45v59z"/>
                            <path fill="currentColor" className="fa-primary" d="m0 199v243c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45 0-6.425 0-146.812 0-243-9.335 0-506.836 0-512 0zm144 208h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-64h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-64h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm128 128h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-64h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-64h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm128 128h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-64h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-64h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15z"/>
                        </g>
                    </svg>

                        <span className="link-text">Pedidos</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/settings" className="nav-link" activeClassName='active-nav-link' onClick={HandleClickClose}>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 512.002 512.002" xmlSpace="preserve">
                    <path fill="currentColor" className='fa-primary' d="M496.647,312.107l-47.061-36.8c1.459-12.844,1.459-25.812,0-38.656l47.104-36.821
                        c8.827-7.109,11.186-19.575,5.568-29.419l-48.96-84.629c-5.639-9.906-17.649-14.232-28.309-10.197l-55.467,22.315
                        c-10.423-7.562-21.588-14.045-33.323-19.349l-8.512-58.923c-1.535-11.312-11.24-19.72-22.656-19.627h-98.133
                        c-11.321-0.068-20.948,8.246-22.528,19.456l-8.533,59.093c-11.699,5.355-22.846,11.843-33.28,19.371L86.94,75.563
                        c-10.55-4.159-22.549,0.115-28.096,10.005L9.841,170.347c-5.769,9.86-3.394,22.463,5.568,29.547l47.061,36.8
                        c-1.473,12.843-1.473,25.813,0,38.656l-47.104,36.8c-8.842,7.099-11.212,19.572-5.589,29.419l48.939,84.651
                        c5.632,9.913,17.649,14.242,28.309,10.197l55.467-22.315c10.432,7.566,21.604,14.056,33.344,19.371l8.533,58.88
                        c1.502,11.282,11.147,19.694,22.528,19.648h98.133c11.342,0.091,21-8.226,22.592-19.456l8.533-59.093
                        c11.698-5.357,22.844-11.845,33.28-19.371l55.68,22.379c10.55,4.149,22.543-0.122,28.096-10.005l49.152-85.12
                        C507.866,331.505,505.447,319.139,496.647,312.107z M255.964,362.667c-58.91,0-106.667-47.756-106.667-106.667
                        s47.756-106.667,106.667-106.667s106.667,47.756,106.667,106.667C362.56,314.882,314.845,362.597,255.964,362.667z"/>
                    </svg>
                        <span className="link-text">Settings</span>
                    </NavLink>
                </li>
            </ul>
        </nav>

    </section>
    )
}