import React from 'react';

import { Search, SearchInput, SearchIcon } from './styles';

export const AppSearch = () => {
	return (
		<>
			<Search>
				<SearchInput type='text' placeholder='O que está procurando?' />
				<SearchIcon />
			</Search>
		</>
	);
};
