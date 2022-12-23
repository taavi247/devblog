import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from './components/NavBar';
import About from './pages/About';
import Blog from './pages/Blog';
import ShowPost from './pages/ShowPost';
import ManageBlog from './pages/ManageBlog';
import SignOut from './pages/SignOut';

const blogTheme = createTheme({
	palette: {
		primary: {
			light: '#FFFFFF',
			main: '#FFFFFF',
			dark: '#FFFFFF',
			contrastText: '#000000',
		},
	},
});

export default function Main() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return (
		<div className='main'>
			<ThemeProvider theme={blogTheme}>
				<NavBar
					isAuthenticated={isAuthenticated}
					setIsAuthenticated={setIsAuthenticated}
				/>
				<div className='routes'>
			    <Routes>
						<Route path='/' element={<Blog />} />
						<Route path='/showpost' element={<ShowPost />} />
						<Route path='/about' element={<About />} />
						<Route
							path='/manageblog'
							element={
								<ManageBlog
									isAuthenticated={isAuthenticated}
									setIsAuthenticated={setIsAuthenticated}
								/>
							}
						/>
						<Route path='/signout' element={<SignOut />} />
					</Routes>
				</div>
			</ThemeProvider>
		</div>
	);
}