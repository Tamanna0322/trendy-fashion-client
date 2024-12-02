import Testimonial from "./Testimonial";


const Testimonials = () => {
    return (
        <div className="flex w-full gap-8 overflow-scroll overflow-y-hidden">
           <Testimonial className='w-1/2'></Testimonial>
           <Testimonial></Testimonial>
           <Testimonial></Testimonial>
           <Testimonial></Testimonial>
           <Testimonial></Testimonial>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Testimonials;