import styled from 'styled-components';
import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart';

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: none;
	width: 200px;
	margin-top: 10px;
	border-radius: 10px;

	&:hover {
		background-color: #e5e5e5;

		button {
			opacity: 1;
		}
	}
`;
export const CardHeader = styled.header`
	text-align: center;
	width: 100%;
`;
export const CardImage = styled.img`
	width: 60%;
	margin-top: 10px;
	border-radius: 8px;
`;
export const CarTitle = styled.h3`
	color: var(--quinary-color);
	font-weight: 500;
	font-size: 14px;
	padding: 10px;
`;
export const CardBody = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
`;
export const CardOldPrice = styled.h5`
	font-weight: 400;
	font-size: 13px;
	text-decoration: line-through;
	color: var(--quinary-color);
`;
export const CardPrice = styled.h4`
	color: var(--quaternary-color);
	font-size: 16px;
	margin-bottom: 5px;
`;
export const CardButton = styled.button`
	background-color: var(--quaternary-color);
	color: var(--primary-color);
	font-weight: bold;
	border: none;
	padding: 4px 20px;
	border-radius: 5px;
	opacity: 0;
	transition: 0.3s;
`;
export const CardIcon = styled(ShoppingCart)`
	width: 24px;
	height: 24px;
`;
