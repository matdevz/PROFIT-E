import styled from 'styled-components';
import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart';

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
