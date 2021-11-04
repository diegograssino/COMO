import React from 'react'
import '../css/index.css'

const Horarios = () => {
    return (
        <div className="container-fluid horas" >
            <div className="row ">
                <div  className="col text-center aboutContainer">
                <h1 className="tituloAbout text-light mb-5">Nuestros horarios</h1>
                    <p className="subtituloAbout text-light">Abrimos los días miércoles y sábado. <span className="fw-bold">Los pedidos se pueden retirar solo los días sábado.</span></p>
                </div>
                <div className="d-flex justify-content-center text-light">
<p className="me-5"><span className="fw-bold">Miércoles:</span> 14:00 - 19:00</p>
<p className="ms-5"><span className="fw-bold"> Sábados:</span> 10:00 - 18:00</p>
                </div>
            </div>
            
        </div>
    )
}

export default Horarios
