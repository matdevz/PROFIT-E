import React from 'react';
import { AppSearch } from '../../components/AppSearch/index';
import { AppAccount } from '../../components/AppAccount/index';
import { AppCart } from '../../components/AppCart/index';
import { AppLang } from '../../components/AppLang/index';

import { Container, Logo, Nav } from './styles';

export const Header = () => {
	return (
		<Container>
			<Logo src='./src/assets/logo-profit.svg' alt='Logo Profit-E' />
			<AppSearch />
			<Nav>
				<AppAccount />
				<AppCart />
				<AppLang />
			</Nav>
		</Container>
	);
};
