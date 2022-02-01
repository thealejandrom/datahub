import {Router, NavLink}
 from 'react-dom';

import '../styles/main_header.styles.css'

/* Import Images */
import Logo from '../assets/images/datahub-logo-white.svg'

import React from 'react'

/* Import Components */
import SearchBar from './search_bar.component';

class MainHeader extends React.Component {
    render() {
        return (
            <div className='header_wrapper'>
                <div className='header_left'>
                    <div className='logo_wrapper'>
                        <img id='main_logo' src={`${Logo}`} alt='logo'/>
                    </div>
                    <SearchBar/>
                </div>
                <div className='header_right'>
                    <ul className='link_wrapper'>
                        <li>Dashboard</li>
                        <li>Explore</li>
                        <li>Create</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainHeader