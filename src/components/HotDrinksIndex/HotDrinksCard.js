import { useNavigate } from 'react-router-dom'

function HotDrinksCard({ drink }) {

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/hot-drinks/${drink.id}`)
    }

    return (
        <h2 onClick={handleClick}>{drink.name}</h2>
    )
}

export default HotDrinksCard