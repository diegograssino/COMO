import React from 'react'
import { Link } from 'react-router-dom'
import  '../css/index.css'

const Banner = () => {
    return (
        <div className="container-fluid  containerHome">
            <div className="row back">
                <div className="col w-100  d-flex flex-column justify-content-center align-center">
                <div>

                    <h1 className="d-block text-center my-auto tituloHome " >Bienvenidx</h1>
                    <p className="d-block text-center my-auto subTitle text-light"> Conocé nuestra cocina en el barrio de Almagro</p>
                    <Link to="/productos" className="text-decoration-none link-secondary" ><button className="btn btn-outline-light btnHome m-auto d-block">HACE TU PEDIDO</button></Link>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Banner
