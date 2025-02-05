import PropTypes from "prop-types";
import { useState } from "react";


const FeaturedProduct = ({ card }) => {

    const { name, category, price, discount, description, image, inStock } = card

    const [showOverlay, setShowOverlay] = useState(false);


    const handleMouseEnter = () => {
        setShowOverlay(true);
    };

    const handleMouseLeave = () => {
        setShowOverlay(false);
    };


    return (
        <div className='border-2 border-pink-200 p-5 rounded-xl space-y-4 bg-pink-50'>
            <div className='relative overflow-hidden'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <img className='rounded-2xl w-full h-[250px] object-cover' src={image} alt="" />
                {
                    showOverlay && (
                        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl text-white'>
                            <div className='text-center'>
                            <h2 className='text-xl font-bold'>{inStock}</h2>
                            </div>

                        </div>
                    )
                }
            </div>

            <h3 className='text-xl font-bold'>{name}</h3>
            <p>{description}</p>
            <hr />
            <h3>Category: {category}</h3>
            <hr />
            <div className='flex space-x-8 justify-between'>
                <h3 className='flex items-center space-x-2'>
                    Price: $<span>{price}</span>
                </h3>
                <h3 className='flex items-center space-x-2'>
                    Discount: <span> {discount}</span>%
                </h3>
            </div>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-pink-500" />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-pink-500"
                    defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-pink-500" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-pink-500" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-pink-500" />
            </div>

        </div>
    );
};

FeaturedProduct.propTypes = {
    card: PropTypes.object.isRequired,

}

export default FeaturedProduct;