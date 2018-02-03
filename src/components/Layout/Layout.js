import React from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Aux';

const Layout = (props) => {
    return (
        <Aux>
            <header>
                <ul>
                    <li className={classes.li_link}
                        style={props.currentMenu==='burger' ? 
                                {backgroundColor:'crimson', color:'white'}  : 
                                {backgroundColor:'grey',color:'black'}
                            }
                        >
                        Burger
                    </li>
                    <li  className={classes.li_link} 
                        style={props.currentMenu==='person' ? 
                                    {backgroundColor:'crimson', color:'white'}  : 
                                    {backgroundColor:'grey',color:'black'}
                                }
                            >
                        Person
                    </li>
            </ul>    
            </header> 
            
            <main>
               
            </main> 
        </Aux>   
    )
}

export default Layout;