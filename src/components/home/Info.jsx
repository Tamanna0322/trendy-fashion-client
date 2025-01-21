
import cupon from '../../assets/images/cupon-devider.png';
import { useState } from 'react';



const Info = () => {

    const [showMore, setShowMore] = useState(false);

    const handleBtn = () => {
        setShowMore(true)
    }

    return (
        <div className="">
            <div className="flex flex-col lg:flex-row lg:w-[80%] mx-auto justify-between mt-8 gap-6">
                <div className="flex bg-[#ca63f6] lg:w-1/2 justify-between rounded-2xl">
                    <div className="w-[60%] space-y-2 flex flex-col lg:p-6 p-4 justify-center ">
                        <h2 className="lg:text-3xl md:text-2xl text-purple-950 font-bold">15% OFF</h2>
                        <p className="md:text-xl text-purple-900">on your next purchase</p>
                        <p>use by January 2025</p>
                    </div>
                    <div>
                        <img src={cupon}
                            alt="" />
                    </div>
                    <div className="w-[40%] space-y-2 flex flex-col p-4 justify-center">
                        <h2 className="md:text-3xl font-bold">NEW15</h2>
                        <p>Cupon Code</p>
                    </div>
                </div>
                <div className="flex bg-[#F78C9C] lg:w-1/2 justify-between rounded-2xl">
                    <div className="w-[60%] space-y-2 flex flex-col lg:p-6 p-4  justify-center ">
                        <h2 className="lg:text-3xl md:text-2xl font-bold">20% OFF</h2>
                        <p className="md:text-xl text-black">on your next purchase</p>
                        <p>use by January 2025</p>
                    </div>
                    <div>
                        <img src={cupon}
                            alt="" />
                    </div>
                    <div className="w-[40%] space-y-2 flex flex-col p-4 justify-center">
                        <h2 className="md:text-3xl font-bold">Couple 20</h2>
                        <p>Cupon Code</p>
                    </div>
                </div>
            </div>
            {showMore && (
                    <div className='flex justify-center lg:w-1/2  mx-auto mt-10'>
                        <div className="flex bg-[#54c0d3] w-full  rounded-2xl">
                            <div className="w-[60%] space-y-2 flex flex-col lg:p-6 p-4 justify-center ">
                                <h2 className="lg:text-3xl md:text-2xl text-blue-950 font-bold">50% OFF</h2>
                                <p className="md:text-xl text-blue-900">on your next purchase</p>
                                <p>use by January 2025</p>
                            </div>
                            <div>
                                <img src={cupon}
                                    alt="" />
                            </div>
                            <div className="w-[40%] space-y-2 flex flex-col p-4 justify-center">
                                <h2 className="md:text-3xl text-blue-950 font-bold">Bumper 50</h2>
                                <p>Cupon Code</p>
                            </div>
                        </div>

                    </div>
                )}

            <div className='flex justify-center'>
                {!showMore && (
                    <button className="btn border-[#72136d] text-[#410f36] px-7 mt-9 " onClick={handleBtn}>See All Offers</button>
                )}
            </div>

        </div>
    );
};

export default Info;