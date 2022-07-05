import React from 'react';

import { Container, Content } from './styles';
import { AppLocation } from '../../components/AppLocation/index';
import { AppContact } from '../../components/AppContact/index';
import { AppCreateds } from '../../components/AppCreateds/index';

export const Footer = () => {
	return (
		<Container>
			<Content>
				<AppLocation />
				<AppContact />
				<AppCreateds />
			</Content>
		</Container>
	);
};
