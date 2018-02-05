import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './ManageIngredient.css';

const ManageIngredient = (props) => {
    const ingredientsArr = Object.keys(props.ingredients);

    const ingredientList = ingredientsArr.map((ingredientName, index) => {
        let addButton = '';
        let deleteButton = '';
        if (ingredientName !== 'bunTop' && ingredientName !== 'bunBottom') {
            addButton = (<span className={classes.plusbutton}
            onClick={props.onAddIngredient.bind(this,ingredientName)}
            >+</span> )

            deleteButton = (
                <span className={classes.minusbutton}
                onClick={props.onRemoveIngredient.bind(this,ingredientName)}
                >-</span>
            )
        } else {
            addButton = '';
            deleteButton = '';
        }
        return (
            <div key={"ingname_"+index} className={classes.container}>
                <div className={classes.item}>
                    {ingredientName}<span style={{color:'purple',fontSize:'10px'}}>({props.ingredients[ingredientName]})</span>
                </div>
                <div className={classes.item}>
                    {addButton}
                </div>
                <div className={classes.item}>
                    {deleteButton}
                </div>
            </div>
        )
    });
    
    return (
        <Aux>
            {ingredientList}
        </Aux>
       
    )
}

export default ManageIngredient;