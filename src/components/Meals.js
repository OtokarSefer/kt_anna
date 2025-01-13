import MealItem from "./MealItem.js";

const Meals = async () => {
    const meals = fetch('http://localhost:3001/meals')
    meals = meals.json()
    console.log(meals)
    return (
        <ul id="meals">
            {meals.map((item) => {
                return <MealItem {...item }/>;
            })}
        </ul>
    )
}

export default Meals