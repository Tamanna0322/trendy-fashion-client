import { useEffect, useState } from "react";
import AllProduct from "../components/AllProduct";


const AllProducts = () => {
    const [cards, setCards] = useState([]);
   
       useEffect(() => {
           fetch('featured.json')
             .then(res => res.json())
             .then(data => setCards(data))
         }, [])
   
       return (
           <div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                   {
                       cards.map(card => <AllProduct key={card.id} card={card}></AllProduct>)
                   }
               </div>
              
           </div>
       );
};

export default AllProducts;