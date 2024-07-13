import "../styles/Header.css";
import NavLink from "./NavLink";
import hamB from "../images/ham-b.png";

function Header() {
    return (
        <>
            <div className="navbar">
                <nav>
                    <a href="#home" className="logo">Portfolio</a>
                    <ul className="nav-links">
                        <div className="ham-logo" >
                            <img src={hamB} alt="" />
                        </div>
                        <div className="lis">
                            <NavLink text="About" icon="person" href="about" />
                            <NavLink text="Skills" icon="checklist" href="my-skill" />
                            <NavLink text="Experience" icon="badge" href="experiences" />
                            <NavLink text="Projects" icon="computer" href="projects" />
                            <NavLink text="Certifications" icon="workspace_premium" href="certifications" />
                            <NavLink text="Contact" icon="call" href="contact" />

                        </div>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header;