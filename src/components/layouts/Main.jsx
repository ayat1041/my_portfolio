import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Social from "../shared/Social/Social";

const Main = () => {
    return (
        <>
        <NavBar></NavBar>
        <Social></Social>
            <Outlet></Outlet>
        </>
    );
};

export default Main;