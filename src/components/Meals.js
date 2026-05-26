import MealItem from "./MealItem.js"
import { useEffect, useState } from "react"

const Meals = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch("http://localhost:3001/meals")
            const data = await response.json()
            console.log(meals)
            setMeals(data)
        }
        fetchMeals()
    }, [])
    return (
        <ul id="meals">
           {meals.map((item) => (
                <MealItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export default Meals