import React from 'react';

import { Container, ContactButton, IconEmail, IconTel } from './styles';

export const AppContact = () => {
	return (
		<Container>
			<ContactButton>
				<IconEmail />
				<span>ENTRE EM CONTATO</span>
			</ContactButton>
			<ContactButton>
				<IconTel />
				<span>
					FALE COM NOSSO <br />
					CONSULTOR ONLINE
				</span>
			</ContactButton>
		</Container>
	);
};
