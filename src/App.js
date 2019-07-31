import React, { Component } from 'react';
import MedicalForm from './MedicalForm';
import ListOfMedicalRecords from './ListOfMedicalRecords';
import './App.css'; 

/**
 * App component - houses all the other components in the app
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      medicalRecords: []
    }
  }

  

  handleSubmit(fields) {

    const patientData = [fields];
    this.setState({
      medicalRecords: [...patientData, ...this.state.medicalRecords]
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>New Medical Record</h1>
        </header>
        <MedicalForm handleSubmit={fields => this.handleSubmit(fields)} />
        {this.state.medicalRecords.length > 0 ? 
          <ListOfMedicalRecords medicalRecords={this.state.medicalRecords} /> 
          : ''}
      </div>
    );
  }
}

export default App;

