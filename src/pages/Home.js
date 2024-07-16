import "../styles/Home.css";
import prof from "../images/pflio_img_edt.png";
// import certiImg from "../images/certificate.png";
import resumePDF from "../files/RESUME.pdf";
import resume from "../images/resume_image.png";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Certificate from "../components/Certificate";
import Experience from "../components/Experience";
import githubIcon from "../images/github.png";
import mailIcon from "../images/mail.png";
import { skills, exprSkills, exprDesc } from '../files/data.js';
import axios from "axios";

function Home() {
    (async () => {
        const response = await axios.get(`https://slms-backend.vercel.app/get/visitor-count/portfolio-v`);
        console.log("Visitor Count:", response.data.visitCount);
    })();
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
                        <div className="title"><span className="mern">MERN</span> STACK DEVELOPER</div>
                        <div className="intro-skills">
                            <span className="intro-skl">Mongo DB</span>
                            <span className="intro-skl">Express Js</span>
                            <span className="intro-skl">React Js</span>
                            <span className="intro-skl">Node Js</span>
                        </div>
                    </div>
                    <div className="right-sec">
                        <div className="dev-logo-div"><img src="https://icons8.com/icon/11260/source-code" alt="" /></div>
                        <img className="my-img" src={prof} alt="" />
                        <span className="dev-logo">{"</>"}</span>
                        <span className="dev-logo">{"</>"}</span>
                    </div>
                </section>
                <section className="about" id="about">
                    <div className="sec-title">About</div>
                    <div className="abt-content">
                        <b>👋 Welcome,</b> myself Vishank Shailesh Wagh, an aspiring web developer pursuing an Integrated Master's in Computer Applications at Parul University. 🌐
                        <br />
                        <br />
                        💻 Skilled in ReactJS, NodeJS, ExpressJS, and MongoDB, I've already crafted a dynamic e-commerce project for local retail shops during my academic journey. 🛍
                    </div>
                    <div className="abt-btns">
                        <a href="#contact" className="hireme-btn">Contact Me</a>
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
                            {/* <object class="pdf" data={`${resumePDF}?zoom=67%`} zoom="67%">
                            </object> */}
                            <img src={resume} alt="" className="pdf" />
                            <div className="dwnld-btn">
                                <a href={resumePDF} download="Vishank-Wagh_Resume">Download Resume</a>
                            </div>
                        </div>
                    </div>
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
                        <Experience first="expr-first" logo="mrLgg" company='Mr Loggage' role='Full Stack Web Developer' duration="Jun 2024 - Present" desc={exprDesc.mrLgg} skills={exprSkills.mrLgg} />
                        <Experience logo="nvpd" company='Navpad Infotech' role='Full Stack Developer' duration="Jan 2024 - May 2024" desc={exprDesc.navPd} skills={exprSkills.navPd} />
                    </div>
                </section>
                <section className="projects" id="projects">
                    <div className="sec-title">Projects</div>
                    <div className="proj-list">
                        <Project title="Student Leave Management System" logo="slmsProj" github="https://github.com/VishankWagh/SLMS" live="https://student-leave-management-system.netlify.app" techs="ReactJs, NodeJs, ExpressJs, MongoDb" desc="Built an online platform to tackle a real world problem by managing student’s leaves on the SLMS system, which was assigned to me as an intern at Navpad Infotech." />
                        <Project title="Quik Buy" logo="qbProj" github="https://github.com/VishankWagh/Online-Local-Store" live="https://quik-buy.vercel.app" techs="ReactJs, NodeJs, ExpressJs, MongoDb" desc="Streamline your local shopping experience with Quik Buy—an MERN stack online store connecting you to nearby retail shops for effortless product ordering and doorstep delivery." />
                        <Project title="Personal Portfolio Website" logo="pfloProj" github="https://github.com/VishankWagh/Vishank-Portfolio" live="https://portfolio-vishank-wagh.vercel.app" techs="ReactJs, HTML 5, CSS 3, Javascript" desc="Checkout my personal portfolio website to have a glimpse of my skillsets, experiences and how well i can contribute them in building something new and innovative." />
                        <Project title="Order Desk" logo="orddkProj" techs="ReactJs, NodeJs, ExpressJs, MongoDb" desc="Order desk is a portal for customers to order for food in restaurent by just few clicks and get the product delivered to their table in a quick and simple way." />
                        <Project title="Pomodoro App Clone" logo="pmdrProj" techs="ReactJs, HTML 5, CSS 3" desc="Boost your productivity with Pomodor—an efficient React app that helps you work in focused intervals, setting timers like 25 minutes, punctuated by customizable short breaks of your choice." />
                        <Project title="Futuristic Drones Website" logo="drnProj" live="https://vsw-designs-drones-technology.w3spaces.com/" techs="HTML 5, CSS 3" desc="Explore the world of drones through this classic portfolio website, showcasing the cutting-edge features of the company's drone technology." />
                        <Project title="Future Technology" logo="tchProj" techs="HTML 5, CSS 3" desc="Dive into the future with 'Future Technologies,' a captivating blog featuring a professional and visually appealing GUI that also showcases my designing ability. Explore the possibilities of tomorrow today." />
                        {/* <Project title="Todo List" logo="tdoProj" techs="HTML 5, CSS 3, ReactJs" desc="Stay organized with Todo—an interactive React app for swiftly adding and managing your daily tasks, ensuring a productive day ahead." /> */}
                    </div>
                </section>
                <section className="certifications" id="certifications">
                    <div className="sec-title">Certifications</div>
                    <div className="certi-list">
                        <Certificate title='Udemy: The Web Developer Bootcamp 2024' imgUrl='crtiudmy1' num='01' />
                        <Certificate title='Udemy: The Complete 2023 Web Development Bootcamp' imgUrl='crtiudmy2' num='02' />
                        <Certificate title='Scaler: SOLID Principles every developer must know' imgUrl='crtisolid' num='03' />
                        <Certificate title='Sololearn: Web Development Fundamentals' imgUrl='crtiwdev' num='04' />
                        <Certificate title='Listening Competition FunFest 2022-23' imgUrl='crtilstn' num='05' />
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