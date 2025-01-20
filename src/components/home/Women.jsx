import dress from '../../assets/images/dress.jpg';
import casual from '../../assets/images/casual.jpg';
import accessories from '../../assets/images/accessories.jpg';

const Women = () => {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 lg:space-x-7 md:space-x-3 w-full">
            <div className="card card-compact bg-pink-100 shadow-xl h-full ">
                <figure className=''>
                    <img className='w-full h-[270px] object-cover'
                        src={dress}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Dresses</h2>
                    <p>Twirl into Elegance</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-pink-100 shadow-xl h-full">
                <figure>
                    <img className='w-full h-[270px] object-cover'
                        src={casual}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Casual Wear</h2>
                    <p>Your Everyday Chic Awaits</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact bg-pink-100 shadow-xl h-full">
                <figure>
                    <img className='w-full h-[270px] object-cover'
                        src={accessories}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Accessories</h2>
                    <p>Finish Your Look with Flair</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Women;