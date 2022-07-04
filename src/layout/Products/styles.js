import styled from 'styled-components';

export const Container = styled.div`
	position: relative;

	max-width: 1280px;
	padding-top: 10px;
	width: 100%;
`;
export const Title = styled.h2`
	border-bottom: 4px solid var(--tertiary-color);
	width: 50px;
`;

export const Cards = styled.h2`
	max-width: 1180px;
	margin: 0 auto;
	width: 100%;
	overflow-y: hidden;
	display: flex;
	gap: 40px;

	scroll-behavior: smooth;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const CardArrows = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	position: absolute;
	top: 30%;
`;
export const ArrowLeft = styled.img`
	transform: rotate(180deg);
`;
export const ArrowRigth = styled.img``;
