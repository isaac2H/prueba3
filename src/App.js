import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
{Id: 1, Nombre:"Isaac Hidalgo", Correo:"hidalgoisaac58@gmail.com", Teléfono:"86795625"},

];

class App extends React.Component {
  state = {
    data: data,
    form:{
      Id: '',
      Nombre:'',
      Correo:'',
      Teléfono:''
    },
    modalInsertar: false,
    modalEditar: false,
  };

handlechange=e=>{
this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value,
  }
});
}

mostrarModalInsertar=()=>{
  this.setState({modalInsertar: true});
}

ocultarModalInsertar=()=>{
  this.setState({modalInsertar: false});
}

mostrarModalEditar=(registro)=>{
  this.setState({modalEditar: true, form: registro});
}

ocultarModalEditar=()=>{
  this.setState({modalEditar: false});
}
insertar=()=>{
  var valorNuevo={...this.state.form};
  valorNuevo.Id=this.state.data.length+1;
  var lista=this.state.data;
  lista.push(valorNuevo);
  this.setState({data: lista, modalInsertar: false});
}

editar=(dato)=>{
  var contador=0;
  var lista=this.state.data;
  lista.map((registro)=>{
      if(dato.Id==registro.Id){
      lista[contador].Nombre=dato.Nombre;
      lista[contador].Correo=dato.Correo;
      lista[contador].Teléfono=dato.Teléfono;
    }
    contador++;
  });
  this.setState({data: lista, modalEditar: false});
}

eliminar=(dato)=>{
  var opcion=window.confirm("Desea eliminar el registro "+dato.Id);
  if(opcion){
    var contador=0;
    var lista = this.state.data;
    lista.map((registro)=>{
      if(registro.Id==dato.Id){
        lista.splice(contador, 1);
      }
      contador++;
    });
    this.setState({data:lista});
  }
}

  render() {
    return (
      <>
        <Container>
          <br />
          <Button color="success"onClick={()=>this.mostrarModalInsertar()}>Insertar nuevo usuario</Button>
          <br />
          <br />

          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr>
                  <td>{elemento.Id}</td>
                  <td>{elemento.Nombre}</td>
                  <td>{elemento.Correo}</td>
                  <td>{elemento.Teléfono}</td>
                  <td>
                    <Button color="primary"onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button>
                    {"  "}
                    <Button color="danger"onClick={()=>this.eliminar(elemento)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>insertar registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input className="form-control" readOnly type="text" value={this.state.data.length+1} />
            </FormGroup>

            <FormGroup>
              <label>Nombre:</label>
              <input className="form-control" name="Nombre" type="text" onChange={this.handlechange}/>
            </FormGroup>

            <FormGroup>
              <label>Correo:</label>
              <input className="form-control" name="Correo" type="text" onChange={this.handlechange} />
            </FormGroup>

            <FormGroup>
              <label>Teléfono:</label>
              <input className="form-control" name="Teléfono" type="number" onChange={this.handlechange} />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary"onClick={()=>this.insertar()}>insertar</Button>
            <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>cancelar</Button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>
            <div>
              <h3>Editar registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input className="form-control" readOnly type="text" value={this.state.form.Id}  />
            </FormGroup>

            <FormGroup>
              <label>Nombre:</label>
              <input className="form-control" name="Nombre" type="text" onChange={this.handlechange} value={this.state.form.Nombre}/>
            </FormGroup>

            <FormGroup>
              <label>Correo:</label>
              <input className="form-control" name="Correo" type="text" onChange={this.handlechange} value={this.state.form.Correo}/>
            </FormGroup>

            <FormGroup>
              <label>Teléfono:</label>
              <input className="form-control" name="Teléfono" type="number" onChange={this.handlechange} value={this.state.form.Teléfono}/>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary"onClick={()=>this.editar(this.state.form)}>Editar</Button>
            <Button color="danger"onClick={()=>this.ocultarModalEditar()}>cancelar</Button>
          </ModalFooter>
        </Modal>
          
      </>
    );
  }
}

export default App;
