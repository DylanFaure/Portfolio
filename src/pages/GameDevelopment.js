// Welcome page when a new user is accessing the app.

import React from 'react';
import ReactPlayer from 'react-player';

import Header from '../components/Header';
import Footer from '../components/Footer';

import "../styles/GameDevelopment.scss";
import 'react-vertical-timeline-component/style.min.css';

import { AiFillGithub } from 'react-icons/ai';

function GameDevelopment() {
    return (
        <>
            <Header />
            <div className="GameDevelopment">
                <h1 className="GameDevelopment-h1">My experience in game development</h1>
                <div className="GameDevelopment-Content">Throughout my academic journey, I have
                garnered extensive experience in the realm of video game development.<br />
                Primarily through my active involvement in diverse game jams and personal learning initiatives.<br />
                Presented below is a compilation of the games I have crafted, complemented by concise
                explanations and accompanying videos.<br />
                </div>


                {/*   MagicPeak  */}
                <div className="GameDevelopment-Section MagicPeak">
                    <div className="GameDevelopment-Section-Left">
                        <div className="GameDevelopment-Section-Title">MagicPeak</div><br />
                        <div className="GameDevelopment-Section-Content">I developed this game during my study year at Keimyung University.<br />
                        This game is a fusion of a Gacha game and a 2D RPG.<br /><br />
                        In this game, the player takes on the role of a guild leader whose objective is to fight the monsters within 
                        a tower to prevent them from attacking humans.<br />
                        In order to do so, the player will have the ability to recruit mages of varying rarity and power to send them 
                        into battle within the tower.<br />
                        The player will then need to control their different characters and attempt to complete the dungeon or exit with 
                        a maximum amount of gold to recruit more powerful characters.
                        </div><br /><br />
                        
                        <a rel="noopener noreferrer" href={"https://github.com/DylanFaure/MagicPeak"} target={"_blank"}>
                            <button class="blob-btn blob-btn-Github">
                                <AiFillGithub size={25} /> Github Repository
                                <span class="blob-btn__inner">
                                    <span class="blob-btn__blobs">
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
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
                    </div>
                    <div className="GameDevelopment-Section-Right">
                        <ReactPlayer width={"800px"} height={"450px"} url='https://youtu.be/Uobo1qceacg' />
                    </div>
                </div>


                {/*   CirclesOfHell  */}
                <div className="GameDevelopment-Section CirclesOfHell">
                    <div className="GameDevelopment-Section-Left">
                        <div className="GameDevelopment-Section-Title">CirclesOfHell</div><br />
                        <div className="GameDevelopment-Section-Content">I worked on this project during my study year at 
                        Keimyung University.<br /><br />
                        This game is a local 3D platformer/dropper inspired by the anime "Made in Abyss" and Dante's "Divine Comedy".<br />
                        In this game, the player is in search of their friend, "Yellow," who fell from paradise while playing ball together.<br />
                        To find Yellow, they will have to navigate through the various circles of hell and overcome different obstacles along 
                        the way.
                        </div><br /><br />
                        
                        <a rel="noopener noreferrer" href={"https://github.com/DylanFaure/XY"} target={"_blank"}>
                            <button class="blob-btn blob-btn-Github">
                                <AiFillGithub size={25} /> Github Repository
                                <span class="blob-btn__inner">
                                    <span class="blob-btn__blobs">
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
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
                    </div>
                    <div className="GameDevelopment-Section-Right">
                        <ReactPlayer width={"800px"} height={"450px"} url='https://youtu.be/DfTdSSzIfOQ' />
                    </div>
                </div>


                {/*   TheGreatParty  */}
                <div className="GameDevelopment-Section TheGreatParty">
                    <div className="GameDevelopment-Section-Left">
                        <div className="GameDevelopment-Section-Title">TheGreatParty</div><br />
                        <div className="GameDevelopment-Section-Content">I developed this game during my studies at Epitech as part of a 
                        Maker Project.<br /><br />
                        This game is a 2D multiplayer party game inspired by Pico Park game for designs, that consists of several mini-games in which players compete to win.<br />
                        It features 4 themed mini-games: racing, color, timing, and shooting.
                        </div><br /><br />
                        
                        <a rel="noopener noreferrer" href={"https://github.com/DylanFaure/XY"} target={"_blank"}>
                            <button class="blob-btn blob-btn-Github">
                                <AiFillGithub size={25} /> Github Repository
                                <span class="blob-btn__inner">
                                    <span class="blob-btn__blobs">
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
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
                    </div>
                    <div className="GameDevelopment-Section-Right">
                        <ReactPlayer width={"800px"} height={"450px"} url='https://youtu.be/Sg3cKoGYJwQ' />
                    </div>
                </div>


                {/*   JeonjaKape  */}
                <div className="GameDevelopment-Section JeonjaKape">
                    <div className="GameDevelopment-Section-Left">
                        <div className="GameDevelopment-Section-Title">JeonjaKape</div><br />
                        <div className="GameDevelopment-Section-Content">I created this game during my studies at Keimyung University.<br />
                        It is a 3D horror game where the player's objective is to collect keys in order to open doors and escape.<br /><br />
                        The player takes on the role of Kim Dong-Soo, a computer science student who fell asleep in a PC Bang (internet cafe).<br />
                        Upon waking up, he sees a strange figure passing by him...<br />
                        It appears to be different than a human...
                        </div><br /><br />
                        
                        <a rel="noopener noreferrer" href={"https://github.com/DylanFaure/XY"} target={"_blank"}>
                            <button class="blob-btn blob-btn-Github">
                                <AiFillGithub size={25} /> Github Repository
                                <span class="blob-btn__inner">
                                    <span class="blob-btn__blobs">
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
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
                    </div>
                    <div className="GameDevelopment-Section-Right">
                        <ReactPlayer width={"800px"} height={"450px"} url='https://youtu.be/aDRwfR_ZmiI' />
                    </div>
                </div>


                {/*   UnlockQuest  */}
                <div className="GameDevelopment-Section UnlockQuest">
                    <div className="GameDevelopment-Section-Left">
                        <div className="GameDevelopment-Section-Title">UnlockQuest</div><br />
                        <div className="GameDevelopment-Section-Content">I developed this game to participate in a Game Jam on the theme of 'success' during my studies at Epitech.<br />
                        This game is a 2D platformer speedrun and has the unique feature of granting abilities to the player along the way.<br /><br />
                        The goal is to complete the game by overcoming all obstacles without dying.<br />
                        It also includes a hardcore mode where the player loses their abilities gained from racing when they die.
                        </div><br /><br />
                        
                        <a rel="noopener noreferrer" href={"https://github.com/DylanFaure/XY"} target={"_blank"}>
                            <button class="blob-btn blob-btn-Github">
                                <AiFillGithub size={25} /> Github Repository
                                <span class="blob-btn__inner">
                                    <span class="blob-btn__blobs">
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
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
                    </div>
                    <div className="GameDevelopment-Section-Right">
                        <ReactPlayer width={"800px"} height={"450px"} url='https://youtu.be/mxEUtuvRmrc' />
                    </div>
                </div>


                {/*   FootTime  */}
                <div className="GameDevelopment-Section FootTime">
                    <div className="GameDevelopment-Section-Left">
                        <div className="GameDevelopment-Section-Title">FootTime</div><br />
                        <div className="GameDevelopment-Section-Content">I worked on this project during my study year at 
                        Keimyung University.<br /><br />
                        This is a local 2D game inspired by Pong and tabletop air hockey games.<br />
                        In this game, the player controls the jersey of a chosen team and aims to score 3 goals against their 
                        opponent to win the game.<br />
                        Bonuses appear at the beginning of each round, which can increase the player's 
                        next shot power, slow down the opponent's power, and also freeze the opponent.
                        </div><br /><br />
                        
                        <a rel="noopener noreferrer" href={"https://github.com/DylanFaure/XY"} target={"_blank"}>
                            <button class="blob-btn blob-btn-Github">
                                <AiFillGithub size={25} /> Github Repository
                                <span class="blob-btn__inner">
                                    <span class="blob-btn__blobs">
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
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
                    </div>
                    <div className="GameDevelopment-Section-Right">
                        <ReactPlayer width={"800px"} height={"450px"} url='https://youtu.be/tvkaSYjRs8g' />
                    </div>
                </div>


                {/*   Bork  */}
                <div className="GameDevelopment-Section Bork">
                    <div className="GameDevelopment-Section-Left">
                        <div className="GameDevelopment-Section-Title">Bork</div><br />
                        <div className="GameDevelopment-Section-Content">This project is one of the very first games I created.<br />
                        I made it when I was in high school, and I made some refinements to it during my studies at Epitech.<br /><br />
                        It's a 2D game where the player controls BORK, a dog who fights against his arch-nemesis, Squealer.<br />
                        The game features multiple levels of difficulty.<br />
                        Depending on the levels, the boss will use spells of varying strength.
                        </div><br /><br />
                        
                        <a rel="noopener noreferrer" href={"https://github.com/DylanFaure/XY"} target={"_blank"}>
                            <button class="blob-btn blob-btn-Github">
                                <AiFillGithub size={25} /> Github Repository
                                <span class="blob-btn__inner">
                                    <span class="blob-btn__blobs">
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
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
                    </div>
                    <div className="GameDevelopment-Section-Right">
                        <ReactPlayer width={"800px"} height={"450px"} url='https://youtu.be/YjTU7zbJcTo' />
                    </div>
                </div>


                {/*   ShadowNLight  */}
                <div className="GameDevelopment-Section ShadowNLight">
                    <div className="GameDevelopment-Section-Left">
                        <div className="GameDevelopment-Section-Title">ShadowNLight</div><br />
                        <div className="GameDevelopment-Section-Content">I developed this game during my studies at Epitech.<br />
                        This is a 2D game made with unity in two day for a Jam.<br /><br />
                        We follow the theme "duality" and create a 2 players game.<br />
                        This game is online. One player is the Light (the player in the game) and the other one control the camera.<br />
                        The goal of the light is to go to top left, top right, bottom left and bottom right to pick pieces and win.<br />
                        But CARE!!! Camera player gonna try to make you move out of the camera and die!
                        </div><br /><br />
                        
                        <a rel="noopener noreferrer" href={"https://github.com/DylanFaure/XY"} target={"_blank"}>
                            <button class="blob-btn blob-btn-Github">
                                <AiFillGithub size={25} /> Github Repository
                                <span class="blob-btn__inner">
                                    <span class="blob-btn__blobs">
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
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
                    </div>
                    <div className="GameDevelopment-Section-Right">
                        <ReactPlayer width={"800px"} height={"450px"} url='https://youtu.be/lEb6aZycXWU' />
                    </div>
                </div>


                {/*   XY  */}
                <div className="GameDevelopment-Section XY">
                    <div className="GameDevelopment-Section-Left">
                        <div className="GameDevelopment-Section-Title">XY</div><br />
                        <div className="GameDevelopment-Section-Content">I developed this game during my studies at Epitech.<br />
                        This is a 2D game made with unity in two day for a Jam.<br /><br />
                        We follow the theme "duality" and create a 2 players game.<br />
                        This game is online. One player is the Light (the player in the game) and the other one control the camera.<br />
                        The goal of the light is to go to top left, top right, bottom left and bottom right to pick pieces and win.<br />
                        But CARE!!! Camera player gonna try to make you move out of the camera and die!
                        </div><br /><br />
                        
                        <a rel="noopener noreferrer" href={"https://github.com/DylanFaure/XY"} target={"_blank"}>
                            <button class="blob-btn blob-btn-Github">
                                <AiFillGithub size={25} /> Github Repository
                                <span class="blob-btn__inner">
                                    <span class="blob-btn__blobs">
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
                                        <span class="blob-btn__blob blob-btn__blob-Github"></span>
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
                    </div>
                    <div className="GameDevelopment-Section-Right">
                        <ReactPlayer width={"800px"} height={"450px"} url='https://youtu.be/ZBFJo6UEQP0' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default GameDevelopment;