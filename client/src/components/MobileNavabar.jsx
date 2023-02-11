import React, { useState } from 'react'
import Home from "../assets/navbar/Default.svg"
import Team from "../assets/navbar/Team.svg"
import Achievements from "../assets/navbar/Achievements.svg"
import Events from "../assets/navbar/Events.svg"
import Project from "../assets/navbar/Project.svg"
import downarrow from "../assets/navbar/downarrow.svg"
import "../styles/components/MobileNavbar.css"

function MobileNavabar(props) {
    const [showIcons, setShowIcons] = useState(0);
    return (
        <div className='HomeButton'>
            <div className='all-page-directions'>
                {showIcons &&
                    <div className='Navigation-button'>
                        <button className='NavButtonIcon' onClick={() => { setShowIcons(!showIcons) }}>
                            {
                            `${props.theme}`=== `dark` ? <img src={downarrow} alt="" height="40px" width="20px" />:<img src={Team} alt="" height="40px" />
                            }
                        </button>
                        <button className='NavButtonIcon'>
                            <a href="/team" rel="noreferrer">
                                <img src={Team} alt="" height="40px" />
                            </a>
                        </button>
                        <button className='NavButtonIcon'>
                            <a href="/about" rel="noreferrer">
                                <img src={Achievements} alt="" height="40px" />
                            </a>
                        </button>
                        <button className='NavButtonIcon'>
                            <a href="/Schedule" rel="noreferrer">
                                <img src={Events} alt="" height="40px" />
                            </a>
                        </button>
                        <button className='NavButtonIcon'>
                            <a href="/project" rel="noreferrer">
                                <img src={Project} alt="" height="40px" />
                            </a>
                        </button>
                    </div>
                }
            </div>
            <div className='main-home-button'>
                <button className='NavButtonIcon' onClick={() => { setShowIcons(!showIcons) }}>
                    <img src={Home} alt="" height="60px" />
                </button>
            </div>
        </div>
    )
}

export default MobileNavabar
