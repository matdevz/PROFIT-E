import styled from 'styled-components';
import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 210px;
	width: 100%;
	margin-top: 10px;

	&:hover {
		button {
			opacity: 1;
		}
	}
`;
export const CardHeader = styled.header`
	text-align: center;
	width: 100%;
`;
export const CardImage = styled.div`
	background-color: var(--quinary-color);
	width: 100%;
	height: 120px;
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
