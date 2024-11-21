import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="min-h-screen max-w-7xl mx-auto mt-10 px-4 ">
           <Outlet></Outlet>
           </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;