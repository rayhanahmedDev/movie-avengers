import { useEffect } from "react";
import { useState } from "react";
import Cart from "./Cart/Cart";


const Card = () => {

    const [cards, setCards] = useState([])

useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCards(data))
},[])

    return (
        <div>
            <h1 className="text-2xl font-medium">Hello</h1>
           <div className="flex flex-wrap gap-4">
           {
            cards.map((card, idx) => <Cart key={idx} card={card}></Cart>)
            }
           </div>
        </div>
    );
};

export default Card;