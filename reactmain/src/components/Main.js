import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import NavBar from './NavBar';
import Blog from './Blog';
import Home from './Home';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function Main() {
	return (
		<div className='main'>
			<ThemeProvider theme={darkTheme}>
				<NavBar />
				<div className='routes'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/blog' element={<Blog />} />
					</Routes>
				</div>
			</ThemeProvider>
		</div>
	);
}

export default Main;