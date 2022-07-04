import styled from 'styled-components';

export const Container = styled.div`
	position: relative;

	max-width: 1280px;
	padding: 40px 0 140px 0;
	width: 100%;

	@media (max-width: 1280px) {
		margin: 10px 20px;
	}
`;
export const Title = styled.h2`
	border-bottom: 4px solid var(--tertiary-color);
	width: 50px;

	@media (max-width: 1280px) {
		margin: 0 20px;
	}
`;

export const Cards = styled.div`
	margin: 0 auto;
	width: 90%;
	overflow-y: hidden;
	display: flex;
	gap: 20px;

	padding-top: 40px;
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
