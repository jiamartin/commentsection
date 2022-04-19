
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const Header = ({ title }) => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Link to="/blogs" > Blogs </Link>
        </header>
    )
}

Header.defaultProps = {
    title: 'Blog',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header