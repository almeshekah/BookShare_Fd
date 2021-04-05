import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
	text-align: center;
	color: #f4f4f4;
	font-family: "Roboto", sans-serif;
	font-size: 30px;
	font-weight: bold;
	letter-spacing: -1px;
	line-height: 1;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const UsernameStyled = styled.p`
	margin: 0 0.25rem;
	padding: 0.45rem;
	margin-right: 24px;
	display: flex;
	align-items: center;
	color: #82ddf0;
`;

export const SidebarLink = styled(Link)`
	display: flex;
	color: #e1e9fc;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	list-style: none;
	height: 60px;
	text-decoration: none;
	font-size: 18px;
	&:hover {
		background: #1a2f4e;
		border-left: 4px solid #82ddf0;
		cursor: pointer;
		text-decoration: none;
		color: #82ddf0;
	}
`;

export const SidebarLabel = styled.span`
	margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
	background: #1d3557;
	height: 60px;
	padding-left: 3rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #f5f5f5;
	font-size: 18px;
	&:hover {
		background: #82ddf0;
		cursor: pointer;
	}
`;

export const Nav = styled.div`
	background: #1d3557;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const NavIcon = styled(Link)`
	margin-left: 2rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const SidebarNav = styled.nav`
	background: #1d3557;
	width: 250px;
	height: 100vh;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	transition: 350ms;
	z-index: 10;
`;

export const SidebarWrap = styled.div`
	width: 100%;
`;
