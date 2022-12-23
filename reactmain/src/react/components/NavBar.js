import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Toolbar,
	Typography,
	Menu,
	MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const pages = [
	{ name: 'Blog', link: '/' },
	{ name: 'About', link: '/about' },
	{ name: 'Manage', link: '/manageblog' }
];

const StyledBox = styled(Box)({
	flexGrow: 1,
	display: 'flex',
	justifyContent: 'right',
});

export default function NavBar({ isAuthenticated, setIsAuthenticated }) {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const navigate = useNavigate();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	function handleSignOut() {
		handleCloseNavMenu();

		if (isAuthenticated) {
			sessionStorage.removeItem('token');
			setIsAuthenticated(false);
			navigate('/signout');
		}
	}

	return (
		<div className='nav-bar'>
			<AppBar position='static'>
				<Container maxWidth='md'>
					<Toolbar disableGutters>
						<Box>
							<IconButton onClick={handleOpenNavMenu}>
								<MenuIcon />
							</IconButton>
							<Menu
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
							>
								{pages.map((page) => (
									<MenuItem
										component={Link}
										to={page.link}
										key={page.name}
										onClick={handleCloseNavMenu}
									>
										<Typography textAlign="center">
											{page.name}
										</Typography>
									</MenuItem>
								))}
								<MenuItem onClick={handleSignOut}>
									<Typography textAlign="center">
										{'Sign out'}
									</Typography>
								</MenuItem>
							</Menu>
						</Box>
						<h2> Dev Blog </h2>

						<StyledBox sx={{ display: { xs: 'none', sm: 'flex' } }}>
							{pages.map((page) => (
								<Button
									component={Link}
									to={page.link}
									key={page.name}
									onClick={handleCloseNavMenu}
									sx={{ my: 1, color: 'black', display: 'inline' }}
								>
									<Typography textAlign="center">
										{page.name}
									</Typography>
								</Button>	
							))}
							<IconButton onClick={handleSignOut}>
								<LogoutIcon />
							</IconButton>
						</StyledBox>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
}