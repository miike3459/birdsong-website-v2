import React from 'react';

export default class ContentCard extends React.Component {
    render() {
        let title = "✔️ " + this.props.title.trim();
        return (
            <div className="content-card">
                <h2 className="content-card-title no-select">{title}</h2>
                <p className="content-card-description">{this.props.children}</p>
            </div>
        )
    }
}
