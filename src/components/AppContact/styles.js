import styled from 'styled-components';
import { Email } from '@styled-icons/material/Email';
import { Headset } from '@styled-icons/bootstrap/Headset';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
export const ContactButton = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;
	width: 180px;
	padding: 4px;
	border: none;
	border-radius: 5px;
	transition: 0.3s;
	background-color: var(--tertiary-color);

	&:hover {
		background-color: var(--tertiary-hover-color);
	}

	> span {
		font-weight: bold;
		text-align: justify;
	}
`;
export const IconEmail = styled(Email)`
	width: 24px;
	height: 24px;
`;
export const IconTel = styled(Headset)`
	width: 24px;
	height: 24px;
`;
