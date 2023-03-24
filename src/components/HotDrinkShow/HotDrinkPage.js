import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function HotDrinkPage() {

    const [drink, setDrink] = useState({})

    // params is what's in the URL (hot-drinks/:id)
    const params = useParams()

    // we can use the params that got passed through to fetch the proper drink
    useEffect(() => {
        fetch(`http://localhost:3001/drinks/${params.id}`)
        .then(res => res.json())
        .then(data => setDrink(data))
    },[])
    
    return (
        <div>

            <p>My ID is {drink.id}</p>

            <p>My name is {drink.name}</p>

        </div>
    )    
}

export default HotDrinkPage