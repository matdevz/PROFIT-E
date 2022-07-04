import React from 'react';

import { Container, Content } from './styles';
import { AppLocation } from '../../components/AppLocation/index';
import { AppContact } from '../../components/AppContact/index';

export const Footer = () => {
	return (
		<Container>
			<Content>
				<AppLocation />
				<AppContact />
			</Content>
		</Container>
	);
};
