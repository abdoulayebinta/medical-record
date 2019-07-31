import React, { Component } from 'react';

const initialState = {
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    city: '',
    country: '',
    diabetes: '',
    firstNameError: '',
    lastNameError: '',
    genderError: '',
    ageError: '',
    cityError: '',
    countryError: '',
    diabetesError: ''
};

/**
 * Component MedicalForm - renders a medical form
 * with client side validation 
 */
class MedicalForm extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    /**
     * Validate the form before submitting
     */
    validateForm() {
        let firstNameError = '';
        let lastNameError = '';
        let genderError = '';
        let ageError =  '';
        let cityError = '';
        let countryError = '';
        let diabetesError = '';

        if(!this.state.firstName) {
            firstNameError = "please provide a first name"
        }

        if(!this.state.lastName) {
            lastNameError = "please provide a last name"
        }
        if(!this.state.gender) {
            genderError = "gender is required"
        }
        if(!this.state.age || this.state.age < 0 || this.state.age > 150) {
            ageError = "age cannot be empty, negative or more than 150 years";
        }
        if(!this.state.city) {
            cityError = "You must select a city";
        }
        if(!this.state.country) {
            countryError = "You must select a country";
        }
        if(!this.state.diabetes) {
            diabetesError = "Is the patient living with a diabetes?";
        }

        if(firstNameError || lastNameError || genderError || ageError || cityError || countryError || diabetesError) {
            this.setState({ firstNameError, lastNameError, genderError, ageError, cityError, countryError, diabetesError });
            return false;
        }

        return true;
    }

    /**
     * Handle submit - Submission of the form
     * @param {object} e - event 
     */
    handleSubmit(e) {
        e.preventDefault();
        // Validate the form when user is submitting
        const isValidForm = this.validateForm();
        if (isValidForm) {
            this.props.handleSubmit(this.state);
            // clear the form
            this.setState(initialState);
        }
       
        
    }

    
    handleChange(e)  {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    
    render() {
    return (
        <form className="form-element" onSubmit={this.handleSubmit}>
            <div className="form-row">
                <div className="col-md-6 mb-3">
                    <input
                        className="form-control"  
                        name="firstName"
                        value={this.state.firstName} 
                        onChange={e => this.handleChange(e)} 
                        placeholder="First Name"
                    />
                    <div className="validation">{this.state.firstNameError}</div>
                </div>
                <div className="col-md-6 mb-3">
                    <input 
                        className="form-control"
                        name="lastName"
                        value={this.state.lastName} 
                        onChange={e => this.handleChange(e)} 
                        placeholder="Last Name"
                    />
                    <div className="validation">{this.state.lastNameError}</div>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-6 mb-3">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            name="gender"
                            type="radio"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={e => this.handleChange(e)} 
                        />
                        <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            name="gender"
                            type="radio"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={e => this.handleChange(e)} 
                        />
                        <label className="form-check-label">Female</label>
                        <div className="validation">{this.state.genderError}</div>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <input
                        className="form-control age"
                        name="age"
                        type="number"
                        value={this.state.age}
                        onChange={e => this.handleChange(e)} 
                        placeholder="Age" 
                    />  
                    <div className="validation">{this.state.ageError}</div> 
                </div> 
            </div>
            <div className="form-row">
                <div className="col-md-6 mb-3">
                    <select 
                        className="form-control"
                        name="city"
                        value={this.state.city} 
                        onChange={e => this.handleChange(e)} >
                        <option value='' disabled>City</option>
                        <option>Brazaville</option>
                        <option>Conakry</option>
                        <option>Monrovia</option>
                        <option>Freetowm</option>
                    </select>
                    <div className="validation">{this.state.cityError}</div>
                </div>
                <div className="col-md-6 mb-3">
                    <select 
                        className="form-control"
                        name="country"
                        value={this.state.country} 
                        onChange={e => this.handleChange(e)} >
                        <option value='' disabled>Country</option>
                        <option>Congo</option>
                        <option>Guinea</option>
                        <option>Liberia</option>
                        <option>Sierra Leone</option>
                    </select>
                    <div className="validation">{this.state.countryError}</div>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-6 mb-3">
                    <label >Living with Diabetes?  </label>   
                    <div className="validation">{this.state.diabetesError}</div> 
                </div>
                <div className="col-md-6 mb-3">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            name="diabetes"
                            type="radio"
                            value="yes"
                            checked={this.state.diabetes === "yes"}
                            onChange={e => this.handleChange(e)} 
                        />
                        <label className="form-check-label">Yes</label> 
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            name="diabetes"
                            type="radio"
                            value="no"
                            checked={this.state.diabetes === "no"}
                            onChange={e => this.handleChange(e)} />
                        <label className="form-check-label">No</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            name="diabetes"
                            type="radio"
                            value="unknown"
                            checked={this.state.diabetes === "unknown"}
                            onChange={e => this.handleChange(e)} />
                        <label className="form-check-label">Unknown</label> 
                    </div>
                </div>
            </div>
            <div className="text-right">
                <button type="submit" className="btn btn-primary save-button">Save</button>
            </div>
        </form>
    );
    }
}           


export default MedicalForm;