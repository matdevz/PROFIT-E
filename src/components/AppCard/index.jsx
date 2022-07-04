import React from 'react';

import {
	Container,
	CardHeader,
	CardImage,
	CarTitle,
	CardBody,
	CardOldPrice,
	CardPrice,
	CardButton,
	CardIcon,
} from './styles';

export const AppCard = () => {
	return (
		<Container>
			<CardHeader>
				<CardImage />
				<CarTitle>TÊNIS COURO PUMA R193</CarTitle>
			</CardHeader>
			<CardBody>
				<CardOldPrice>de $ 89, 00</CardOldPrice>
				<CardPrice>
					<span>por</span> $ 70, 00
				</CardPrice>

				<CardButton>
					<CardIcon />
					Comprar
				</CardButton>
			</CardBody>
		</Container>
	);
};
