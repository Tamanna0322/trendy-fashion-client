import { useState } from "react";
import { Link } from "react-router-dom";
import Women from "./Women";
import Men from "./Men";
import Seasonal from "./Seasonal";


const Categories = () => {

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="">
            <div className="flex items-center justify-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:text-gray-800 lg:mb-20 mb-14">

                <Link
                    to=""
                    onClick={() => setTabIndex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${tabIndex === 0 ? "dark:border-violet-600 dark:text-gray-900" : "dark:border-gray-300 dark:text-gray-600"}`}>Women</Link>
                <Link
                    to=""
                    onClick={() => setTabIndex(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${tabIndex === 1 ? "dark:border-violet-600 dark:text-gray-900" : "dark:border-gray-300 dark:text-gray-600"}`}>Men</Link>
                <Link
                    to=""
                    onClick={() => setTabIndex(2)}
                    className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${tabIndex === 2 ? "dark:border-violet-600 dark:text-gray-900" : "dark:border-gray-300 dark:text-gray-600"}`}>Seasonal</Link>
            </div>


            {tabIndex == 0 && <Women></Women>}
            {tabIndex == 1 && <Men></Men>}
            {tabIndex == 2 && <Seasonal></Seasonal>}


        </div>
    );
};

export default Categories;