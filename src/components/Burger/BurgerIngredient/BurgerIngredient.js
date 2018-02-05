import React from 'react';
import classes from './BurgerIngredient.css';
import bunTop from '../../../assets/burger-ingredients/bun_top.png';
import bunBottom from '../../../assets/burger-ingredients/bun-bottom.png';


const BurgerIngredient = (props) => {

    let ingredientObj = [];
    switch(props.type) {
        case 'bunTop':
            ingredientObj.push(
                <div key="buntop1" className={classes[props.type]}>
                    <img src={bunTop} width="200"/>
                </div>   
            );
            break;

        case 'meat':
        ingredientObj = (
            <div className={classes[props.type]}>
            </div>   
        );
        break;    


        case 'cheese':
        ingredientObj = (
            <div className={classes[props.type]}>
            </div>   
        );
        break;

        case 'salad':
        ingredientObj = (
            <div className={classes[props.type]}>
            </div>   
        );
        break;

        case 'souce':
        ingredientObj = (
            <div className={classes[props.type]}>
            </div>   
        );
        break;

        case 'bacon':
        ingredientObj = (
            <div className={classes[props.type]}>
            </div>   
        );
        break;


        case 'bunBottom':
            ingredientObj.push(
                <div key="bunbottom1" className={classes[props.type]}>
                    <img src={bunBottom} width="200"/>
                </div>   
            );
            break;    
        default: 
            ingredientObj = <p>Ingredient is {props.type}</p>;
            break;
    }

    return(
        ingredientObj
        
    );
}

export default BurgerIngredient;