import winter from '../../assets/images/winter.jpg';
import party from '../../assets/images/party.jpg';
import trendy from '../../assets/images/trendy.jpg';

const Seasonal = () => {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 lg:space-x-7 md:space-x-3 w-full">
        <div className="card card-compact bg-purple-200 shadow-xl h-full">
            <figure>
                <img className='w-full h-[270px] object-contain bg-gray-400'
                    src={winter}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Winter Collection</h2>
                <p>Cozy Up in Style</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="card card-compact bg-purple-200 shadow-xl h-full">
            <figure>
                <img className='w-full h-[270px] object-contain bg-gray-400'
                    src={party}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Party Outfits</h2>
                <p>Shine Bright, Party Right</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="card card-compact bg-purple-200 shadow-xl h-full">
            <figure>
                <img className='w-full h-[270px] object-cover'
                    src={trendy}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Trendy Picks</h2>
                <p>Hot Looks, Fresh Off the Runway</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Seasonal;