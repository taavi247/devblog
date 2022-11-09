import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
import AdbIcon from '@mui/icons-material/Adb';

const pages = [
	{ name: 'Home', link: '/' },
	{ name: 'Blog', link: '/blog' }
];

function NavBar() {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<div className='nav-bar'>
			<AppBar position='static'>
				<Container maxWidth='x1'>
					<Toolbar disableGutters>
						<AdbIcon />
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
							</Menu>
						</Box>

						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pages.map((page) => (
								<Button
									component={Link}
									to={page.link}
									key={page.name}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white', display: 'block' }}
								>
									<Typography textAlign="center">
										{page.name}
									</Typography>
								</Button>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
}

export default NavBar;