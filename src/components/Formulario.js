import React,{Fragment, useState,}from 'react'
const Formulario = () => {

    const [datos, setDatos] = useState({  codigo: '',  nombre: '', correo: '', telefono: '', })

    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.codigo + '' + datos.nombre +''+ datos.correo + '' + datos.telefono )
    }  

    return ( 
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
            <div className="col-md-3">
                    <input
                    placeholder="Ingrese Código"
                    className="form-control"
                    type="number"
                    name="nombre"
                    onchange={handleInputChange}
                    >
                    </input>
                </div>
                <div className="col-md-3">
                    <input
                    placeholder="Ingrese Nombre"
                    className="form-control"
                    type="text"
                    name="nombre"
                    onchange={handleInputChange}
                    >
                    </input>
                </div>
                <div className="col-md-3">
                    <input
                    placeholder="Ingrese Correo"
                    className="form-control"
                    type="email"
                    name="apellido"
                    onchange={handleInputChange}
                    >
                    </input>
                </div>
                <div className="col-md-3">
                    <input
                    placeholder="Ingrese Teléfono"
                    className="form-control"
                    type="number"
                    name="nombre"
                    onchange={handleInputChange}
                    >
                    </input>
                </div>
                <div className="col-md-3">
                    <button classname="btn btn-primary"type="submit">Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </Fragment>
       
    );
    
}

 export default Formulario; 