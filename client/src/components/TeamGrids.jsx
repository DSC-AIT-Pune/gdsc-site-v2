import React from 'react'
import "../styles/components/teamGrids.css"
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import linkedIn from '../assets/LINKEDIN2.svg';
import GitHub from '../assets/GITHUB2.svg';
import insta from '../assets/INSTAGRAM2.svg';
import facebook from '../assets/FACEBOOK2.svg';
// import { ReactComponent as GitHub } from '../assets/linkedIn.svg';

function TeamGrids(props) {
    return (
        <div className='team-membersCard'>
            <div className='team-membersSocials'>
                <a href={props.gh} target="_blank" rel="noreferrer">
                    <img src={GitHub} alt="gh" />
                </a>
                <a href={props.ln} target="_blank" rel="noreferrer">
                    <img src={linkedIn} alt="gh" />
                </a>
                <a href={props.fb} target="_blank" rel="noreferrer">
                    <img src={facebook} alt="gh" />
                </a>
                <a href={props.ig} target="_blank" rel="noreferrer">
                    <img src={insta} alt="gh" />
                </a>
            </div>
            <div className='team-details'>
                <div className='team-membersImage'>
                    <img src={props.img} alt='dsc' />
                </div>
                <div className='team-memberName'>{props.name}</div>
                <div className='team-position'>{props.position}</div>
            </div>
        </div>
    )
}

export default TeamGrids