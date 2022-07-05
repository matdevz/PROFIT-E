import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	padding: 20px;
	color: white;
	background-color: var(--secondary-color);
`;
export const Content = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	max-width: 1280px;
	width: 100%;

	@media (max-width: 800px) {
		gap: 40px;
		align-items: center;
		flex-direction: column;
	}
`;
