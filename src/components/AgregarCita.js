import React from 'react';
import Context from './Context';

class AgregarCita extends React.Component {

    state={
        inputPetName: '',
        inputOwnerName: '',
        inputDate: '',
        inputTime: '',
        inputSymptoms: '',
    };

    handleChange=(e)=>{
        const name=e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit=(e, callback)=>{
        e.preventDefault();

        if(this.state.inputPetName ===''){
            return;
        }
        if(this.state.inputOwnerName ===''){
            return;
        }
        if(this.state.inputDate ===''){
            return;
        }
        if(this.state.inputTime ===''){
            return;
        }
        if(this.state.inputSymptoms ===''){
            return;
        }

        callback({
            id: Date.now(),
            inputPetName: this.state.inputPetName,
            inputOwnerName: this.state.inputOwnerName,
            inputDate: this.state.inputDate,
            inputTime: this.state.inputTime,
            inputSymptoms: this.state.inputSymptoms,
        });

        this.setState({
            inputPetName: '',
            inputOwnerName: '',
            inputDate: '',
            inputTime: '',
            inputSymptoms: '',
        });
    };

    render =() =>{
        return (
        <Context.Consumer>
            {(context) => {
                return(
                    <div className="card ">
                    <div className="card-body ">

                        {/* 
                                                                        
                        onSubmit={this.handleSubmit}, onClick, onChange
                        handleSubmit(e)
                                                
                        */}
                        <form onSubmit={(e) => this.handleSubmit(e, context.addCita)} > 
                            <div className="formTitle col-sm d-flex p-2  justify-content-center align-items-center"><h5>ADD APPOINTMENT</h5></div>
        
                            <div className="form-group row mb-4">
                                <label htmlFor="inputPetName" className="from_PetName col-sm-6 col-form-label">Pet Name</label>
                                <div className="col-sm-6">
                                    <input type="text" 
                                    className="input_petName form-control-sm" 
                                    name="inputPetName" 
                                    id="inputPetName" 
                                    placeholder="Pet Name"  
                                    value={this.state.inputPetName} 
                                    onChange={this.handleChange}></input>
                                </div>
                            </div> 
        
                            <div className="form-group row mb-4">
                                    <label htmlFor="inputOwnerName" className="form_OwnerName col-sm-6 col-form-label">
                                            Owner Name
                                    </label>
                                <div className="col-sm-6">
                                    <input type="text"
                                        className="input_OwnerName form-control-sm" 
                                        name="inputOwnerName" 
                                        id="inputOwnerName" 
                                        placeholder="Owner Name" 
                                        value={this.state.inputOwnerName}
                                        onChange={this.handleChange}></input>
                                </div>
                            </div>
        
                            <div className="form-group row mb-4">
                                    <label htmlFor="inputDate" className="form_Date col-sm-6 col-form-label">
                                        Date
                                    </label>
                                    <div className="col-sm-6"> 
                                            <input type="date" 
                                            className="input_Date form-control-sm" 
                                            name="inputDate" id="inputDate" 
                                            placeholder="Date"  
                                            value={this.state.inputDate}
                                            onChange={this.handleChange}></input>
                                    </div>
                            </div>
        
                            <div className="form-group row mb-4">
                                    <label htmlFor="inputTime" className="form_Time col-sm-6 col-form-label">
                                        Time
                                    </label>
                                <div className="col-sm-6">
                                    <input type="time" 
                                        className="input_Time form-control-sm" 
                                        name="inputTime" 
                                        id="inputTime" 
                                        placeholder="--/--/--"  
                                        value={this.state.inputTime}
                                        onChange={this.handleChange}></input>
                                    </div>
                            </div>
        
                            <div className="form-group row mb-4">
                                    <label  htmlFor="inputSymptoms"  className="form_Symptoms col-sm-6 col-form-label">
                                        Symptoms
                                    </label>
                                <div className="col-sm-6">
                                        <textarea type="text" 
                                        className="input_Symptoms form-control-sm" 
                                        name="inputSymptoms" id="inputSymptoms" 
                                        placeholder=""  
                                        value={this.state.inputSymptoms}
                                        onChange={this.handleChange}></textarea>
                                </div>
                            </div>
                            <div  className="col">
                                <button type="submit" 
                                    className="btn btn-block btn-add">ADD</button>
                            </div>
                        </form>
                    </div>
                    </div>
                );
            }}
        </Context.Consumer>

        
        );}    
 }; 
export default AgregarCita;