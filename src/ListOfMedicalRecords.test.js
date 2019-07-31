import React from 'react';
import renderer from 'react-test-renderer';

import ListOfMedicalRecords from './ListOfMedicalRecords';

const medicalRecords = [{
    firstName: 'John',
    lastName: 'Doe',
    gender: 'male',
    age: '19',
    city: 'Brazaville',
    country: 'Congo',
    diabetes: 'Unknown'
}]

describe('<QuotesList />', () => {
    test('Should not break if a quote is passed', () => {
      const component = renderer.create(<ListOfMedicalRecords  medicalRecords={medicalRecords} />);
      const tree = component.toJSON();
  
      expect(tree).toMatchSnapshot();
    });
});