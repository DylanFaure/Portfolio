// Welcome page when a new user is accessing the app.

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/Home.scss";
import "../styles/Home.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { GiSouthKorea } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";

function Home() {
    return (
        <>
            <Header />
            <div className="Formation">
                <h1 className="Formation-h1">Work experience &#x26; Education</h1>
                <h5 className="Formation-h5">My previous jobs and my qualifications.</h5>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ borderTop: '3px solid #0073FF' }}
                        date="2022 - 2023"
                        iconStyle={{ background: '#0073FF', color: '#fff' }}
                        icon={<GiSouthKorea />}
                    >
                        <p className="Formation-Information-btn"><button>Unity</button><button>Unreal Engine</button><button>Maya</button><button>C#</button></p>
                        <h3 className="vertical-timeline-element-title">International Student</h3>
                        <h4 className="vertical-timeline-element-subtitle">Keimyung, Daegu, South-Korea</h4>
                        <p>Following various courses on video game development:
                            <ul>
                                <li>3D modeling</li>
                                <li>Artificial Intelligence</li>
                                <li>Virtual Reality and Augmented Reality</li>
                                <li>Game projects</li>
                                <li>2D and 3D game development</li>
                            </ul>
                        </p><br />
                        <a rel="noopener noreferrer" href={"https://www.kmu.ac.kr/uni/eng/main.jsp"} target={"_blank"}>
                            <button className="blob-btn blob-btn-Keimyung">
                                <CgWebsite size={25} /> Website
                                <span className="blob-btn__inner">
                                    <span className="blob-btn__blobs">
                                        <span className="blob-btn__blob blob-btn__blob-Keimyung"></span>
                                        <span className="blob-btn__blob blob-btn__blob-Keimyung"></span>
                                        <span className="blob-btn__blob blob-btn__blob-Keimyung"></span>
                                        <span className="blob-btn__blob blob-btn__blob-Keimyung"></span>
                                    </span>
                                </span>
                            </button>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: "none" }}>
                            <defs>
                                <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                </filter>
                            </defs>
                            </svg>
                        </a>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ borderTop: '3px solid grey' }}
                        date="April 2022 - August 2022"
                        iconStyle={{ background: 'grey', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <p className="Formation-Information-btn"><button>PHP</button><button>SQL</button><button>Javascript</button><button>Notion</button></p>
                        <h3 className="vertical-timeline-element-title">Web Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">PM-SA Internship, Paris, France</h4>
                        <p>
                            <i>PM SA is specializes in the production of feature films, TV dramas, animated films, and documentaries.</i><br /><br />
                            What I did during my internship:
                            <ul>
                                <li>Maintenance and development of the company's various applications.</li>
                            </ul>
                        </p><br />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ borderTop: '3px solid green' }}
                        date="September 2020 - December 2020"
                        iconStyle={{ background: 'green', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <p className="Formation-Information-btn"><button>PHP</button><button>Vue.js</button><button>Laravel</button><button>Figma</button><button>Trello</button></p>
                        <h3 className="vertical-timeline-element-title">Web Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">ANDALOUS Internship, Montsoult, France</h4>
                        <p>
                            <i>ANDALOUS is a society working in the agri-food sector.</i><br /><br />
                            What I did during my internship:
                            <ul>
                                <li>Creating the company's website within the digital team.</li>
                            </ul>
                        </p><br />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ borderTop: '3px solid red' }}
                        date="2019 - 2024"
                        iconStyle={{ background: 'red', color: '#fff' }}
                        icon={<IoSchool />}
                    >
                        <p className="Formation-Information-btn"><button>C</button><button>C++</button><button>Multi-language</button></p>
                        <h3 className="vertical-timeline-element-title">BAC +5, Expert in Information Technologies</h3>
                        <h4 className="vertical-timeline-element-subtitle">Epitech, Le Kremlin-Bicêtre, France</h4>
                        <p>
                            Completion of projects individually or in groups in various sectors such as:
                            <ul>
                                <li>Artificial Intelligence</li>
                                <li>Video Games</li>
                                <li>DevOps</li>
                                <li>Web</li>
                                <li>Cybersecurity</li>
                            </ul>
                        </p><br />
                        <a rel="noopener noreferrer" href={"https://www.epitech.eu/"} target={"_blank"}>
                            <button className="blob-btn blob-btn-Epitech">
                                <CgWebsite size={25} /> Website
                                <span className="blob-btn__inner">
                                    <span className="blob-btn__blobs">
                                        <span className="blob-btn__blob blob-btn__blob-Epitech"></span>
                                        <span className="blob-btn__blob blob-btn__blob-Epitech"></span>
                                        <span className="blob-btn__blob blob-btn__blob-Epitech"></span>
                                        <span className="blob-btn__blob blob-btn__blob-Epitech"></span>
                                    </span>
                                </span>
                            </button>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: "none" }}>
                            <defs>
                                <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                </filter>
                            </defs>
                            </svg>
                        </a>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ borderTop: '3px solid orange' }}
                        date="2018 - 2019"
                        iconStyle={{ background: 'orange', color: '#fff' }}
                        icon={<FaSchool />}
                    >
                        <p className="Formation-Information-btn"><button>Python</button><button>HTML5</button><button>CSS3</button></p>
                        <h3 className="vertical-timeline-element-title">Bachelor of Engineering Science</h3>
                        <h5 className="vertical-timeline-element-subtitle">Lycée les pierres vives, Achères, France</h5>
                        <p>
                            Discovering programming while creating my very first games using the EduPython software.<br /><br />
                            BAC S-SI (Engineering Science)<br />
                            ISN option (Computer science and digital sciences)<br />
                            Activities and Societies: Film club<br />
                        </p><br />
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <Footer />
        </>
    );
}

export default Home;