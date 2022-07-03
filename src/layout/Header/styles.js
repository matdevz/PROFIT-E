import styled from 'styled-components';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';
import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart';
import { AccountCircle } from '@styled-icons/material-sharp/AccountCircle';

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	max-width: 1280px;
	width: 100%;
	height: 80px;
	margin: 0 auto;
`;
export const Logo = styled.div``;

export const Search = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid gray;
	width: 35%;
	padding: 5px;
`;
export const SearchInput = styled.input`
	width: 100%;
	font-size: 16px;
	border: none;
	outline: none;
`;
export const SearchIcon = styled(SearchAlt)`
	width: 24px;
	height: 24px;
`;
export const Nav = styled.nav`
	display: flex;
	align-items: center;
`;

export const Account = styled.div`
	display: flex;
	align-items: center;
	margin-right: 10px;
	cursor: pointer;
`;
export const AccountIcon = styled(AccountCircle)`
	margin-right: 10px;
	width: 24px;
	height: 24px;
`;

export const Cart = styled.div`
	padding-right: 20px;
	border-right: 1px solid gray;
	cursor: pointer;
`;
export const CartIcon = styled(ShoppingCart)`
	width: 24px;
	height: 24px;
`;
export const CartQuantity = styled.span`
	font-weight: bold;
	font-size: 14px;
	padding: 2px 6px;
	border-radius: 50%;
	color: var(--primary-color);
	background-color: var(--quaternary-color);
`;

export const Langagues = styled.div`
	display: flex;
	gap: 15px;
	padding-left: 20px;
`;
export const IconPortuguese = styled.div`
	cursor: pointer;
`;
export const IconSpanish = styled.div`
	cursor: pointer;
`;
export const IconEnglish = styled.div`
	cursor: pointer;
`;
