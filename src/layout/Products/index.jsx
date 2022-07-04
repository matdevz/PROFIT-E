import React from 'react';

import { Container, Title, Cards } from './styles';
import { AppCard } from '../../components/AppCard/index';

export const Products = () => {
	return (
		<>
			<Container>
				<Title>Produtos</Title>

				<Cards>
					<AppCard />
					<AppCard />
					<AppCard />
					<AppCard />
					<AppCard />
					<AppCard />
				</Cards>
			</Container>
		</>
	);
};
