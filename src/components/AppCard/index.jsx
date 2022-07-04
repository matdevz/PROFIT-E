import React from 'react';

import {
	Card,
	CardHeader,
	CardImage,
	CarTitle,
	CardBody,
	CardOldPrice,
	CardPrice,
	CardButton,
	CardIcon,
} from './styles';

export const AppCard = ({ id, name, price, oldPrice, image }) => {
	return (
		<Card id={id}>
			<CardHeader>
				<CardImage src={image} />
				<CarTitle>{name}</CarTitle>
			</CardHeader>
			<CardBody>
				<CardOldPrice>${oldPrice}</CardOldPrice>
				<CardPrice>
					<span>por</span> ${price}
				</CardPrice>

				<CardButton>
					<CardIcon />
					Comprar
				</CardButton>
			</CardBody>
		</Card>
	);
};
