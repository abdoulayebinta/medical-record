import React, { Component } from 'react';

/**
 * ListOfMedicalRecord component - shows a list of patient
 * with filtering for patient under 18
 */
class ListOfMedicalRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onlyMinors: false
    };

    this.onCheckChange = this.onCheckChange.bind(this);

  }

  onCheckChange(e) {
    this.setState({ 
      [e.target.name]: e.target.checked 
    });
  }

  render() {

    const { medicalRecords } = this.props;

    return (
      <div>
        <hr />
        <div className="row">
         <div className="col-md-6 mb-3">
            <h2>List of medical records</h2>
         </div>
        <div className="col-md-6 mb-3">
          <div className="form-check">
              <input 
                  name="onlyMinors"
                  className="form-check-input"
                  type="checkbox"
                  checked={this.state.onlyMinors}
                  onChange={this.onCheckChange}
                />
                <label className="form-check-label">Only Minors</label>
            </div>
        </div>
      </div>
      <div>
        <ul className="list-group">
              {this.state.onlyMinors ? medicalRecords.filter(patient => patient.age < 18)
                .map((medicalRecord, i) => 
                <li key={i} className="list-group-item">
                  { medicalRecord.firstName + ' ' +
                    medicalRecord.lastName.toUpperCase() + ' ' +
                    '(' + medicalRecord.gender + '), ' +  medicalRecord.age +
                    ' - ' + medicalRecord.city + ' (' + medicalRecord.country + ')'
                  }
                </li>
                ) : medicalRecords.map((medicalRecord, i) => 
                <li key={i} className="list-group-item">
                  { medicalRecord.firstName + ' ' +
                    medicalRecord.lastName.toUpperCase() + ' ' +
                    '(' + medicalRecord.gender + '), ' +  medicalRecord.age +
                    ' - ' + medicalRecord.city + ' (' + medicalRecord.country + ')'
                  }
                </li>
              )}
          </ul>
      </div>
    </div>            
    );
  }
}  

export default ListOfMedicalRecords;


    

