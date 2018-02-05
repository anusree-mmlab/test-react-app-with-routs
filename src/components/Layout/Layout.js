import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import classes from './Layout.css';
import Aux from '../../hoc/Aux';

class Layout extends Component{

    state = {
        currentMenu : '' 
    }
    
    render() {
        return (
            <Aux>
                <header  className={classes.Layout}>
                    <ul>
                    <Link to="/burger" onClick={() => {this.setState({currentMenu:'burger'})}}>
                        <li className={classes.li_link}
                            style={this.state.currentMenu==='burger' ? 
                                    {backgroundColor:'crimson', color:'white'}  : 
                                    {backgroundColor:'grey',color:'black'}
                                }
                            >
                            Burger
                        </li>
                        </Link>
                        <Link to="/person" onClick={() => {this.setState({currentMenu:'person'})}}>
                        <li  className={classes.li_link} 
                            style={this.state.currentMenu==='person' ? 
                                        {backgroundColor:'crimson', color:'white'}  : 
                                        {backgroundColor:'grey',color:'black'}
                                    }
                                >
                            Person
                        </li>
                        </Link>
                </ul>    
                </header> 
                
                <main className={classes.Layout}>
                   {this.props.children}
                </main> 
            </Aux>   
        )
    }
}

export default Layout;