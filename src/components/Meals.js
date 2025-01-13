import { useState, useEffect } from "react";

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/meals')
        .then(res =>  res.json())
        .then(data => setMeals(data))
    }, [])

    console.log(meals)

    return (
        <ul id="meals">
            { 
                // list of meals

            }
        </ul>
    )
}

export default Meals