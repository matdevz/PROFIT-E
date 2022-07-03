import React from 'react';

import { Cart, CartIcon, CartQuantity } from './styles';

export const AppCart = () => {
	return (
		<Cart>
			<CartIcon />
			<CartQuantity>3</CartQuantity>
		</Cart>
	);
};
