import Button from "./UI/Button"
import { useContext } from "react"
import { CartContext } from "../store/CartContext"

const MealItem = (props) => {
    const { addItem } = useContext(CartContext)
    return (
        <li className="meal-item">
            <article>
            <img src={require(`../assets/${props.item.image}`)} alt={props.item.name}/>
                <div>
                    <h3>{props.item.name}</h3>
                    <p className="meal-item-price">{new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(props.item.price,)}</p>
                    <p className="meal-item-description">{props.item.description}</p>
                </div>
                <p>
                    <Button textOnly={false} text={"Add to Cart"} onClick={() => addItem(props.item)}/>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem