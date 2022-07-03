import React from 'react';

import {
	Container,
	Logo,
	Search,
	SearchInput,
	SearchIcon,
	Nav,
	Account,
	AccountIcon,
	Cart,
	CartIcon,
	CartQuantity,
	Langagues,
	IconPortuguese,
	IconSpanish,
	IconEnglish,
} from './styles';

function Header() {
	return (
		<Container>
			<Logo>
				<img src='./src/assets/logo-profit.svg' alt='Logo Profit-E' />
			</Logo>
			<Search>
				<SearchInput type='text' placeholder='O que está procurando?' />
				<SearchIcon />
			</Search>

			<Nav>
				<Account>
					<AccountIcon />
					Minha Conta
				</Account>
				<Cart>
					<CartIcon />
					<CartQuantity>3</CartQuantity>
				</Cart>

				<Langagues>
					<IconPortuguese>
						<img src='./src/assets/lang-br.svg' alt='' />
					</IconPortuguese>
					<IconSpanish>
						<img src='./src/assets/lang-es.svg' alt='' />
					</IconSpanish>
					<IconEnglish>
						<img src='./src/assets/lang-en.svg' alt='' />
					</IconEnglish>
				</Langagues>
			</Nav>
		</Container>
	);
}

export default Header;
