import "../styles/Header.css";

function Header() {
    return (
        <>
            <div className="navbar">
                <nav>
                    <a href="#home" className="logo">Portfolio</a>
                    {/* <li className="nav-link menu">
                        <span class="material-symbols-outlined">
                            menu
                        </span>
                        <div className="link-title">
                            About
                        </div></li> */}
                    <ul className="nav-links">
                        <a className="nav-link" href="#about">
                            <li>
                                <span class="material-symbols-outlined">
                                    person
                                </span>
                                <div className="link-title">
                                    About
                                </div></li>
                        </a>
                        <a className="nav-link" href="#my-skill">
                            <li>
                                <span class="material-symbols-outlined">
                                    checklist
                                </span>
                                <div className="link-title">
                                    Skills
                                </div></li>
                        </a>
                        <a className="nav-link" href="#projects">
                            <li>
                                <span class="material-symbols-outlined">
                                    computer
                                </span>
                                <div className="link-title">
                                    Projects
                                </div></li>
                        </a>
                        <a className="nav-link" href="#certifications">
                            <li>
                                <span class="material-symbols-outlined">
                                    workspace_premium
                                </span>
                                <div className="link-title">
                                    Certification
                                </div></li>
                        </a>
                        <a className="nav-link" href="#contact">
                            <li>
                                <span class="material-symbols-outlined">
                                    call
                                </span>
                                <div className="link-title">
                                    Contact
                                </div></li>
                        </a>
                        {/* <li className="nav-link">
                            <span class="material-symbols-outlined">
                                school
                            </span>
                            <div className="link-title">
                                Education
                            </div></li> */}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header;