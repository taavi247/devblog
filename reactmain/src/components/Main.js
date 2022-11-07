import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';
import NavBar from './NavBar';
import Blog from '../pages/Blog';
import Home from '../pages/Home';

function Main() {
	return (
		<BrowserRouter>
			<NavBar/>
			<div className='main'>
				<div className='routes'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/blog' element={<Blog />} />
						</Routes>	
					
				</div>
			</div>
		</BrowserRouter>
	);
}

export default Main;