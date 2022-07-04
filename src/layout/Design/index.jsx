import React from 'react';

import { Header } from '../Header/index';
import { Banner } from '../Banner/index';
import { Products } from '../Products/index';
import Footer from '../Footer/index';

import { Container } from './styles';

export const Layout = () => {
	return (
		<Container>
			<Header />
			<Banner />
			<Products />
			{/* <Footer /> */}
		</Container>
	);
};
