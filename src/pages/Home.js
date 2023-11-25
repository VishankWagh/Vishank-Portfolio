import "../styles/Home.css";
import men from "../images/pflio_img_edt.png";
import reactLogo from "../images/react-logo.png";
// import certiImg from "../images/certificate.png";
import react from "../images/reactjs.jpg";
import expressjs from "../images/expressjs.jpg";
import mongo from "../images/mongodb.jpg";
import nodejs from "../images/nodejs.jpg";
import htmlLogo from "../images/html.jpg";
import css from "../images/css.jpg";
import js from "../images/js.jpg";
import cProg from "../images/c.jpg";
import python from "../images/python.jpg";
import qbProj from "../images/proj_quikbuy.png";
import drnProj from "../images/proj_drone.png";
import pmdrProj from "../images/proj_pomodor.png";
import tchProj from "../images/proj_technology.png";
import tdoProj from "../images/proj_todo.png";
import orddkProj from "../images/proj_orderdesk.png";
import crticp from "../images/certi_cp.jpg";
import crtilstn from "../images/certi_lstn.jpg";
import crtiudmy from "../images/certi_udmy.jpg";
import crtiwdev from "../images/certi_wdev.jpg";
import myresume from "../images/my-resume.png";

function Home() {
    return (
        <>
            <div className="home" id="home">
                <a className="top-icon" href="#home">
                    <span class="material-symbols-outlined">
                        expand_less
                    </span>
                </a>
                <section className="intro">
                    <div className="left-sec">
                        <h1>
                            <div className="greet">Hii There!! , Myself</div>
                            <div className="name">Vishank Wagh</div>
                        </h1>
                        <div className="title"><span className="mern">MERN</span> STACK DEVELOPER</div>
                        <div className="intro-skills">
                            <span className="intro-skl">Mongo DB</span>
                            <span className="intro-skl">Express Js</span>
                            <span className="intro-skl">React Js</span>
                            <span className="intro-skl">Node Js</span>
                        </div>
                    </div>
                    <div className="right-sec">
                        <div className="dev-logo"><img src="https://icons8.com/icon/11260/source-code" alt="" /></div>
                        <img className="my-img" src={men} alt="" />
                        <span className="dev-logo">{"</>"}</span>
                        <span className="dev-logo">{"</>"}</span>
                    </div>
                </section>
                <section className="about" id="about">
                    <div className="sec-title">About</div>
                    <div className="abt-content">
                        <b>👋 Hi there!</b> myself Vishank Shailesh Wagh, an aspiring web developer pursuing an Integrated Master's in Computer Applications at Parul University. 🌐
                        <br />
                        <br />
                        💻 Skilled in ReactJS, NodeJS, ExpressJS, and MongoDB, I've already crafted a dynamic e-commerce project for local retail shops during my academic journey. 🛍
                    </div>
                    <div className="abt-btns">
                        <a href="#contact" className="hireme-btn">Hire Me</a>
                        <a href="#about" className="resume-btn" onClick={() => {
                            const vr = document.getElementById("view-resume").style;
                            vr.visibility = "visible";
                            vr.opacity = "1";
                        }}>My Resume</a>
                    </div>
                    <div className="view-resume" id="view-resume" style={{ visibility: "hidden", opacity: "0" }}>
                        <div className="cross" onClick={() => {
                            const vr = document.getElementById("view-resume").style;
                            vr.opacity = "0";
                            vr.visibility = "hidden";
                        }}>&times;</div>
                        <div className="resume-img">
                            <img src={myresume} alt="View my Resume" />
                            <div className="dwnld-btn">
                                <a href={myresume} download="Vishank-Wagh_Resume">Download Resume</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="my-skill" id="my-skill">
                    <div className="sec-title">My Skills</div>
                    <div className="skill-list">
                        <div className="skills">
                            <div className="skl-title">Frontend</div>
                            <div className="skill">

                                <div className="skl-content">
                                    <div className="skl-logo">
                                        <img src={react} alt="" />
                                    </div>
                                    <div className="skl">
                                        <div className="skl-name">React JS</div>
                                        <div className="skl-bar"><div className="skl-prcnt" style={{ width: "70%" }}><div className="prcnt">70%</div></div></div>
                                    </div>
                                </div>
                                <div className="skl-content">
                                    <div className="skl-logo">
                                        <img src={htmlLogo} alt="" />
                                    </div>
                                    <div className="skl">
                                        <div className="skl-name">HTML 5</div>
                                        <div className="skl-bar"><div className="skl-prcnt" style={{ width: "80%" }}><div className="prcnt">80%</div></div></div>
                                    </div>
                                </div>
                                <div className="skl-content">
                                    <div className="skl-logo">
                                        <img src={css} alt="" />
                                    </div>
                                    <div className="skl">
                                        <div className="skl-name">CSS 3</div>
                                        <div className="skl-bar"><div className="skl-prcnt" style={{ width: "80%" }}><div className="prcnt">80%</div></div></div>
                                    </div>
                                </div>
                                <div className="skl-content">
                                    <div className="skl-logo">
                                        <img src={js} alt="" />
                                    </div>
                                    <div className="skl">
                                        <div className="skl-name">Javascript</div>
                                        <div className="skl-bar"><div className="skl-prcnt" style={{ width: "75%" }}><div className="prcnt">75%</div></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="skl-title">Backend</div>
                            <div className="skill">

                                <div className="skl-content">
                                    <div className="skl-logo">
                                        <img src={nodejs} alt="" />
                                    </div>
                                    <div className="skl">
                                        <div className="skl-name">Node JS</div>
                                        <div className="skl-bar"><div className="skl-prcnt" style={{ width: "70%" }}><div className="prcnt">70%</div></div></div>
                                    </div>
                                </div>
                                <div className="skl-content">
                                    <div className="skl-logo">
                                        <img src={expressjs} alt="" />
                                    </div>
                                    <div className="skl">
                                        <div className="skl-name">Express JS</div>
                                        <div className="skl-bar"><div className="skl-prcnt" style={{ width: "70%" }}><div className="prcnt">70%</div></div></div>
                                    </div>
                                </div>
                                <div className="skl-content">
                                    <div className="skl-logo">
                                        <img src={mongo} alt="" />
                                    </div>
                                    <div className="skl">
                                        <div className="skl-name">Mongo DB</div>
                                        <div className="skl-bar"><div className="skl-prcnt" style={{ width: "75%" }}><div className="prcnt">75%</div></div></div>
                                    </div>
                                </div>
                                <div className="skl-content">
                                    <div className="skl-logo">
                                        <img src={js} alt="" />
                                    </div>
                                    <div className="skl">
                                        <div className="skl-name">Javascript</div>
                                        <div className="skl-bar"><div className="skl-prcnt" style={{ width: "75%" }}><div className="prcnt">75%</div></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills others">
                            <div className="skl-title">Other</div>
                            <div className="skill">
                                <div className="skl-content">
                                    <div className="skl-logo">
                                        <img src={cProg} alt="" />
                                    </div>
                                    <div className="skl">
                                        <div className="skl-name">C Programming</div>
                                        <div className="skl-bar"><div className="skl-prcnt" style={{ width: "80%" }}><div className="prcnt">80%</div></div></div>
                                    </div>
                                </div>
                                <div className="skl-content">
                                    <div className="skl-logo">
                                        <img src={python} alt="" />
                                    </div>
                                    <div className="skl">
                                        <div className="skl-name">Python</div>
                                        <div className="skl-bar"><div className="skl-prcnt" style={{ width: "65%" }}><div className="prcnt">65%</div></div></div>
                                    </div>
                                </div>
                                <div className="skl-content">
                                    <div className="skl-logo">
                                        <img src={reactLogo} alt="" />
                                    </div>
                                    <div className="skl">
                                        <div className="skl-name">Creativity</div>
                                        <div className="skl-bar"><div className="skl-prcnt" style={{ width: "80%" }}><div className="prcnt">80%</div></div></div>
                                    </div>
                                </div>
                                <div className="skl-content">
                                    <div className="skl-logo">
                                        <img src={reactLogo} alt="" />
                                    </div>
                                    <div className="skl">
                                        <div className="skl-name">Problem Solving</div>
                                        <div className="skl-bar"><div className="skl-prcnt" style={{ width: "85%" }}><div className="prcnt">85%</div></div></div>
                                    </div>
                                </div>
                                <div className="skl-content">
                                    <div className="skl-logo">
                                        <img src={reactLogo} alt="" />
                                    </div>
                                    <div className="skl">
                                        <div className="skl-name">Punctuality</div>
                                        <div className="skl-bar"><div className="skl-prcnt" style={{ width: "90%" }}><div className="prcnt">90%</div></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="projects" id="projects">
                    <div className="sec-title">Projects</div>
                    <div className="proj-list">
                        <div className="project">
                            <div className="proj-img">
                                <img src={qbProj} alt="" />
                            </div>
                            <div className="proj-content">
                                <div className="proj-title">Quik Buy</div>
                                <div className="proj-desc">
                                    <p>
                                        Streamline your local shopping experience with Quik Buy—an MERN stack online store connecting you to nearby retail shops for effortless product ordering and doorstep delivery.
                                    </p>

                                </div>
                                <button className="github-btn btn">
                                    <a href="https://github.com/VishankWagh/Online-Local-Store.git" target="_blank" rel="noreferrer">
                                        Github link <span class="material-symbols-outlined">
                                            call_made
                                        </span>
                                    </a>
                                </button>
                                <div className="proj-lang">
                                    <b>Technologies</b> : ReactJs, NodeJs, ExpressJs, MongoDb
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <div className="proj-img">
                                <img src={orddkProj} alt="" />
                            </div>
                            <div className="proj-content">
                                <div className="proj-title">Order Desk</div>
                                <div className="proj-desc">
                                    <p>
                                        Order desk is a portal for customers to order for food in restaurent by just few clicks and get the product delivered to their table in a quick and simple way.
                                    </p>
                                </div>
                                <div className="proj-lang">
                                    <b>Technologies</b> : ReactJs, NodeJs, ExpressJs, MongoDb
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <div className="proj-img">
                                <img src={pmdrProj} alt="" />
                            </div>
                            <div className="proj-content">
                                <div className="proj-title">Pomodoro App Clone</div>
                                <div className="proj-desc">
                                    <p>
                                        Boost your productivity with Pomodor—an efficient React app that helps you work in focused intervals, setting timers like 25 minutes, punctuated by customizable short breaks of your choice.
                                    </p>
                                </div>
                                {/* <button className="github-btn btn">
                                    <a href="">
                                        Github link <span class="material-symbols-outlined">
                                            call_made
                                        </span>
                                    </a>
                                </button> */}
                                <div className="proj-lang">
                                    <b>Technologies</b> : HTML 5, CSS 3, ReactJs
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <div className="proj-img">
                                <img src={tdoProj} alt="" />
                            </div>
                            <div className="proj-content">
                                <div className="proj-title">Todo List</div>
                                <div className="proj-desc">
                                    <p>
                                        Stay organized with Todo—an interactive React app for swiftly adding and managing your daily tasks, ensuring a productive day ahead.
                                    </p>
                                </div>
                                {/* <button className="github-btn btn">
                                    <a href="">
                                        Github link <span class="material-symbols-outlined">
                                            call_made
                                        </span>
                                    </a>
                                </button> */}
                                <div className="proj-lang">
                                    <b>Technologies</b> : HTML 5, CSS 3, ReactJs
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <div className="proj-img">
                                <img src={drnProj} alt="" />
                            </div>
                            <div className="proj-content">
                                <div className="proj-title">Futuristic Drones Website</div>
                                <div className="proj-desc">
                                    <p>
                                        Explore the world of drones through this classic portfolio website, showcasing the cutting-edge features of the company's drone technology.
                                    </p>
                                </div>
                                <button className="github-btn btn">
                                    <a href="https://vsw-designs-drones-technology.w3spaces.com/" target="_blank" rel="noreferrer">
                                        View Live <span class="material-symbols-outlined">
                                            call_made
                                        </span>
                                    </a>
                                </button>
                                <div className="proj-lang">
                                    <b>Technologies</b> : HTML 5, CSS 3
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <div className="proj-img">
                                <img src={tchProj} alt="" />
                            </div>
                            <div className="proj-content">
                                <div className="proj-title">Future Technology</div>
                                <div className="proj-desc">
                                    <p>
                                        Dive into the future with "Future Technologies," a captivating blog featuring a professional and visually appealing GUI that also showcases my designing ability. Explore the possibilities of tomorrow today.
                                    </p>
                                </div>
                                {/* <button className="github-btn btn">
                                    <a href="">
                                        Github link <span class="material-symbols-outlined">
                                            call_made
                                        </span>
                                    </a>
                                </button> */}
                                <div className="proj-lang">
                                    <b>Technologies</b> : HTML 5, CSS 3
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="certifications" id="certifications">
                    <div className="sec-title">Certifications</div>
                    <div className="certi-list">
                        <div className="certificate">
                            <div className="certi-title">MERN Stack Development Course</div>
                            <div className="certi-img">
                                <img src={crtiudmy} alt="" />
                            </div>
                            <div className="certi-crd">
                                <div className="crti-num">01</div>
                            </div>
                        </div>
                        <div className="certificate">
                            <div className="certi-title">Web Development Fundamentals</div>
                            <div className="certi-img">
                                <img src={crtiwdev} alt="" />
                            </div>
                            <div className="certi-crd">
                                <div className="crti-num">02</div>
                            </div>
                        </div>
                        <div className="certificate">
                            <div className="certi-title">Listening Competition FunFest 2022-23</div>
                            <div className="certi-img">
                                <img src={crtilstn} alt="" />
                            </div>
                            <div className="certi-crd">
                                <div className="crti-num">03</div>
                            </div>
                        </div>
                        <div className="certificate">
                            <div className="certi-title">C Programming IIT Bombay</div>
                            <div className="certi-img">
                                <img src={crticp} alt="" />
                            </div>
                            <div className="certi-crd">
                                <div className="crti-num">04</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="education">
                    <div className="sec-title">Education</div>
                    <div className="education-list">
                        <div className="edu">
                            <div className="edu-title">HSC - 2020-2021</div>
                            <div className="edu-desc">Compeleted at St. Joseph's E. T. High School, Valsad</div>
                        </div>
                        <div className="edu">
                            <div className="edu-title">HSC - 2020-2021</div>
                            <div className="edu-desc">Compeleted at St. Joseph's E. T. High School, Valsad</div>
                        </div>
                        <div className="edu">
                            <div className="edu-title">HSC - 2020-2021</div>
                            <div className="edu-desc">Compeleted at St. Joseph's E. T. High School, Valsad</div>
                        </div>
                    </div>
                </section> */}
                <section section className="contact" id="contact" >
                    <div className="sec-title">Contact Me</div>
                    <div className="contact-me">
                        <div className="contact-content">
                            <div className="cnt-bx1">
                                <div className="cnt-title">Lets Connect...</div>
                                <div className="cnt-desc">
                                    Feel free to reach out—I'm just a click away to connect and collaborate !
                                </div>
                            </div>
                        </div>
                        <div className="contacts">
                            <div className="cnt-bx2">
                                <a href="mailto:vishankswagh@gmail.com" className="cnt-info">
                                    <span className="cnt-icon">&#64;</span>
                                    <div className="cnt em">vishankswagh@gmail.com</div>
                                </a>
                                <div onClick={() => {
                                    navigator.clipboard.writeText
                                        ("9408808941");
                                    alert("Contact Number Copied")
                                }} className="cnt-info">
                                    <span className="cnt-icon">+91</span>
                                    <div className="cnt">9408808941</div>
                                </div>
                                <a href="https://www.linkedin.com/in/vishank-wagh-11385724a" target="_blank" className="cnt-info" rel="noreferrer">
                                    <span className="cnt-icon">in</span>
                                    <div className="cnt">Linkedin Profile</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;