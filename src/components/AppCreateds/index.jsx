import React from 'react';
import LogoProfit from '../../assets/logo-profit-e.svg';
import LogoVtex from '../../assets/logo-vtex.svg';

import { Container, Content } from './styles';

export const AppCreateds = () => {
	return (
		<Container>
			<Content>
				Created By
				<img src={LogoProfit} alt='Logo Profit-e Mono' />
			</Content>
			<Content>
				Created By
				<img src={LogoVtex} alt='Logo Vtex Mono' />
			</Content>
		</Container>
	);
};
