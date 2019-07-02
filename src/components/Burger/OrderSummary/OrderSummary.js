import React from 'react'

import Aux from '../../../hoc/Auxilary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>
                : {props.ingredients[igKey]} </li>
        });
    return (
        <Aux>
            <h3>Your order</h3>
            <p>With the following orders</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price: <strong> {props.price.toFixed(2)}</strong></p>
            <p>Contin?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    );
};

export default orderSummary;
