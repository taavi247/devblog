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
import { styled } from '@mui/material/styles';

const pages = [
	{ name: 'Blog', link: '/' },
	{ name: 'About', link: '/about' }
];

const StyledBox = styled(Box)({
	flexGrow: 1,
	display: 'flex',
	justifyContent: 'right',	
});

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
							</Menu>
						</Box>
						<h2> Dev Blog </h2>

						<StyledBox>
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
						</StyledBox>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
    );
}

export default NavBar;