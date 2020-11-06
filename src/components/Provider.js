import React, {Component} from 'react';
import Context from './Context';

class Provider extends Component{

    state={
        citas:[],
      };
      
      addCita=(cita)=>{
        let citas=[... this.state.citas, cita];
    
        this.setState({
          citas
        });
      };
    
      removeCita=(id)=>{
        let citas = [... this.state.citas];
        //delete citas[id]; //se usa para eliminar un objeto
    
        //filter = reforma un nuevo arreglo con los elementos que cumplen a condición
        let newCitas = citas.filter((cita)=> cita.id !== id);
        
        this.setState({
          citas: newCitas,
        });
      };
    
      componentDidMount=()=>{ //se ejecuta al recargar
        //console.log('componentDidMount')
        let citas = JSON.parse(localStorage.getItem('citas')) || [];
        console.log('citas');
    
        this.setState({
          citas,
        });
      };
    
      componentDidUpdate=(prevProps, prevState)=>{ //se ejecuta al actualizar un componente
        //almacenan string, llave => valor  |  JSON.stringify para pasar de arreglo a String
        localStorage.setItem('citas', JSON.stringify(this.state.citas)); //usar almacenamiento local del sistema
      };


      render=()=>{
        return(
            <Context.Provider value={{
                citas: this.state.citas,
                addCita: this.addCita,
                removeCita: this.removeCita
                }}>
                {this.props.children}
            </Context.Provider>
        );
      };
};

export default Provider;