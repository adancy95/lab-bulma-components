import React from 'react';
import '../App.css';

class FormField extends React.Component {
  render() {
    return (
      <div className="field form-field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input className="input" type={this.props.type} placeholder={this.props.placeholder}/>
        </div>
      </div>
      
  
     
      
    )
  }
}

export default FormField;