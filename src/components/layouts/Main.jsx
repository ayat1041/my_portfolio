import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Social from "../shared/Social/Social";
import SideMenu from "../shared/SideMenu/SideMenu";

const Main = () => {
    return (
        <div className="relative max-w-[1900px]">
        <NavBar></NavBar>
        <Social></Social>
        <SideMenu></SideMenu>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;