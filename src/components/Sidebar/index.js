import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import { IconContext } from 'react-icons/lib';

import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//Actions
import { signout } from '../../store/actions/authActions';
import { fetchCategory } from '../../store/actions/categoryActions';
import { fetchBook } from '../../store/actions/bookActions';
//Styles
import {
	Nav,
	UsernameStyled,
	NavIcon,
	SidebarNav,
	SidebarWrap,
	SidebarLink,
	SidebarLabel,
} from './styles';

const Sidebar = () => {
	const user = useSelector((state) => state.authReducer.user);

	const [sidebar, setSidebar] = useState(false);
	const [subnav, setSubnav] = useState(false);

	const history = useHistory();
	const dispatch = useDispatch();

	const showSubnav = () => setSubnav(!subnav);

	const showSidebar = () => setSidebar(!sidebar);
	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav>
					<NavIcon to="#">
						<FaIcons.FaBars onClick={showSidebar} />
					</NavIcon>
				</Nav>
				<SidebarNav sidebar={sidebar}>
					<SidebarWrap>
						<NavIcon to="#">
							<AiIcons.AiOutlineClose onClick={showSidebar} />
						</NavIcon>
						<SidebarLink to="/">
							<div>
								<AiIcons.AiFillHome /> <SidebarLabel>Home</SidebarLabel>
							</div>
						</SidebarLink>
						{/* User  */}
						{user ? (
							<>
								<UsernameStyled>Welcome , {user.username}! </UsernameStyled>

								<SidebarLink
									onClick={() => dispatch(signout(history)) && showSubnav}
								>
									<div>
										<FaIcons.FaSignOutAlt />
										<SidebarLabel>Signout</SidebarLabel>
									</div>
								</SidebarLink>
							</>
						) : (
							<>
								<SidebarLink to="/signup">
									<div>
										<AiIcons.AiOutlineUserAdd />
										<SidebarLabel>Signup</SidebarLabel>
									</div>
								</SidebarLink>

								<SidebarLink to="/signin">
									<div>
										<FaIcons.FaSignInAlt /> <SidebarLabel>Signin</SidebarLabel>
									</div>
								</SidebarLink>
							</>
						)}
						{user && (
							<SidebarLink to="profile" onClick={() => showSubnav}>
								<div>
									<CgIcons.CgProfile /> <SidebarLabel>Profile</SidebarLabel>
								</div>
							</SidebarLink>
						)}

						<SidebarLink
							to="categories"
							onClick={() => dispatch(fetchCategory) && showSubnav}
						>
							<div>
								<FaIcons.FaListAlt /> <SidebarLabel>Categories</SidebarLabel>
							</div>
						</SidebarLink>

						<SidebarLink
							to="books"
							onClick={() => dispatch(fetchBook) && showSubnav}
						>
							<div>
								<FaIcons.FaBookOpen /> <SidebarLabel>All Books</SidebarLabel>
							</div>
						</SidebarLink>
					</SidebarWrap>
				</SidebarNav>
			</IconContext.Provider>
		</>
	);
};

export default Sidebar;
