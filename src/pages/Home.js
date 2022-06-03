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
                        <p className="Formation-Information-btn"><button>Unity</button><button>Unreal Engine</button><button>Blender</button><button>Multi-language</button></p>
                        <h3 className="vertical-timeline-element-title">International Student</h3>
                        <h4 className="vertical-timeline-element-subtitle">Keimyung, Daegu, South-Korea</h4>
                        <p>International year, learning game development</p><br />
                        <a rel="noopener noreferrer" href={"https://www.kmu.ac.kr/uni/eng/main.jsp"} target={"_blank"}>
                            <button class="blob-btn blob-btn-Keimyung">
                                <CgWebsite size={25} /> Website
                                <span class="blob-btn__inner">
                                    <span class="blob-btn__blobs">
                                        <span class="blob-btn__blob blob-btn__blob-Keimyung"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Keimyung"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Keimyung"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Keimyung"></span>
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
                        <p className="Formation-Information-btn"><button>PHP</button><button>Javascript</button></p>
                        <h3 className="vertical-timeline-element-title">Web Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">PM-SA Internship, Paris, France</h4>
                        <p>
                            PM SA is specializes in the production of feature films, TV dramas, animated films, and documentaries.
                        </p><br />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ borderTop: '3px solid green' }}
                        date="September 2020 - December 2020"
                        iconStyle={{ background: 'green', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <p className="Formation-Information-btn"><button>PHP</button><button>Laravel</button><button>Figma</button></p>
                        <h3 className="vertical-timeline-element-title">Web Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">ANDALOUS Internship, Montsoult, France</h4>
                        <p>
                            ANDALOUS is a society working in the agri-food sector.
                        </p><br />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ borderTop: '3px solid red' }}
                        date="2019 - 2024"
                        iconStyle={{ background: 'red', color: '#fff' }}
                        icon={<IoSchool />}
                    >
                        <p className="Formation-Information-btn"><button>C</button><button>C++</button><button>ReactJS</button><button>Multi-language</button></p>
                        <h3 className="vertical-timeline-element-title">BAC +5, Expert in Information Technologies</h3>
                        <h4 className="vertical-timeline-element-subtitle">Epitech, Le Kremlin-Bicêtre, France</h4>
                        <p>
                            Realization of individual and group projects (which can range from 4 to 6 people)
                        </p><br />
                        <a rel="noopener noreferrer" href={"https://www.epitech.eu/"} target={"_blank"}>
                            <button class="blob-btn blob-btn-Epitech">
                                <CgWebsite size={25} /> Website
                                <span class="blob-btn__inner">
                                    <span class="blob-btn__blobs">
                                        <span class="blob-btn__blob blob-btn__blob-Epitech"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Epitech"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Epitech"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Epitech"></span>
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
                            Activities and Societies: Film club<br /><br />
                            BAC S-SI (Engineering Science)<br />
                            ISN option (Computer science and digital sciences)<br />
                        </p><br />
                    </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            <Footer />
        </>
    );
}

export default Home;