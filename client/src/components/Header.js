
import PropTypes from 'prop-types'


const Header = ({ title }) => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Post Comment',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header