import logo from "../assets/kevinRushLogo.png";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex items-center text-3xl">
                <h1 className="mx-2 w-10">dominiksoft.dev</h1>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-3xl">
                <FaGithub />
            </div>
        </nav>
    );
};

export default NavBar;