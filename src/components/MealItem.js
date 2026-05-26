import Button from "./UI/Button"

const MealItem = (props) => {

    return (
        <li class="meal-item">
            <article>
            <img src={require(`../assets/${props.item.image}`)} alt={props.item.name}/>
                <div>
                    <h3>{props.item.name}</h3>
                    <p class="meal-item-price">{new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(props.item.price,)}</p>
                    <p class="meal-item-description">{props.item.description}</p>
                </div>
                <p>
                    <Button textOnly={false} text={"Add to Cart"}/>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem