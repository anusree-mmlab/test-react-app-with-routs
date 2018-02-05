import React, { Component } from 'react';
import Aux from '../hoc/Aux';

import BurgerView from '../components/Burger/BurgerView';

class Burger extends Component {
    state = {
        ingredients : {
            bunTop : 1,
            meat:0,
            cheese : 0,
            souce:0,
            salad : 0,
            bunBottom : 1,
        }
    }

    onAddIngredientHandler(ingredientName) {
        if(!ingredientName) return true;
        this.setState((prevState) => {
            const currentIngredient =  { ...prevState.ingredients};
            currentIngredient[ingredientName] = currentIngredient[ingredientName] + 1 
            return {
                ingredients : currentIngredient
            }
        });
    }

    onRemoveIngredientHandler(ingredientName) {
        if(!ingredientName) return true;
        this.setState((prevState) => {
            const currentIngredient =  { ...prevState.ingredients};
            if(currentIngredient[ingredientName] > 0) {
                currentIngredient[ingredientName] =  currentIngredient[ingredientName] - 1;
                return {
                    ingredients : currentIngredient
                }
            }
        });
    }

    componentWillMount() {
        console.log('Burger componentWillMount');
    }

    componentDidMount() {
        console.log('Burger componentDidMount');
    }

    componentDidCatch() {
        console.log('Burger componentDidCatch');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Burger componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate() {
        console.log('Burger componentWillUpdate');
    }

    componentWillUnMount() {
        console.log('Burger componentWillUnMount');
    }

    render() {
        console.log('Burger render');

        return (
            <Aux>
                <BurgerView 
                    ingredients={this.state.ingredients}
                    onRemoveIngredient = {this.onRemoveIngredientHandler.bind(this)}
                    onAddIngredient = {this.onAddIngredientHandler.bind(this)}
                />
            </Aux>
        )
    }
}

export default Burger;