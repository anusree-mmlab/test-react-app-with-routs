import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import classes from './NewPerson.css';

const Styles = {
    button : {
      marginLeft:'10px',
      width: '150px',
      height: 'auto',
      border: 'solid 1px grey',
      borderRadius:'2px',
      padding:'5px',
     /*  ':hover': {
        backgroundColor:'green',
        border: 'solid 1px orange',
        color:'white'
      } */
    }
  }

/* const NewPerson = (props) => {

    return (
        <Aux>
            <input type="text" id="new_name" placeholder="Name..."/> 
            <input type="number" id="age" placeholder="Age..." style={{marginLeft:'10px'}} min="1" max="90"/>
            <input type="button" style={Styles.button} value="Add Value" onClick={props.addValueClick.bind(this)} />
            <span id="add_error_msg" style={{fontSize:'10px',color:'red'}}></span>
        </Aux>
    );
} */


class NewPerson extends Component {

    state = {
        formObj: {
            name: {
                value: '',
                validation: {
                    required: true,
                    minLength:5
                },
                valid: false,
                touched: false,
                class:[classes.input],
                errorMessage : ''
            },
            age: {
                value: '',
                validation: {
                    required: true,
                    number : true,
                    minVal: 5,
                    maxVal:100,
                    errorMessage : ''
                },
                valid: false,
                touched: false,
                class:[classes.input]
            }
        }

    }

    componentDidMount() {
        this.inputElement.focus();
    }

    validityCheck(fieldName, value) {
        const rules = this.state.formObj[fieldName].validation;

        let valid = true;
        for(let rule in rules) {
          if(rule === 'required') {
            valid =  value.trim() !== '' && valid;
          }  
          
          if(rule === 'minLength') {
            valid =  value.trim().length>=5 && valid;
          }

          if(rule === 'number') {
            valid =  Number.isInteger(+value) && valid;
          }

          if(rule === 'minVal') {
            valid =  +value >=5 && valid;
          }

          if(rule === 'maxVal') {
            valid =  +value <=100 && valid;
          }
        }

        return valid;
    }

    onValueChangeHandler(value, fieldName) {
        const currentFormObj = {...this.state.formObj};
        const fieldObj = currentFormObj[fieldName];
        fieldObj.touched = true;
        const isValid = this.validityCheck(fieldName, value);
        console.log(value, fieldName, isValid);
        fieldObj.valid = isValid;
        const index = fieldObj.class.indexOf(classes.invalid);
        if(!isValid && index === -1)  {
            fieldObj.class.push(classes.invalid)
        }
        if(isValid && index !== -1) {
            fieldObj.class.splice(index,1);
        } 

        this.setState({
            formObj: currentFormObj
        });
    }

    render() {
        console.log(this.props);
        return (
            <Aux>
                <span>{this.props.counter}</span>
                <input 
                    ref={(inp) => { this.inputElement = inp;  }}
                    type="text" 
                    className={this.state.formObj.name.class.join(' ')}
                    id="new_name" 
                    placeholder="Name..." defaultValue="" onChange={(e)=>this.onValueChangeHandler(e.target.value,'name')}/> 

                <input type="text" id="age" placeholder="Age..." 
                className={this.state.formObj.age.class.join(' ')}
                style={{marginLeft:'10px'}} min="1" max="90" onChange={(e)=>this.onValueChangeHandler(e.target.value,'age')}/> 

                <input type="button" style={Styles.button} 
                value="Add Value" onClick={this.props.addValueClick.bind(this)} />

                <input type="button" style={Styles.button} 
                value="Counter" onClick={this.props.onAddCounter} />

                <span id="add_error_msg" style={{fontSize:'10px',color:'red'}}></span>
            </Aux>
        );
    }
}

NewPerson.propTypes = {
    addValueClick : PropTypes.func
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCounter : () => dispatch({type : 'ON_ADD_COUNTER'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Radium(NewPerson));
//export default NewPerson;