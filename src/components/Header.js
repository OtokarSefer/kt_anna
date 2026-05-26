import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";

const Header = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce(
        (total, item) => {
            return total + item.quantity
        },
        0
    )
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="React Food Order App logo" />
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button textOnly={true} text={`Cart (${totalItems})`}/>
            </nav>
        </header>
    );
};

export default Header;