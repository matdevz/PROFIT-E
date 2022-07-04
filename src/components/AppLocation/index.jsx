import React from 'react';

import { Container, Location, Address, Title } from './styles';
import { AppAddress } from '../AppAddress/index';

export const AppLocation = () => {
	return (
		<Container>
			<Location>
				<Title>Localização</Title>

				<Address>
					<AppAddress
						state='São Paulo'
						road='Rua do Rócio, 423/1801'
						city='Vila Olímpa - Sp'
						cep='04552-000'
						tel='+55 99 99090-9090'
					/>
					<AppAddress
						state='Rio de Janeiro'
						road='Vol. da Pátria, 301/702'
						city='Botafogo - RJ'
						cep='22270-000'
						tel='+55 89 028389-1830'
					/>
				</Address>
			</Location>
		</Container>
	);
};
