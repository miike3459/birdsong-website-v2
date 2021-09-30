import React from 'react';
import Image from './image';

export default class Testimonial extends React.Component {
    render() {
        // name
        // role
        // img
        return (
            <div className="testimonial flex">
                <Image className="testimonial-icon" src={this.props.img} />
                <div className="testimonial-content">
                    <div className="testimonial-author">
                        <h3 className="testimonial-author-name">{this.props.name}</h3>
                        <p className="testimonial-author-role">{this.props.role}</p>
                    </div>
                    <p className="testimonial-text">{this.props.children}</p>
                </div>
            </div>
        )
    }
}
