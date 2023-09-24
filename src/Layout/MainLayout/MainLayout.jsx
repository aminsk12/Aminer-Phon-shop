import { Outlet } from "react-router-dom";
import Naveber from "../../Components/Header/Navebar/Naveber";


const MainLayout = () => {
    return (
        <div className=" container mx-auto ">
            <div className="py-6 shadow-md px-3"><Naveber></Naveber></div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;