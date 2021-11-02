import React from 'react'
import  '../css/index.css'

const Banner = () => {
    return (
        <div className="container-fluid vh-100  containerHome">
            <div className="row back">
                <div className="col w-100 vh-100 d-flex flex-column justify-content-center align-center">
                <div>

                    <h1 className="d-block text-center my-auto tituloHome " >Bienvenidx</h1>
                    <p className="d-block text-center my-auto subTitle text-light"> Conocé nuestra cocina en el barrio de Almagro</p>
                    <button className="btn btn-outline-light btnHome m-auto d-block">HACE TU PEDIDO</button>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Banner
