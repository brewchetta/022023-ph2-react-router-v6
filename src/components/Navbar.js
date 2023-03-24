import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {

    // we can activate the useNavigate hook and save it to a variable called 'navigate'
    const navigate = useNavigate()
    // 'navigate' is a function we can call to go to other routes 

    function handleHover() {
        navigate( '/about' )
    }

    return (
        <nav>
            <NavLink to='about'>About</NavLink>

            <NavLink to='hot-drinks'>Hot Drinks</NavLink>

            <NavLink to='raccoons-have-taken-over-your-computer-with-nunchuks'>404</NavLink>

            <button onMouseOver={handleHover}>Go Somewhere Cool</button>
            
        </nav>
    )
}

export default Navbar