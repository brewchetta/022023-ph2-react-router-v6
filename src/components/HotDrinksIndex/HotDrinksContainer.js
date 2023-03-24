import React, { useEffect, useState } from 'react'
import HotDrinksCard from './HotDrinksCard'

function HotDrinksContainer() {

    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/drinks')
        .then(res => res.json())
        .then(data => setDrinks(data))
    }, [])

    const mappedDrinks = drinks.map(drink => <HotDrinksCard key={drink.id} drink={drink} />)

    return (

        <div>
            <h1>Fancy Hot Drinks Only Plz</h1>
            {mappedDrinks}
        </div>
    )

}

export default HotDrinksContainer