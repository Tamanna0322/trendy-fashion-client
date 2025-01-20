import Categories from "../components/home/Categories";
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
            <div className="my-20">
            <h1 className="lg:mb-16 mb-10 text-4xl font-bold text-center text-pink-600">Categories</h1>
            <Categories></Categories>
            </div>
           
        </div>
    );
};

export default Home;