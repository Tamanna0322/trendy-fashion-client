import PropTypes from "prop-types";


const FeaturedProduct = ({card}) => {
    
    const {name, category, price, discount, description, image} = card

    return (
        <div className='border-2 border-pink-200 p-5 rounded-xl space-y-4 bg-pink-50'>
        <img className='w-[350px] h-[200px] rounded-2xl object-cover' src={image} alt="" />
        <h3 className='text-xl font-bold'>{name}</h3>
        <p>{description}</p>
        <hr />
         <h3>Category: {category}</h3>
        <hr />
        <div className='flex space-x-8'>
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