import Slider from "../components/home/Slider";
import Testimonials from "../components/home/Testimonials";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="my-20">
            <h1 className="mb-16 text-4xl font-bold text-center text-pink-600">Testimonials</h1>
            <Testimonials></Testimonials>
            </div>
           
        </div>
    );
};

export default Home;