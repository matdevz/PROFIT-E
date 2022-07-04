import React from 'react';

import { Container, AddressState, AddressParagrapy } from './styles';

export const AppAddress = ({ state, road, city, cep, tel }) => {
	return (
		<Container>
			<AddressState>{state}</AddressState>
			<AddressParagrapy>{road}</AddressParagrapy>
			<AddressParagrapy>{city}</AddressParagrapy>
			<AddressParagrapy>{cep}</AddressParagrapy>
			<AddressParagrapy>{tel}</AddressParagrapy>
		</Container>
	);
};
