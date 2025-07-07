import "../styles/Home.css";
import prof from "../images/portfolio_img_2025.png";
// import certiImg from "../images/certificate.png";
// import resumePDF from "../files/RESUME.pdf";
// import resume from "../images/resume_image.png";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Certificate from "../components/Certificate";
import Experience from "../components/Experience";
import githubIcon from "../images/github.png";
import mailIcon from "../images/mail.png";
import { skills, experiences, projects, certificates } from '../files/data.js';
// import axios from "axios";

function Home() {
    // (async () => {
    //     const response = await axios.get(`https://slms-backend.vercel.app/get/visitor-count/portfolio-v`);
    //     console.log("Visitor Count:", response.data.visitCount);
    // })();
    return (
        <>
            <div className="home" id="home">
                <a className="top-icon" href="#home">
                    <span className="material-symbols-outlined">
                        expand_less
                    </span>
                </a>
                <section className="intro">
                    <div className="left-sec">
                        <h1>
                            <div className="greet">Hii There!! , Myself</div>
                            <div className="name">Vishank Wagh</div>
                        </h1>
                        <div className="title">Software Development <span className="mern">Engineer</span> </div>
                        <div className="intro-skills">
                            <span className="intro-skl">Java</span>
                            <span className="intro-skl">MERN Stack</span>
                            <span className="intro-skl">DSA</span>
                            <span className="intro-skl">Problem Solving</span>
                        </div>
                    </div>
                    <div className="right-sec">
                        <div className="dev-logo-div"><img src="https://icons8.com/icon/11260/source-code" alt="" /></div>
                        <div className="my-image">
                            <img className="my-img" src={prof} alt="" />
                        </div>
                        <span className="dev-logo">{"</>"}</span>
                        <span className="dev-logo">{"</>"}</span>
                    </div>
                    <span className="bg-cir-1"></span>
                    <span className="bg-cir-2"></span>
                </section>
                <section className="about" id="about">
                    <div className="sec-title">About</div>
                    <div className="abt-content">
                        <b>👋 Welcome,</b> I am an aspiring Software Developer completed my Integrated Master's in Computer Applications at Parul University, Vadodara, Gujarat.
                        <br /><br />
                        🌟Currently embarking on the path to Master Data Structures and Algorithms 🚀 by taking up the <i>#Learn in Public</i> Challenge 👊.
                        <br />
                        <span className="code-profiles">Problems Solved: <a href="https://leetcode.com/u/VishankWagh/" target="_blank" rel="noreferrer" className="code-profile-link">Leetcode - 175+</a> | <a href="https://drive.google.com/file/d/1BeQltQ79KvWEXp7fj9ioVCSfmRtURzDb/view" target="_blank" rel="noreferrer" className="code-profile-link">Acciojob - 360+</a></span>
                        <br /><br />
                        ✒️ My key skills are Java, Javascript and problem solver. During my academic journey I also worked on a couple of real world projects sharpening my skills.
                        {/* <b>👋 Welcome,</b> I am Vishank Shailesh Wagh, an aspiring software developer pursuing an Integrated Master's in Computer Applications at Parul University. 🌐
                        <br />
                        <br />
                        💻 Skilled in ReactJS, NodeJS, ExpressJS, and MongoDB, I've already crafted a dynamic e-commerce project for local retail shops during my academic journey. 🛍 */}
                    </div>
                    <div className="abt-btns">
                        <a href="#contact" className="hireme-btn">Contact Me</a>
                        <a href="https://drive.google.com/file/d/16hxsjUOYLiG8TOWAc79YLWF6tEyWQb0q/view?usp=sharing" target="_blank" rel="noreferrer" className="resume-btn">View Resume</a>
                        {/* <a href="#about" className="resume-btn" onClick={() => {
                            const vr = document.getElementById("view-resume").style;
                            vr.visibility = "visible";
                            vr.opacity = "1";
                        }}>My Resume</a> */}
                    </div>
                    {/* <div className="view-resume" id="view-resume" style={{ visibility: "hidden", opacity: "0" }}>
                        <div className="cross" onClick={() => {
                            const vr = document.getElementById("view-resume").style;
                            vr.opacity = "0";
                            vr.visibility = "hidden";
                        }}>&times;</div>
                        <div className="resume-img">
                            <img src={resume} alt="" className="pdf" />
                            <div className="dwnld-btn">
                                <a href={resumePDF} download="Vishank-Wagh_Resume">Download Resume</a>
                            </div>
                        </div>
                    </div> */}
                </section>
                <section className="my-skill" id="my-skill">
                    <div className="sec-title">My Skills</div>
                    <div className="skill-list">
                        <Skills title="Frontend" skills={skills.frontend} />
                        <Skills title="Backend" skills={skills.backend} />
                        <Skills title="Other" skills={skills.other} />
                    </div>
                </section>
                <section className="experiences" id="experiences">
                    <div className="sec-title">Experience</div>
                    <div className="expr-list">
                        <div className="expr-line"></div>
                        {experiences.map((expr, ind) => {
                            return <Experience first={ind === 0 ? "expr-first" : ""} expr={expr} />
                        })}
                        {/* <Experience first="expr-first" logo="mrLgg" company='Mr Loggage' role='Full Stack Web Developer' duration="Jun 2024 - Present" desc={exprDesc.mrLgg} skills={exprSkills.mrLgg} />
                        <Experience logo="nvpd" company='Navpad Infotech' role='Full Stack Developer' duration="Jan 2024 - May 2024" desc={exprDesc.navPd} skills={exprSkills.navPd} /> */}
                    </div>
                </section>
                <section className="projects" id="projects">
                    <div className="sec-title">Projects</div>
                    <div className="proj-list">
                        {projects.map(project => {
                            return <Project project={project} />
                        })}
                        {/* <Project title="Quik Buy" logo="qbProj" github="https://github.com/VishankWagh/Online-Local-Store" live="https://quik-buy.vercel.app" techs="ReactJs, NodeJs, ExpressJs, MongoDb" desc="Streamline your local shopping experience with Quik Buy—an MERN stack online store connecting you to nearby retail shops for effortless product ordering and doorstep delivery." />
                        <Project title="Personal Portfolio Website" logo="pfloProj" github="https://github.com/VishankWagh/Vishank-Portfolio" live="https://portfolio-vishank-wagh.vercel.app" techs="ReactJs, HTML 5, CSS 3, Javascript" desc="Checkout my personal portfolio website to have a glimpse of my skillsets, experiences and how well i can contribute them in building something new and innovative." />
                        <Project title="Order Desk" logo="orddkProj" techs="ReactJs, NodeJs, ExpressJs, MongoDb" desc="Order desk is a portal for customers to order for food in restaurent by just few clicks and get the product delivered to their table in a quick and simple way." />
                        <Project title="Pomodoro App Clone" logo="pmdrProj" techs="ReactJs, HTML 5, CSS 3" desc="Boost your productivity with Pomodor—an efficient React app that helps you work in focused intervals, setting timers like 25 minutes, punctuated by customizable short breaks of your choice." />
                        <Project title="Futuristic Drones Website" logo="drnProj" live="https://vsw-designs-drones-technology.w3spaces.com/" techs="HTML 5, CSS 3" desc="Explore the world of drones through this classic portfolio website, showcasing the cutting-edge features of the company's drone technology." />
                        <Project title="Future Technology" logo="tchProj" techs="HTML 5, CSS 3" desc="Dive into the future with 'Future Technologies,' a captivating blog featuring a professional and visually appealing GUI that also showcases my designing ability. Explore the possibilities of tomorrow today." /> */}
                        {/* <Project title="Todo List" logo="tdoProj" techs="HTML 5, CSS 3, ReactJs" desc="Stay organized with Todo—an interactive React app for swiftly adding and managing your daily tasks, ensuring a productive day ahead." /> */}
                    </div>
                </section>
                <section className="certifications" id="certifications">
                    <div className="sec-title">Certifications</div>
                    <div className="certi-list">
                        {certificates.map((certificate, ind) => {
                            return <Certificate certificate={certificate} num={`0${ind + 1}`} />
                        })}
                        {/* <Certificate title='Udemy: The Web Developer Bootcamp 2024' imgUrl='crtiudmy1' num='01' />
                        <Certificate title='Udemy: The Complete 2023 Web Development Bootcamp' imgUrl='crtiudmy2' num='02' />
                        <Certificate title='Scaler: SOLID Principles every developer must know' imgUrl='crtisolid' num='03' />
                        <Certificate title='Sololearn: Web Development Fundamentals' imgUrl='crtiwdev' num='04' />
                        <Certificate title='Listening Competition FunFest 2022-23' imgUrl='crtilstn' num='05' /> */}
                    </div>
                </section>
                <section className="contact" id="contact" >
                    <div className="sec-title">Contact Me</div>
                    <div className="contact-me">
                        <div className="contact-content">
                            <div className="cnt-bx1">
                                <div className="cnt-title">Lets Connect...</div>
                                <div className="cnt-desc">
                                    Feel free to reach out—I'm just a click away to connect and collaborate !
                                </div>
                                <div className="cnt-btns">
                                    <a href="mailto:vishankswagh@gmail.com" className="mail-btn">
                                        <div className="">Get in Touch...</div>
                                        <img src={mailIcon} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="contacts">
                            <div className="cnt-bx2">
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
                                <a href="https://www.linkedin.com/in/vishank-wagh-11385724a" target="_blank" className="cnt-info" rel="noreferrer">
                                    <span className="cnt-icon">
                                        <img src={githubIcon} alt="" />
                                    </span>
                                    <div className="cnt">Github Profile</div>
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