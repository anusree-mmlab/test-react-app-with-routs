import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';

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

    componentDidMount() {
        this.inputElement.focus();
    }

    render() {
        return (
            <Aux>
                <input 
                    ref={(inp) => { this.inputElement = inp;  }}
                    type="text" 
                    id="new_name" 
                    placeholder="Name..." defaultValue=""/> 
                <input type="number" id="age" placeholder="Age..." style={{marginLeft:'10px'}} min="1" max="90"/>
                <input type="button" style={Styles.button} value="Add Value" onClick={this.props.addValueClick.bind(this)} />
                <span id="add_error_msg" style={{fontSize:'10px',color:'red'}}></span>
            </Aux>
        );
    }
}

NewPerson.propTypes = {
    addValueClick : PropTypes.func
}

export default Radium(NewPerson);
//export default NewPerson;