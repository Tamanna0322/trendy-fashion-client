import shirts from '../../assets/images/shirts.jpg';
import street from '../../assets/images/street.jpg';
import shoes from '../../assets/images/shoes.jpg';

const Men = () => {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 lg:space-x-7 md:space-x-3 w-full">
        <div className="card card-compact bg-blue-100  shadow-xl h-full">
            <figure>
                <img className='w-full h-[270px] object-cover'
                    src={shirts}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shirts & Tops</h2>
                <p>Sharp Looks for Every Occasion</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="card card-compact bg-blue-100  shadow-xl h-full">
            <figure>
                <img className='w-full h-[270px] object-cover'
                    src={street}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Streetwear</h2>
                <p>Where Comfort Meets Cool</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="card card-compact bg-blue-100  shadow-xl h-full">
            <figure>
                <img className='w-full h-[270px] object-cover'
                    src={shoes}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Footwear</h2>
                <p>Step Up Your Style Game</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Men;