import React from 'react';
import _ from 'lodash';
import Aux from '../../hoc/Aux';
import classes from './BurgerView.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import ManageIngredient from './ManageIngredient/ManageIngredient';


const BurgerView = (props) => {
    const ingredientsArr = Object.keys(props.ingredients);

    const burgerIngredientArr = ingredientsArr.map((ingredientName, index) => {

        const intermediateArr = []
        for( let i = 0; i<props.ingredients[ingredientName]; i++) {
            intermediateArr.push(<BurgerIngredient key={ingredientName +"_"+ i} type={ingredientName} />)
        }

        return intermediateArr;
        
    });

    return (
        <Aux>
            <div className={classes.mainContainer}>
                <div className={classes.container}>
                    {burgerIngredientArr}
                </div>

                <div className={classes.manageIngredientContainer}>
                    <ManageIngredient ingredients={props.ingredients}
                    onAddIngredient = {props.onAddIngredient.bind(this)}
                    onRemoveIngredient = {props.onRemoveIngredient.bind(this)}
                    />
                </div>
            </div>
        </Aux>

    );
}
    
export default BurgerView;


    /* return (
        <Aux>
             <div className={classes.container}>
                <BurgerIngredient type="bunTop" />
                <BurgerIngredient type="meat" />
                <BurgerIngredient type="salad" />
                <BurgerIngredient type="cheese" />
                <BurgerIngredient type="cheese" />
                <BurgerIngredient type="bunBottom" />
            </div>  
           
        </Aux>
    )*/