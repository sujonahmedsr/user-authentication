import { Outlet } from "react-router-dom";
import Header from "../Home/Header/Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;