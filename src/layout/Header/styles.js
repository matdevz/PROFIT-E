import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	max-width: 1280px;
	width: 100%;
	height: 80px;

	@media (max-width: 1280px) {
		padding: 0 20px;
	}
`;
export const Logo = styled.img``;
export const Nav = styled.nav`
	display: flex;
	align-items: center;
`;
