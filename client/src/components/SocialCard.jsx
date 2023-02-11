import React, { Component } from 'react';
import  '../styles/components/socialCard.css'
class SocialCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(props) {
        return (
            <div className="card" >
                <div className="cardContent" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = this.props.url;
                }} >
                    <div className="image">
                        <img src={this.props.logo} />
                    </div>
                    <div className="socialText" >
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}

export default SocialCard;