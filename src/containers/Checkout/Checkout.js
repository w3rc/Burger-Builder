import React, { Component } from 'react';
import CheckoutSummary from '../../components/Checkout/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
	state = {
		ingredients: {
			salad: 1,
			bacon: 1,
			meat: 1,
			cheese: 1
		}
	};

	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
            console.log(query.entries())
		}
		this.setState({ ingredients: ingredients });
	}

	checkoutCancelledHandler = () => {
		this.props.history.goBack('/');
	};

	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	};

	render() {
		return (
			<div>
				<CheckoutSummary
					ingredients={this.state.ingredients}
					checkoutCancelled={this.checkoutCancelledHandler}
					checkoutContinued={this.checkoutContinuedHandler}
                />
                <ContactData />
			</div>
		);
	}
}

export default Checkout;
