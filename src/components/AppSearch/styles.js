import styled from 'styled-components';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';

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
