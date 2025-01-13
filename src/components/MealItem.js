const MealItem = (props) => {
    return (
        <li>
            <article>
            <img src={require(`../assets/${props.item.image}`)} alt={props.item.name}/>
                <div>
                    <h3>{props.item.name}</h3>
                    <p>{props.item.price}</p>
                    <p>{props.item.description}</p>
                </div>
                <p>
                    <button >Add to Cart</button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem