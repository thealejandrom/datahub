import '../styles/search_bar.styles.css'

import React from 'react'

class SearchBar extends React.Component {
    render() {
        return (
            <div className='search_wrapper'>
                <form>
                    <input type='search'></input>
                </form>
            </div>
        );
    }
}

export default SearchBar