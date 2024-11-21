import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import banner1 from '../../assets/images/fashion1.jpg';
import banner2 from '../../assets/images/fashion3.jpg';
import banner3 from '../../assets/images/fashion2.jpg';

const Slider = () => {
    return (
        <div className="my-10">
        <Swiper 
          modules={[Autoplay, Pagination,Navigation]}
          pagination={{
            clickable: true,
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
          className="mySwiper"
          onAutoplay={true}
          loop={true}
        >
         <SwiperSlide className=' text-center mb-6'>
                    <div className='object-cover bg-right bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${banner1})` }}>
                        <div className='flex flex-col justify-center h-full md:w-1/2'>
                            <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl'> WINTER <span className="text-[#940694]">FASHION SALE</span></h3>
                            <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>Embrace the chill with style! Winter fashion sale – up to 50% off on trendy coats, sweaters, and accessories!</p>
                           <div className="mt-7">
                           <Link to='/'><button className="btn text-white px-8 font-bold border-none bg-gradient-to-r from-[#b11074] to-[#f53d96]">SHOP NOW</button></Link>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'>
                    <div className='object-cover bg-right bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${banner2})` }}>
                        <div className='flex flex-col justify-center h-full md:w-1/2'>
                            <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl'>New Arriaivals <span className="text-[#8229ba]">FASHION SALE</span></h3>
                            <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-white md:mt-9 mt-5'>Fresh styles, fresh vibes! Explore our New Arrivals trendy fashion picks with exclusive discounts. Shop now to stay ahead!</p>
                            <div className="mt-7">
                           <Link to='/'><button className="btn text-white px-8 font-bold border-none bg-gradient-to-r from-[#791eb2] to-[#b04cfd]">SHOP NOW</button></Link>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' text-center mb-6'>
                    <div className='object-cover bg-no-repeat lg:w-full lg:h-[580px] h-[400px] rounded-3xl bg-cover' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${banner3})` }}>
                        <div className='flex border flex-col justify-center h-full w-full items-end'>
                            <div className="flex flex-col lg:items-center md:items-end items-center md:pr-8">
                            <h3 className='lg:text-5xl text-white font-bold md:text-3xl text-2xl'>The Great <span className="text-[#cf17cf]">FASHION COLLECTION</span></h3>
                            <p className='lg:w-[50%] md:w-[50%] w-[90%]  text-white md:mt-9 mt-5 '>Discover the ultimate style hub! Explore our Great Fashion Collection timeless trends, bold looks, and exclusive designs.</p>
                            <div className="mt-7">
                           <Link to='/'><button className="btn text-white px-8 font-bold border-none bg-gradient-to-r from-[#791eb2] to-[#b04cfd]">SHOP NOW</button></Link>
                           </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
        </Swiper>
      
    </div>
    );
};

export default Slider;