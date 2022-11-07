import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='nav-bar'>
			<nav
				style={{
					borderBottom: 'solid 1px',
					paddingBottom: '1rem',
				}}
			>
				<Link to="/">Home</Link>{" "}
				<Link to="/blog">Blog</Link>
			</nav>
		</div>
    );
}

export default NavBar;