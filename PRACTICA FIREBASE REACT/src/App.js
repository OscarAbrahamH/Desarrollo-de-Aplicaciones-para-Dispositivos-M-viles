import './App.css';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';
import firebase from './Settings/ConfigFirebase.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      ropa:{
        ID_ROPA:"",
        Marca:"",
        Tipo_De_Ropa:"",
        Talla:""
      },
      lista:[],
      desactivado:false,
    };
  }
  
  componentDidMount(){
    firebase.database().ref('ropas').on('value', snapshot=> {
      let ropasLista=[];
      snapshot.forEach(row=>{
          ropasLista.push({
            ID_ROPA:row.key,
            Marca:row.val().Marca,
            Tipo_De_Ropa:row.val().Tipo_De_Ropa,
            Talla:row.val().Talla
          })
      })
      this.setState({
        ...this.state,
        lista:ropasLista
      })
    });
  }


  guardarCambios=(e)=>{
    this.setState({ 
      ...this.state,
      ropa:{
      ...this.state.ropa,  
      [e.target.name]: e.target.value
      } 
      //Marca:e.target.value 
    });
  }
  
  eliminar=(id)=>{

    firebase.database().ref('ropas/' + id).set(null).then(() => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Eliminado',
        showConfirmButton: false,
        timer: 1500
      })
    });

    const temporal = this.state.lista.filter(a=>a.ID_ROPA!==id)
    this.setState({
      ...this.state,
      lista:temporal
    })
  }

  modificar=(id)=>{
    const temporal = this.state.lista.find(a=>a.ID_ROPA===id);
    this.setState({
      ...this.state,
      ropa:{
        ID_ROPA:temporal.ID_ROPA,
        Marca:temporal.Marca,
        Tipo_De_Ropa:temporal.Tipo_De_Ropa,
        Talla:temporal.Talla
      },
      desactivado:true
    })
  }
  enviar=(e)=>{
    e.preventDefault();

    const {ID_ROPA,Marca, Tipo_De_Ropa, Talla} = this.state.ropa;
      
    const vacios = (ID_ROPA.length===0 && Marca.length===0 && Tipo_De_Ropa.length===0 && Talla.length===0) || Talla==="selecciona" 

    if(!vacios){

      firebase.database().ref('ropas/' + ID_ROPA).update(this.state.ropa).then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'ropa agregado',
          showConfirmButton: false,
          timer: 1500
        })
      });


      
      
      let temporal = this.state.lista;

      if(this.state.desactivado===true){
        temporal= temporal.filter(a=>a.ID_ROPA!==ID_ROPA)
      }

      this.setState({
        ...this.state,
        lista:[...temporal,this.state.ropa],
        ropa:{
          ID_ROPA:"",
          Marca:"",
          Tipo_De_Ropa:"",
          Talla:""
        },
        desactivado:false
      })
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Llenar todos los campos',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    
  }
  
  render() {
    
    return (
      <div className="App">
        <Header/>
        <div className="Containers">
          <Formulario
              enviar={this.enviar}
              guardarCambios={this.guardarCambios}
              ropa={this.state.ropa}
              desactivado={this.state.desactivado}
          />
          <Listado
            lista={this.state.lista}
            eliminar={this.eliminar}
            modificar={this.modificar}
          />
          
        </div>
      </div>
    )
  }
}

export default App;
