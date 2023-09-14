import './Cart.css'
import PropTypes from 'prop-types';
const Cart = ({card}) => {
    const {name,image,salary} = card;
    return (
        <div>
            <div className="cart">
            <img className="rounded-full px-12 py-12" src={image} alt="" />
            <h2 className="">{name}</h2>
            <p>Salary : ${salary}</p>
            <button className="btn">Cart</button>
           
            </div>
        </div>
    );
};

Cart.propTypes = {
    Cart : PropTypes.object.isRequired
}
export default Cart;