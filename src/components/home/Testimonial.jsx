

const Testimonial = () => {
    return (
        <div className="card bg-pink-100 border border-purple-700 border-dotted">
            <div className="card-body">
                <h2 className="card-title">Rate!!!</h2>
                <p className="">Real customers, real love! Hear what our shoppers say about their trendy fashion finds and experiences.</p>
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
        </div>
    );
};

export default Testimonial;