import { useEffect } from "react";
import { useState } from "react";
import FeaturedProduct from "./FeaturedProduct";
import { Link } from "react-router-dom";


const FeaturedProducts = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('featured.json')
          .then(res => res.json())
          .then(data => setCards(data.slice(0,6)))
      }, [])

    return (
        <div>
             <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {
                    cards.map(card => <FeaturedProduct key={card.id} card={card}></FeaturedProduct>)
                }
            </div>
            <div className="flex justify-center ">
               <Link to='/'> <button className='btn border-none px-14 text-white bg-gradient-to-r from-[#fa52de] to-[#8d14ab]'>See All</button></Link>
            </div>
        </div>
    );
};

export default FeaturedProducts;