import React from 'react';
import addBasePath from '../util/path';
import SiteHeader from '../components/header';

function redirectToSetup() {
    window.location.href = addBasePath("/setup");
}

export default function HomePage() {
    return (
        <div>
            <SiteHeader />
            <div className="container padded">
                <div className="main-tagline">
                    <h1 className="tagline-header">Take control of your server.</h1>
                    <p className="tagline-description">Enforce your rules with grace using Birdsong's infraction-point moderation system, recommended by the Discord Moderator Academy.</p>
                    <button className="responsive-button secondary-button" onClick={redirectToSetup}>
                        Get started in five minutes.
                    </button>
                </div>

            </div>
        </div>
    )
}